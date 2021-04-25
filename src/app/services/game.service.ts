import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UsableObject } from 'src/models/entities/UsableObject';
import { Play } from 'src/models/Play';
import { entities } from '../../assets/scenari/entities/Entities';
import { Story } from './../../assets/scenari/entities/Story';
import { Scene } from './../../models/entities/Scene';
import { GameController } from './../../models/GameController';
import { StorageService } from './storage.service';

const PLAY_STORAGE_KEY = 'play';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private play: Play;
  playSubject = new Subject<Play>();

  constructor(private storageService: StorageService) {
    GameController.init(this);
    this.loadLastPlay();

    this.storageService.get(PLAY_STORAGE_KEY).then((result) => {
      console.log(result['scenes']);
    });

    // this.storageService.set('test', new Hall()).then(() => {
    //   this.storageService.get('test').then((result) => {
    //     console.log(result);
    //   });
    // });
  }

  emitPlay(): void {
    this.playSubject.next(this.play);
  }

  setPlay(play: Play): void {
    this.play = play;
    this.emitPlay();
  }

  getPlay(): Play {
    return this.play;
  }

  save(): void {
    this.storageService.set(PLAY_STORAGE_KEY, this.play);
  }

  getObject(key: string): UsableObject {
    return this.getEntity<UsableObject>(key);
  }

  getScene(key: string): Scene {
    return this.getEntity<Scene>(key);
  }

  getEntity<T>(key: string): T {
    let entity: T = null;
    const model = entities[key];

    if (model) {
      entity = new model();

      const storedObject = this.play.entities[key];

      if (storedObject) {
        Object.keys(storedObject).forEach((key) => {
          entity[key] = storedObject[key];
        });
      } else {
        this.play.entities[key] = entity;
        this.save();
      }
    } else {
      console.error('entity not found (check in Entities.ts)');
    }

    return entity;
  }

  startNewPlay(): Promise<Play> {
    return new Promise((resolve, reject) => {
      this.setPlay(Story.defaultPlay);
      this.save();
      resolve(this.play);
    });
  }

  loadLastPlay(): Promise<Play> {
    return new Promise((resolve, reject) => {
      this.storageService.get(PLAY_STORAGE_KEY).then((play: Play) => {
        if (play) {
          this.setPlay(play);
          resolve(this.play);
        } else {
          this.setPlay(null);
          console.error('no play found');
          reject();
        }
      });
    });
  }
}
