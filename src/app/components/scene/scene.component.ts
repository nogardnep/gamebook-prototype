import { Hall } from './../../../assets/scenari/entities/scenes/Hall';
import { Corridor } from './../../../assets/scenari/entities/scenes/Corridor';
import { Scene } from './../../../models/entities/Scene';
import { Action } from '../../../models/Action';
import { Router } from '@angular/router';
import { GameService } from './../../services/game.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { entities } from 'src/assets/scenari/entities/Entities';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements OnInit, OnChanges {
  @Input() sceneKey: string;

  scene: Scene = null;

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {}

  ngOnChanges() {
    this.scene = this.getScene(this.sceneKey);
  }

  getScene(key: string): Scene {
    return this.gameService.getScene(key);
  }

  onClickAction(action: Action): void {
    action.proceed();
  }

  getImagePath(image: string): string {
    return '/assets/scenari/images/' + image;
  }
}
