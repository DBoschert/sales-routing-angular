import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.class';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

  emp: Employee = new Employee();
  about!: string; // added
  message: string = ""; // added

  
  constructor(
    private empsvc: EmployeeService,
    private route: ActivatedRoute, // need to use the activated route to read the path variable
    private router: Router // variable to navigate back after deleted
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

// added
    delete(): void {
      this.message = "";
      let id = this.route.snapshot.params["id"]; // added
      this.empsvc.remove(id).subscribe({
        next: (res) => {
          console.log("Deleted...");
          this.router.navigateByUrl("/employee/employee-list"); // navigates back to customer-list

        },
        error: (err) => {
          if(err.status === 404){
            this.message = "Customer not found";
          }else{
            console.error(err);
          }
        }
      });
    }
}
