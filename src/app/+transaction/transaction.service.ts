import { Injectable } from '@angular/core';
import { Property } from './Property';

@Injectable()
export class TransactionService { 

  private properties: Array<Property> = [
    {image:"./images/dummy.jpg", address: "dummy", aria: "dummy", signed: true, rooms: 1, baths: 1, priceForSale: 200000, priceForRent: 1000},
    {image:"./images/dummy.jpg", address: "dummy", aria: "dummy", signed: true, rooms: 1, baths: 1, priceForSale: 200000, priceForRent: 1000},
    {image:"./images/dummy.jpg", address: "dummy", aria: "dummy", signed: true, rooms: 1, baths: 1, priceForSale: 200000, priceForRent: 1000},
    {image:"./images/dummy.jpg", address: "dummy", aria: "dummy", signed: true, rooms: 1, baths: 1, priceForSale: 200000, priceForRent: 1000},
  ];
  
  constructor() { }

  getProperties(): Array<Property> {
    return this.properties;
  }
}