import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = "http://localhost:5555/api/customers";

  constructor(
    private http: HttpClient
  ) { }
  
  list(): Observable<Customer[]>{
    return this.http.get(`${this.url}`) as Observable<Customer[]>;
  }
  get(id: number): Observable<Customer>{
    return this.http.get(`${this.url}/${id}`) as Observable<Customer>;
  }
  create(cust: Customer): Observable<Customer> {
    return this.http.post(`${this.url}`, cust) as Observable<Customer>;
  }
  change(cust: Customer): Observable<any>{ //can put any because it doesn't return anything
    return this.http.put(`${this.url}/${cust.id}`, cust) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
