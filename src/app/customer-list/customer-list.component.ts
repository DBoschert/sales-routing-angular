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
  locale: string = 'fr'; // connected to the pipe in bool.pipe.ts and in customer-list.component.html
  substr: string = "";
  
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
