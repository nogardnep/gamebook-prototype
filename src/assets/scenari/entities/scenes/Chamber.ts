import { Action } from '../../../../models/Action';
import { GameController } from '../../../../models/GameController';
import { Scene } from './../../../../models/entities/Scene';

export class Chamber implements Scene {
  getName(): string {
    return 'Chamber';
  }

  getImage(): string {
    return 'scenes/chamber.jpg';
  }

  getDescription(): string[] {
    return [
      GameController.getData('corridorsDoorIsOpen')
        ? 'la porte est ouverte'
        : 'la porte est fermée',
    ];
  }

  getActions(): Action[] {
    return [
      {
        text: 'go to the corridor',
        proceed: () => {
          GameController.goTo('Corridor');
        },
      },
    ];
  }
}
