import { Action } from 'src/models/Action';
import { Scene } from 'src/models/entities/Scene';

export class ChamberKey implements Scene {
  getActions: () => Action[];

  getName(): string {
    return 'Chamber key';
  }

  getImage(): string {
    return null;
  }

  getDescription(): string[] {
    return ['a key'];
  }
}
