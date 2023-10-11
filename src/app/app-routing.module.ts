import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { E404Component } from './e404/e404.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

  { path: "customer-list", component: CustomerListComponent },
  { path: "create", component: CreateComponent },
  { path: "detail/:id", component: DetailComponent }, //passes in id for the url by using :id
  { path: "edit/:id", component: EditComponent },

  { path: "about", component: AboutComponent },
  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
