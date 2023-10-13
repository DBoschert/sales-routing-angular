import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orderline } from '../orderline.class';
import { OrderlineService } from '../orderline.service';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { SystemService } from 'src/app/employee/system.service';

@Component({
  selector: 'app-orderline-create',
  templateUrl: './orderline-create.component.html',
  styleUrls: ['./orderline-create.component.css']
})
export class OrderlineCreateComponent {

  ordl: Orderline = new Orderline();
  items!: Item[];

  constructor(
    private route: ActivatedRoute,
    private ordlsvc: OrderlineService,
    private itemsvc: ItemService,
    private sysvc: SystemService,
    private router: Router
  ) {}

  save(): void {
    
    this.ordl.itemId = + this.ordl.itemId;
    console.debug("Orderline B4:", this.ordl);
    this.ordlsvc.create(this.ordl).subscribe({
      next: (res) => {
        console.debug("Created...");
        this.router.navigateByUrl(`/order/order-lines/${this.ordl.orderId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    // It is important that you read the path variable for
    // the order id and store it in the orderline instance because that is the ONLY WAY you'll get the order id FK into the instance and the create will be successful
    this.ordl.orderId = +this.route.snapshot.params["oid"];
    // get the items list
    this.itemsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.items = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
