import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu: boolean = false;
  selecction: number = 1;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
