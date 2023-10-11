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
    SortPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
