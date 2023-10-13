import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orderline } from './orderline.class';
import { OrderLinesComponent } from '../order/order-lines/order-lines.component';

@Injectable({
  providedIn: 'root'
})
export class OrderlineService {

  url: string = "http://localhost:5555/api/orderlines";
  newurl: string = "http://localhost:5555/api/orderlines";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Orderline[]>{
    return this.http.get(`${this.url}`) as Observable<Orderline[]>;
  }
  get(id: number): Observable<Orderline>{
    return this.http.get(`${this.url}/${id}`) as Observable<Orderline>;
  }
  create(ordl: Orderline): Observable<Orderline> {
    return this.http.post(`${this.url}`, ordl) as Observable<Orderline>;
  }
  change(ordl: Orderline): Observable<any>{ 
    return this.http.put(`${this.url}/${ordl.id}`, ordl) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  removeOl(id: number): Observable<any>{
    return this.http.delete(`${this.newurl}/${id}`) as Observable<any>;

  }
}
