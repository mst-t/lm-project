import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'ret-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  private properties;
  constructor(private tsService: TransactionService) { }

  ngOnInit() {
    this.properties = this.tsService.getProperties();
  }
}
