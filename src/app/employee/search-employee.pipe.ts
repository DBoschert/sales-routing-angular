import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.class';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(emps: Employee[], substr: string = ""): Employee[] {
    if(substr === ""){
      return emps;
    }
    let selectedCustomers: Employee[] = []; // empty array to put the customers that matches in
    for(let e of emps){
      if(
        e.email.toLowerCase().includes(substr.toLowerCase())
        || (e.email !== null && e.email.toLowerCase().includes(substr.toLowerCase()))
      ){
        selectedCustomers.push(e);
      }
    }
    return selectedCustomers;
  }

}
