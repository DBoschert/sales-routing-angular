import { Component } from '@angular/core';
import { Orderline } from '../orderline.class';
import { Item } from 'src/app/item/item.class';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderlineService } from '../orderline.service';
import { ItemService } from 'src/app/item/item.service';
import { SystemService } from 'src/app/employee/system.service';

@Component({
  selector: 'app-orderline-edit',
  templateUrl: './orderline-edit.component.html',
  styleUrls: ['./orderline-edit.component.css']
})
export class OrderlineEditComponent {
  ordl: Orderline = new Orderline();
  items!: Item[];
   
 constructor(
  private route: ActivatedRoute,
  private ordlsvc: OrderlineService,
  private itemsvc: ItemService,
  private sysvc: SystemService,
  private router: Router
   ) {}
 

   ngOnInit(): void {
    this.itemsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.items = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
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
 
   update(): void{
     this.ordlsvc.change(this.ordl).subscribe({
       next: (res) => {
         console.debug("Changed!");
         this.router.navigateByUrl(`/order/order-lines/${this.ordl.orderId}`);
 
       },
       error: (err) => {
         console.error(err);
       }
     });
   }

}
