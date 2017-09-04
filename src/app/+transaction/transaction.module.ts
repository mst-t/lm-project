import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';

import { TransactionService } from './transaction.service';
import { TransactionModalComponent } from './transaction-modal/transaction-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: TransactionComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [
    TransactionComponent,
    TransactionModalComponent
  ],
  providers: [TransactionService]
})
export class TransactionModule { }