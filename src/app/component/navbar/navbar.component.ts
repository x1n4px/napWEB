import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BiotopesServiceService } from 'src/app/service/biotopes-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu: boolean = false;
  selecction: number = 1;
  biotopes: any[] = [];
  constructor(private router: Router, private biotopeService: BiotopesServiceService){
    this.biotopes = this.biotopeService.devolverListado('America');
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


  ir(continente: string) {
    if(this.showMenu){
      this.toggleMenu();
    }

    this.router.navigate(['continente', continente]);
  }

  filtrado(continente: string) {
    this.biotopes = this.biotopeService.devolverListado(continente);
   }
}
