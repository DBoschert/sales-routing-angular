import { Component } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  custs!: Customer[];
  locale: string = 'fr'; // connected to the pipe in bool.pipe.ts and in customer-list.component.html | picks is yes and no is either in french(fr) or English(en)
  substr: string = "";
  sortCol: string = 'name'; // used to sort
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
    private custsvc: CustomerService,
    ) {}

    ngOnInit(): void {
      this.custsvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.custs = res as Customer[];
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

}
