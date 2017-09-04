import { Injectable } from '@angular/core';
import { Property } from './Property';

@Injectable()
export class TransactionService { 

  private properties: Array<Property> = [
    {image:"./images/dummy1.jpg", address1: "234 East 23rd Street #12B", area: "Gramercy Park", signed: true, rooms: 2, baths: 1, priceForSale: 2990000, pricePerSf: 1200},
    {image:"./images/dummy2.jpg", address1: "181 East 90th Street Carnegie Hill", address2: "The Visionnaire 1404", area: "Carnegie Hill", signed: true, rooms: 2, baths: 1, priceForSale: 2900000, pricePerSf: 1200},
    {image:"./images/dummy3.jpg", address1: "dummy", area: "dummy", signed: false, rooms: 1, baths: 2, priceForSale: 200000, pricePerSf: 1000},
    {image:"./images/dummy4.jpg", address1: "dummy", area: "dummy", signed: true, rooms: 1, studio: true, baths: 1, priceForSale: 200000, pricePerSf: 1000},
    {image:"./images/dummy5.jpg", address1: "34 North 7th Street, Williamsburg", address2: "The Edge, North Tower PHB", area: "Williamsburg", signed: true, rooms: 1, studio: true, baths: 1, priceForSale: 1900990, pricePerSf: 1200},
  ];
  
  constructor() { }

  getProperties(): Array<Property> {
    return this.properties;
  }
}