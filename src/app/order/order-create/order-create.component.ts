import { Component } from '@angular/core';
import { Order } from '../order.class';
import { Customer } from 'src/app/customer.class';
import { SystemService } from 'src/app/employee/system.service';
import { OrderService } from '../order.service';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent {
  ord: Order = new Order();
  custs!: Customer[]; // used for drop down
  constructor(
    private syssvc: SystemService,
    private ordsvc: OrderService,
    private custsvc: CustomerService,
    private router: Router
    ) {}
    
    save(): void {
      
      this.ordsvc.create(this.ord).subscribe({
        next: (res) => {
          console.debug("Created!");
          this.router.navigateByUrl("/order/order-list"); // navigates back to order-list

        },
        error: (err) => {
          console.error(err);
        }
      });
    }

    ngOnInit(): void {
      this.custsvc.list().subscribe({
        next: (res) => {
          console.debug(res);
          this.custs = res;
        },
        error: (err) => console.error(err)
      });
      
    }

}
