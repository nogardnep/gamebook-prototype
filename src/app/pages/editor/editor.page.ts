import { Scene } from './../../../models/entities/Scene';
import { GameService } from './../../services/game.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage implements OnInit, OnDestroy {
  scenes: Scene[];

  private scenesSubscription: Subscription;

  constructor(private gameService: GameService) {
    // this.scenesSubscription = this.gameService.sceneSubject.subscribe((scenes) => {
    //   this.scenes = scenes;
    // });

    // this.gameService.emitScenes();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.scenesSubscription.unsubscribe();
  }

  onClickSave() {
    // this.gameService.saveScenes();
  }
}
