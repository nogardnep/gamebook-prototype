import { Router } from '@angular/router';
import { Action } from '../../../models/Action';
import { GameService } from './../../services/game.service';
import { Subscription } from 'rxjs';
import { Scene } from './../../../models/entities/Scene';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-scene-page',
  templateUrl: './scene.page.html',
  styleUrls: ['./scene.page.scss'],
})
export class ScenePage implements OnInit, OnDestroy {
  @Input() sceneKey: string;

  scene: Scene = null;

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {}

  getScene(key: string): Scene {
    console.log('getSceene');
    return this.gameService.getEntity<Scene>(key);
  }

  onClickAction(action: Action): void {
    action.proceed();
  }
}
