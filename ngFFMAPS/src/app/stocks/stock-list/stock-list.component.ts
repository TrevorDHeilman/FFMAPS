import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { Item } from '../item';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  public stocks: Stock[];
  public newStock: Stock;
  
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.newStock = new Stock();
    this.newStock.item = new Item();
    this.stockService.getStock().subscribe(
      (stocks) => {
        console.log(stocks)
        this.stocks = stocks;
      });
  }

}
