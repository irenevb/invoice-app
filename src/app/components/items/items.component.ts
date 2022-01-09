import { Component, OnInit } from '@angular/core';
import { Item } from './../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  inputItem:string ="";

  inputPrice:number =0;

  total:number =0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEnable(id:number) {
    this.items.map((v,i) => {
      if(i==id) {
        v.enable = !v.enable;
        if(v.enable){
          this.total = this.total + v.price;
        }else{
          this.total = this.total - v.price;
        }
        
      }  
      return v;
    })
  }

  deleteItem (id:number) {
    this.items.map((v,i) => {
      if(i==id && v.enable) {
        this.total = this.total - v.price;
      }
    })
    this.items = this.items.filter((v, i) => i !== id);
  }

  addItem () {
    this.items.push({
      content: this.inputItem,
      price: this.inputPrice,
      enable: true
    })
    this.total = this.total + this.inputPrice;
    this.inputItem = "";
    this.inputPrice = 0;
  }
}
