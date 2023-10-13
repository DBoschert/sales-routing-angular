import { Component } from '@angular/core';
import { Item } from '../item.class';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items!: Item[];
  locale: string = 'fr'; 
  substr: string = "";
  sortCol: string = 'name'; // used to sort
  sortAsc: boolean = true; // used to sort
  // This whole function is to sort
  sortOrder(col: string): void { 
    if(col === this.sortCol) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortCol = col;
    this.sortAsc = true;
  }
  
  constructor(
    private itemsvc: ItemService,
    ) {}

    ngOnInit(): void {
      this.itemsvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.items = res as Item[];
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
}
