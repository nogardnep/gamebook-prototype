import { Player } from './Player';
export interface Action {
  text: string;
  proceed: (player?: Player) => void;
}
