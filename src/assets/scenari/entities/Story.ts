import { Play } from 'src/models/Play';

export class Story {
  static defaultPlay: Play = {
    currentSceneKey: 'Hall',
    player: {
      name: 'Giwern',
      objects: ['ChamberKey'],
    },
    entities: {},
    data: {
      corridorsDoorIsOpen: false,
    },
  };
}
