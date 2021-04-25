import { Chamber } from './scenes/Chamber';
import { Corridor } from './scenes/Corridor';
import { Hall } from './scenes/Hall';
import { ChamberKey } from './things/ChamberKey';

export const entities = {
  Hall,
  Corridor,
  Chamber,
  ChamberKey
};

// export class Scenes {
// static hall: Scene = {
//   key: 'hall',
//   name: 'Hall',
//   image: 'scenes/hall.jpg',
//   paragraphs: ['Bienvenue '],
//   actions: [
//     {
//       text: 'go to the corridor',
//       proceed: () => {
//         GameController.goTo(Scenes.corridor);
//       },
//     },
//   ],
// };

// static corridor: Scene = {
//   key: 'corridor',
//   name: 'Corridor',
//   image: 'scenes/corridor.jpg',
//   paragraphs: [],
//   actions: [
//     {
//       text: 'go to the hall',
//       proceed: () => {
//         GameController.goTo(Scenes.hall);
//       },
//     },
//     {
//       text: 'enter the chamber',
//       proceed: (player: Player) => {
//         if (GameController.playerOwns(Things.chamberKey)) {
//           alert('You open the door with the key');
//           GameController.goTo(Scenes.chamber);
//         } else {
//           alert('The door is locked');
//         }
//       },
//     },
//   ],
// };

// static chamber: Scene = {
//   key: 'chamber',
//   name: 'Chamber',
//   image: 'scenes/chamber.jpg',
//   paragraphs: [],
//   actions: [
//     {
//       text: 'go to the corridor',
//       proceed: () => {
//         GameController.goTo(Scenes.corridor);
//       },
//     },
//   ],
// };
// }
