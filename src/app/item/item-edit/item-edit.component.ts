import { Component } from '@angular/core';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent {
  item: Item = new Item(); 

  
  constructor(
    private itemsvc: ItemService,
    private route: ActivatedRoute, 
    private router: Router
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

    update(): void{
      this.itemsvc.change(this.item).subscribe({
        next: (res) => {
          console.debug("Changed!");
          this.router.navigateByUrl("/item/item-list"); 

        },
        error: (err) => {
          console.error(err);
        }
      });
    }
}
