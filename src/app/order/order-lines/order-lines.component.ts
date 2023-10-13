import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/employee/system.service';
import { Order } from '../order.class';
import { OrderlineService } from 'src/app/orderline/orderline.service';
import { Orderline } from 'src/app/orderline/orderline.class';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.css']
})
export class OrderLinesComponent {

  ord!: Order;
  message: string = "";
  verifyDelete: boolean = false;
  ordl: Orderline = new Orderline();

  constructor(
    private syssvc: SystemService,
    private ordsvc: OrderService,
    private ordlsvc: OrderlineService,
    private route: ActivatedRoute,
    private router: Router //
  ) {}

  backorder(): void {
    this.ordsvc.backorder(this.ord).subscribe({
      next: (res) => {
        console.debug("Placed on backorder!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ok(): void {
    this.ordsvc.ok(this.ord).subscribe({
      next: (res) => {
        console.debug("Placed on ok!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  closed(): void {
    this.ordsvc.closed(this.ord).subscribe({
      next: (res) => {
        console.debug("Placed on ok!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    let id = +this.route.snapshot.params["id"]; // gets the id
    this.ordsvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.ord = res;
      }
    });
  }

  ngOnInit(): void {
    this.refresh(); // calls refresh in ngOnInit
  }

  clicked(): void {
    this.verifyDelete = true; // calls refresh in ngOnInit
  }

  remove(id:number): void {
    this.message = "";
    // don't need this | let id = this.route.snapshot.params["id"]; | because this method used the passed in "id" in remove
    this.ordlsvc.removeOl(id).subscribe({
      next: (res) => {
        console.log("Deleted...");
        this.refresh();
        this.verifyDelete = false;

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
