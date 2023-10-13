import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { E404Component } from './e404/e404.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { BoolPipe } from './misc/bool.pipe';
import { SearchCustomerPipe } from './customer-list/search-customer.pipe';
import { SortPipe } from './misc/sort.pipe';
import { LoginComponent } from './employee/login/login.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { SearchEmployeePipe } from './employee/search-employee.pipe';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { SearchOrderPipe } from './order/search-order.pipe';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';
import { OrderlineCreateComponent } from './orderline/orderline-create/orderline-create.component';
import { OrderlineEditComponent } from './orderline/orderline-edit/orderline-edit.component';
import { OrderlineDeleteComponent } from './orderline/orderline-delete/orderline-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    CustomerListComponent,
    E404Component,
    CreateComponent,
    EditComponent,
    DetailComponent,
    BoolPipe,
    SearchCustomerPipe,
    SortPipe,
    LoginComponent,
    EmployeeListComponent,
    SearchEmployeePipe,
    EmployeeCreateComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    OrderCreateComponent,
    OrderListComponent,
    SearchOrderPipe,
    OrderDetailComponent,
    OrderEditComponent,
    OrderLinesComponent,
    OrderlineCreateComponent,
    OrderlineEditComponent,
    OrderlineDeleteComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
