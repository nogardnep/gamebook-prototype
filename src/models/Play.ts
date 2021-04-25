import { Player } from 'src/models/Player';

export interface Play {
  player: Player;
  currentSceneKey: string;
  entities: {};
  data: {};
}
