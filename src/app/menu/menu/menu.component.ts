import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
// 7. create a Menu array (next one go to menu.class.ts)
  menus: Menu[] = [
    //9. create some menu objects
    new Menu("HOME", "/home"),
    new Menu("ABOUT", "/about"),
    new Menu("CUSTOMER", "/customer-list"),
    new Menu("EMPLOYEE", "/employee/employee-list"),
    new Menu("ORDER", "/order/order-list"),
    new Menu("ITEM", "/item/item-list"),
    new Menu("LOGIN", "/employee/login")
  ];
}

