import { Injectable } from '@angular/core';
import { Employee } from './employee.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInEmployee: Employee = new Employee;

  constructor() { }
}
