import { Injectable } from '@angular/core';
import { Action } from '../../../../models/Action';
import { GameController } from '../../../../models/GameController';
import { Scene } from '../../../../models/entities/Scene';
import { entities } from '../Entities';

export class Hall implements Scene {
  getName(): string {
    return 'Hall';
  }

  getImage(): string {
    return 'scenes/hall.jpg';
  }

  getDescription(): string[] {
    return ['Bienvenue'];
  }

  getActions(): Action[] {
    return [
      {
        text: 'take the key',
        proceed: () => {
          GameController.giveObject("ChamberKey");
        },
      },
      {
        text: 'go to the corridor',
        proceed: () => {
          GameController.goTo('Corridor');
        },
      },
    ];
  }
}
