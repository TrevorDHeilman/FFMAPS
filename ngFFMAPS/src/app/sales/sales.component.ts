import {Component, Input, OnInit} from '@angular/core';
import {SalesService} from '../services/sales.service';
import {Receipt} from '../classfolder/receipt';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  private receiptsByLocation: Receipt[];
  private receiptsByEvent: Receipt[];
  @Input() sales: number;
  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.salesService.getSales().subscribe( resp => {
      this.receiptsByLocation = resp;
    });
  }

  getSales(): void {
    console.log('Sales');
    this.salesService.getSales().subscribe( resp => {
      this.receiptsByLocation = resp;
    });
  }
}
