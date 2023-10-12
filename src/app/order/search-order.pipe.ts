import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order.class';

@Pipe({
  name: 'searchOrder'
})
export class SearchOrderPipe implements PipeTransform {

  transform(emps: Order[], substr: string = ""): Order[] {
    if(substr === ""){
      return emps;
    }
    let selectedCustomers: Order[] = []; // empty array to put the customers that matches in
    for(let e of emps){
      if(
        e.description.toLowerCase().includes(substr.toLowerCase())
        || (e.description !== null && e.description.toLowerCase().includes(substr.toLowerCase()))
      ){
        selectedCustomers.push(e);
      }
    }
    return selectedCustomers;
  }
}

