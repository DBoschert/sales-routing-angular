import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url: string = "http://localhost:5555/api/Orders";

  constructor(
    private http: HttpClient
  ) { }


  list(): Observable<Order[]>{
    return this.http.get(`${this.url}`) as Observable<Order[]>;
  }
  get(id: number): Observable<Order>{
    return this.http.get(`${this.url}/${id}`) as Observable<Order>;
  }
  create(Order: Order): Observable<Order> {
    return this.http.post(`${this.url}`, Order) as Observable<Order>;
  }
  change(Order: Order): Observable<any>{ //can put any because it doesn't return anything
    return this.http.put(`${this.url}/${Order.id}`, Order) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
