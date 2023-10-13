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

    emp: Employee = new Employee(); 

  
    constructor(
      private empsvc: EmployeeService,
      private route: ActivatedRoute, 
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
            this.router.navigateByUrl("/employee/employee-list"); 
  
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
}
