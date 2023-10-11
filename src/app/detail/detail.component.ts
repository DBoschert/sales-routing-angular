import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  cust: Customer = new Customer();
  about!: string; // added
  message: string = ""; // added

  
  constructor(
    private custsvc: CustomerService,
    private route: ActivatedRoute, // need to use the activated route to read the path variable
    private router: Router // variable to navigate back after deleted
    ) {}
    ngOnInit(): void {
      let id = this.route.snapshot.params["id"];
      this.custsvc.get(id).subscribe({
        next: (res) => {
          console.debug(res);
          this.cust = res;
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
      this.custsvc.remove(id).subscribe({
        next: (res) => {
          console.log("Deleted...");
          this.router.navigateByUrl("/customer-list"); // navigates back to customer-list

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
