import { Component } from '@angular/core';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  item: Item = new Item();
  about!: string; // added
  message: string = ""; // added

  
  constructor(
    private itemsvc: ItemService,
    private route: ActivatedRoute, // need to use the activated route to read the path variable
    private router: Router // variable to navigate back after deleted
    ) {}
    ngOnInit(): void {
      let id = this.route.snapshot.params["id"];
      this.itemsvc.get(id).subscribe({
        next: (res) => {
          console.debug(res);
          this.item = res;
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
      this.itemsvc.remove(id).subscribe({
        next: (res) => {
          console.log("Deleted...");
          this.router.navigateByUrl("/item/item-list"); // navigates back to customer-list

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
