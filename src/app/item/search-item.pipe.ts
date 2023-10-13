import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.class';

@Pipe({
  name: 'searchItem'
})
export class SearchItemPipe implements PipeTransform {

  transform(items: Item[], substr: string = ""): Item[] {
    if(substr === ""){
      return items;
    }
    let selectedCustomers: Item[] = []; // empty array to put the customers that matches in
    for(let i of items){
      if(
        i.name.toLowerCase().includes(substr.toLowerCase())
        || (i.name !== null && i.name.toLowerCase().includes(substr.toLowerCase()))
      ){
        selectedCustomers.push(i);
      }
    }
    return selectedCustomers;
  }

}
