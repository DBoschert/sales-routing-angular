import { Component } from '@angular/core';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    emps!: Employee[];
    employee: Employee = new Employee();
    email: string = this.employee.email;
    password: string = this.employee.password;
    message: string = "";
    
    
    constructor(
      private syssvc: SystemService,
      private empsvc: EmployeeService,
      private route: ActivatedRoute, // need to use the activated route to read the path variable
      private router: Router
      ) {}
      
      logined(): void{
        this.empsvc.login(this.employee.email, this.employee.password).subscribe({
          next: (res) => {
            console.debug(res);
            this.syssvc.loggedInEmployee = res;
            this.router.navigateByUrl("/home"); 
            
          },
          error: (err) => {
            console.error(err);
            if(err.status === 404){
              this.message = "Not Found!";
            } else{
              console.error(err);
            }
          }
        });
      }
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
