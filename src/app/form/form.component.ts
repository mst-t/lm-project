import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ret-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(values: any): void {
    console.log(values);
  }

}
