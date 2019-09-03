import {SideEnum} from './side-enum';
import {ItemType} from './item-type';

export class Item {
  id: bigint;
  name: string;
  level: number;
  levelRequirement: number;
  side: SideEnum;
  type: ItemType;
}
