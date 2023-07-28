import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BiotopesServiceService } from 'src/app/service/biotopes-service.service';

@Component({
  selector: 'app-manacapuru',
  templateUrl: './manacapuru.component.html',
  styleUrls: ['./manacapuru.component.css']
})
export class ManacapuruComponent {

  constructor(private router: Router, private biotopeService: BiotopesServiceService) { }

  ngOnInit(): void {
    // Obtener la URL completa
    const fullUrl = this.router.url;

    // Parsear la URL para extraer el path


    console.log(fullUrl.slice(1));

  }


}
