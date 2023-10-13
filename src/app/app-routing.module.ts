import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { E404Component } from './e404/e404.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './employee/login/login.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';
import { OrderlineCreateComponent } from './orderline/orderline-create/orderline-create.component';
import { OrderlineEditComponent } from './orderline/orderline-edit/orderline-edit.component';
import { OrderlineDeleteComponent } from './orderline/orderline-delete/orderline-delete.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

  { path: "customer-list", component: CustomerListComponent }, // customer list
  { path: "create", component: CreateComponent }, //customer create
  { path: "detail/:id", component: DetailComponent }, //passes in id for the url by using :id | customer detail
  { path: "edit/:id", component: EditComponent }, // customer edit
  
  { path: "employee/login", component: LoginComponent }, // employee login
  { path: "employee/employee-list", component: EmployeeListComponent }, // employee List
  { path: "employee/employee-create", component: EmployeeCreateComponent }, // employee create
  { path: "employee/employee-detail/:id", component: EmployeeDetailComponent }, // employee detail
  { path: "employee/employee-edit/:id", component: EmployeeEditComponent }, // employee edit
  
  { path: "order/order-create", component: OrderCreateComponent }, // order create
  { path: "order/order-list", component: OrderListComponent }, // order create
  { path: "order/order-detail/:id", component: OrderDetailComponent }, // order detail
  { path: "order/order-edit/:id", component: OrderEditComponent }, // order edit
  { path: "order/order-lines/:id", component: OrderLinesComponent }, // order create

  { path: "ordl/add/:oid", component: OrderlineCreateComponent }, // orderline create | "oid" is a orderid
  { path: "ordl/edit/:id", component: OrderlineEditComponent }, // orderline edit
  { path: "ordl/delete/:id", component: OrderlineDeleteComponent }, // orderline delete
 


  { path: "about", component: AboutComponent },
  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
