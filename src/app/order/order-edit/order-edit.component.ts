import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order.class';
import { OrderService } from '../order.service';
import { Customer } from 'src/app/customer.class';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent {
 ord: Order = new Order(); 
 custs!: Customer[];
  
constructor(
  private ordsvc: OrderService,
  private route: ActivatedRoute, 
  private custsvc: CustomerService,
  private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.ordsvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.ord = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  // onStart(): void {
  //   this.custsvc.list().subscribe({
  //     next: (res) => {
  //       console.debug(res);
  //       this.custs = res;
  //     },
  //     error: (err) => console.error(err)
  //   });
    
  // } //add a onload type of thing on customerid



  update(): void{
    this.ordsvc.change(this.ord).subscribe({
      next: (res) => {
        console.debug("Changed!");
        this.router.navigateByUrl("/order/order-list"); 

      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}

