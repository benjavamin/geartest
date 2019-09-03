import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../data/models/item';
import {ItemType} from '../data/models/item-type';
import {MatDialog} from '@angular/material';
import {ChooseItemModalComponent} from './choose-item-modal/choose-item-modal.component';

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
    'Critical: 13.38% \n';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public onItemClick() {
    const dialogRef = this.dialog.open(ChooseItemModalComponent, {
      height: '400px',
      width: '600px',
      data: this.someItemDescription
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.someItemDescription = result;
    });
    // this.itemClicked.emit(this.selectedItem);
  }

}
