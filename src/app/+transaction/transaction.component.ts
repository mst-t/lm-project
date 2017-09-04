import { Component, ViewChild, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';

import { TransactionModalComponent } from './transaction-modal/transaction-modal.component';

@Component({
  selector: 'ret-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @ViewChild(TransactionModalComponent) tsModal: TransactionModalComponent;

  selectedItems = [
    {value: "high", label: "Sort By Highest Price"},
    {value: "low", label: "Sort By Lowest Price"},
  ];
  selectedValue = "high";

  private properties;
  constructor(private tsService: TransactionService) { }

  ngOnInit() {
    this.properties = this.tsService.getProperties();
    this.onSortItems(this.selectedValue);
  }

  onSortItems(option: string) {
    this.properties.sort((a, b) => {
      return option === 'high'? b.priceForSale - a.priceForSale : a.priceForSale - b.priceForSale;
    });
  }

  onOpenModal(id: number) {
    this.tsModal.onOpen(this.properties[id]);
  }
}
