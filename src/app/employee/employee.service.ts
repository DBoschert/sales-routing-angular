import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // get url() { return `${this.init.congif.baseurl}/api/employees`; }
  url: string = "http://localhost:5555/api/employees";

  constructor(
    private http: HttpClient
  ) { }


  list(): Observable<Employee[]>{
    return this.http.get(`${this.url}`) as Observable<Employee[]>;
  }
  get(id: number): Observable<Employee>{
    return this.http.get(`${this.url}/${id}`) as Observable<Employee>;
  }
  create(employee: Employee): Observable<Employee> {
    return this.http.post(`${this.url}`, employee) as Observable<Employee>;
  }
  change(employee: Employee): Observable<any>{ //can put any because it doesn't return anything
    return this.http.put(`${this.url}/${employee.id}`, employee) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  login(email: string, password: string): Observable<Employee>{
    return this.http.get(`${this.url}/${email}/${password}`) as Observable<Employee>;
  }

}
