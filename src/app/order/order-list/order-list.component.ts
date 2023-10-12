import { Component } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  ords!: Order[];
  locale: string = 'fr'; 
  substr: string = "";
  sortCol: string = 'id'; // used to sort
  sortAsc: boolean = true; // used to sort
  // This whole function is to sort
  sortOrder(col: string): void { 
    if(col === this.sortCol) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortCol = col;
    this.sortAsc = true;
  }
  
  constructor(
    private ordsvc: OrderService,
    ) {}

    ngOnInit(): void {
      this.ordsvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.ords = res as Order[];
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
}
