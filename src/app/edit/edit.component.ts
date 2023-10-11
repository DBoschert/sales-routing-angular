import { Component } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  // cust!: Customer;
  cust: Customer = new Customer(); //put instead of "cust!: Customer" to fix a ton of pointless errors

  
  constructor(
    private custsvc: CustomerService,
    private route: ActivatedRoute, // need to use the activated route to read the path variable
    private router: Router
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

    update(): void{
      this.custsvc.change(this.cust).subscribe({
        next: (res) => {
          console.debug("Changed!");
          this.router.navigateByUrl("/customer-list"); // navigates back to customer-list

        },
        error: (err) => {
          console.error(err);
        }
      });
    }
}
