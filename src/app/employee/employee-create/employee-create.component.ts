import { Component } from '@angular/core';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {

  cust: Employee = new Employee();
  constructor(
    private empsvc: EmployeeService,
    private router: Router
    ) {}
    
    save(): void {
      
      this.empsvc.create(this.cust).subscribe({
        next: (res) => {
          console.debug("Created!");
          this.router.navigateByUrl("/employee/employee-list"); // navigates back to employee-list

        },
        error: (err) => {
          console.error(err);
        }
      });
    }

  ngOnInit(): void {
        
  }
}
