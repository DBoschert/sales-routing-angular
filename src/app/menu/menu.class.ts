// 4. create a class file in the menu by doing filenew then name it
// 5. export that class
// 6. generate a menu component and put it in the menu folder by writing in terminal | ng g c menu/menu | 
export class Menu {
    display: string = "";
    route: string = "";

    // 8. Create a constructor
    constructor(display: string, route: string) {
        this.display = display;
        this.route = route;
    }
}