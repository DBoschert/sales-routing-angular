import { Component } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  ord: Order = new Order();
  about!: string; // added
  message: string = ""; // added

  
  constructor(
    private ordsvc: OrderService,
    private route: ActivatedRoute, // need to use the activated route to read the path variable
    private router: Router // variable to navigate back after deleted
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

// added
    delete(): void {
      this.message = "";
      let id = this.route.snapshot.params["id"]; // added
      this.ordsvc.remove(id).subscribe({
        next: (res) => {
          console.log("Deleted...");
          this.router.navigateByUrl("/order/order-list"); // navigates back to customer-list

        },
        error: (err) => {
          if(err.status === 404){
            this.message = "Customer not found";
          }else{
            console.error(err);
          }
        }
      });
    }
}
