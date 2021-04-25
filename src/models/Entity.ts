import { Action } from 'src/models/Action';

export interface Entity {
  getName: () => string;
  getImage?: () => string;
  getDescription: () => string[];
  getActions: () => Action[];
}
