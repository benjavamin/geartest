import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../data/models/item';
import {ItemType} from '../data/models/item-type';

@Component({
  selector: 'app-ww-component',
  templateUrl: './ww-component.component.html',
  styleUrls: ['./ww-component.component.css']
})
export class WwComponentComponent implements OnInit {

  @Input()  selectedItem: Item;

  @Input() itemType: ItemType;

  @Output() itemClicked = new EventEmitter<Item>();

  private someItemDescription = 'Melee\n' +
    'Damage: 171 - 412\n' +
    'Power: 332\n' +
    'Speed: 0\n' +
    'Hit rating: 2.56%\n' +
    'Critical: 13.38% \n' +
    '\n' +
    'Attributes\n' +
    'Strength: 121\n' +
    'Agility: 71\n' +
    'Intellect: 1328\n' +
    'Stamina: 1882\n' +
    'Spirit: 145\n' +
    'Expertise: 0\n' +
    'Ranged\n' +
    'Damage: 10 - 11\n' +
    'Power: 61\n' +
    'Speed: 0\n' +
    'Hit rating: 2.56%\n' +
    'Critical: 0% \n' +
    '\n' +
    'Defense\n' +
    'Armor: 15947\n' +
    'Dodge: 3.29%\n' +
    'Parry: 0%\n' +
    'Block: 5%\n' +
    'Resilience: 1400\n' +
    'Spell\n' +
    'Power: 2922\n' +
    'Healing: 2922\n' +
    'Haste: 26.38%\n' +
    'Hit rating: 3.2%\n' +
    'Critical: 0% \n' +
    '\n' +
    'Resistances\n' +
    'Arcane: 0\n' +
    'Fire: 0\n' +
    'Nature: 0\n' +
    'Frost: 0\n' +
    'Shadow: 0';

  constructor() { }

  ngOnInit() {
  }

  public onItemClick() {
    // this.itemClicked.emit(this.selectedItem);
  }

}
