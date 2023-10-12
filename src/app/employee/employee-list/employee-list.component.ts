import { Component } from '@angular/core';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  emps!: Employee[];
  locale: string = 'fr'; 
  substr: string = "";
  sortCol: string = 'email'; // used to sort
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
    private empsvc: EmployeeService,
    ) {}

    ngOnInit(): void {
      this.empsvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.emps = res as Employee[];
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

}
