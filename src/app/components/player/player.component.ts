import { UsableObject } from 'src/models/entities/UsableObject';
import { Scene } from './../../../models/entities/Scene';
import { Player } from '../../../models/Player';
import { GameService } from './../../services/game.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    console.log(this.gameService.getObject('ChamberKey'))
  }

  getObject(key: string): UsableObject {
    return this.gameService.getObject(key);
  }
}
