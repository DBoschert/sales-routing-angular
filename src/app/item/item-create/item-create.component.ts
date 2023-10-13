import { Component } from '@angular/core';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {
  item: Item = new Item();
  constructor(
    private itemsvc: ItemService,
    private router: Router
    ) {}
    
    save(): void {
      
      this.itemsvc.create(this.item).subscribe({
        next: (res) => {
          console.debug("Created!");
          this.router.navigateByUrl("/item/item-list");

        },
        error: (err) => {
          console.error(err);
        }
      });
    }

  ngOnInit(): void {
        
  }
}
