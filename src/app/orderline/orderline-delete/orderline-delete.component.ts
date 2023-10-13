import { Component } from '@angular/core';
import { OrderlineService } from '../orderline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/order/order.class';
import { Orderline } from '../orderline.class';
import { Item } from 'src/app/item/item.class';

@Component({
  selector: 'app-orderline-delete',
  templateUrl: './orderline-delete.component.html',
  styleUrls: ['./orderline-delete.component.css']
})
export class OrderlineDeleteComponent {
  ordl: Orderline = new Orderline();
  about!: string; // added
  message: string = ""; // added
  items!: Item[];

  
  constructor(
    private ordlsvc: OrderlineService,
    private route: ActivatedRoute, // need to use the activated route to read the path variable
    private router: Router // variable to navigate back after deleted
    ) {}
    ngOnInit(): void {
      let id = this.route.snapshot.params["id"];
      this.ordlsvc.get(id).subscribe({
        next: (res) => {
          console.debug(res);
          this.ordl = res;
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
      this.ordlsvc.removeOl(id).subscribe({
        next: (res) => {
          console.log("Deleted...");
          this.router.navigateByUrl(`/order/order-lines/${this.ordl.orderId}`); // navigates back to customer-list

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
