import { Component, OnInit } from '@angular/core';
import { Property } from './../Property';

@Component({
  selector: 'ret-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss']
})
export class TransactionModalComponent implements OnInit {

  private isOpen:boolean = false;
  private property: Property;
  
  constructor() {}

  ngOnInit() {
  }

  onOpen(property: Property) {
    this.property = property;
    this.isOpen = true;
  }

  onClose() {
    this.isOpen = false;
  }
}
