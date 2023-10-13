import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.class';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string = "http://localhost:5555/api/items";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Item[]>{
    return this.http.get(`${this.url}`) as Observable<Item[]>;
  }
  get(id: number): Observable<Item>{
    return this.http.get(`${this.url}/${id}`) as Observable<Item>;
  }
  create(item: Item): Observable<Item> {
    return this.http.post(`${this.url}`, item) as Observable<Item>;
  }
  change(item: Item): Observable<any>{ //can put any because it doesn't return anything
    return this.http.put(`${this.url}/${item.id}`, item) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
