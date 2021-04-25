import { UsableObject } from 'src/models/entities/UsableObject';
import { Hall } from './../assets/scenari/entities/scenes/Hall';
import { Scene } from './entities/Scene';
import { GameService } from './../app/services/game.service';

export class GameController {
  private static gameService: GameService;

  static init(gameService: GameService) {
    GameController.gameService = gameService;
  }

  static goTo(key: string): void {
    this.gameService.getPlay().currentSceneKey = key;
    this.gameService.emitPlay();
    this.gameService.save();
  }

  static playerOwns(key: string): boolean {
    let owned = false;

    this.gameService.getPlay().player.objects.forEach((item) => {
      if (item === key) {
        owned = true;
      }
    });

    return owned;
  }

  static giveObject(key: string): void {
    this.gameService.getPlay().player.objects.push(key);
  }

  static addScene() {}

  static getData(key: string): any {
    return this.gameService.getPlay().data[key];
  }

  static setData(key: string, value: any): void {
    this.gameService.getPlay().data[key] = value;
    this.gameService.save();
  }

  static save(): void {
    this.gameService.save();
  }
}
