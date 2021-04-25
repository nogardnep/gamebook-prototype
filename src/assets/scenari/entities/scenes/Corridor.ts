import { GameController } from '../../../../models/GameController';
import { Scene } from './../../../../models/entities/Scene';

export class Corridor implements Scene {
  data = {
    doorIsOpen: false,
  };

  getName(): string {
    return 'Corridor';
  }

  getImage(): string {
    return 'scenes/corridor.jpg';
  }

  getDescription() {
    return [
      'un long couloir',
      this.data.doorIsOpen ? 'la porte est ouverte' : 'la porte est fermée',
    ];
  }

  getActions() {
    return [
      {
        text: 'go to the hall',
        proceed: () => {
          GameController.goTo('Hall');
        },
      },
      {
        text: 'go to the chamber',
        proceed: () => {
          if (!this.data.doorIsOpen) {
            alert('You open the door');
            this.data.doorIsOpen = true;
            GameController.save();
          }

          GameController.goTo('Chamber');
        },
      },
    ];
  }

  // setData(key: DataKeys, value: any): void {

  // }

  // getData(key: DataKeys): any {}
}
