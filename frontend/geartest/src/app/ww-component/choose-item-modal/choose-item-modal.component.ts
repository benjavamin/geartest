import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-choose-item-modal',
  templateUrl: './choose-item-modal.component.html',
  styleUrls: ['./choose-item-modal.component.css']
})
export class ChooseItemModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ChooseItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
