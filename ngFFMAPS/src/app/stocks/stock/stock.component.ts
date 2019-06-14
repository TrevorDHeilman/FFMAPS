import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {
  @Input() public stock: Stock;

  constructor() { }

  ngOnInit() {  
  }

}
