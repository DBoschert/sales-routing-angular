import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.class';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {

    // cust!: Customer;
    emp: Employee = new Employee(); //put instead of "cust!: Customer" to fix a ton of pointless errors

  
    constructor(
      private empsvc: EmployeeService,
      private route: ActivatedRoute, // need to use the activated route to read the path variable
      private router: Router
      ) {}
      ngOnInit(): void {
        let id = this.route.snapshot.params["id"];
        this.empsvc.get(id).subscribe({
          next: (res) => {
            console.debug(res);
            this.emp = res;
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
  
      update(): void{
        this.empsvc.change(this.emp).subscribe({
          next: (res) => {
            console.debug("Changed!");
            this.router.navigateByUrl("/employee/employee-list"); // navigates back to customer-list
  
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
}
