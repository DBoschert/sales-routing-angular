import { Component } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  cust: Customer = new Customer();
  constructor(
    private custsvc: CustomerService,
    private router: Router
    ) {}
    
    save(): void {
      
      this.custsvc.create(this.cust).subscribe({
        next: (res) => {
          console.debug("Created!");
          this.router.navigateByUrl("/customer-list"); // navigates back to customer-list

        },
        error: (err) => {
          console.error(err);
        }
      });
    }

    ngOnInit(): void {
      
    }
}
