import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiotopesServiceService } from 'src/app/service/biotopes-service.service';

@Component({
  selector: 'app-biotopo-page',
  templateUrl: './biotopo-page.component.html',
  styleUrls: ['./biotopo-page.component.css']
})
export class BiotopoPageComponent {
  biotope: any;
  nombreContinente: any;

  constructor(private biotopeService: BiotopesServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Obtener el parámetro ":nombre" de la URL
    this.route.paramMap.subscribe(params => {
      this.nombreContinente = params.get('biotopos');
      this.biotope = this.biotopeService.devolverBiotope(this.nombreContinente);
      console.log(this.biotope.page.alternative_img);
     });

  }

  getAlternativeImageKeys(): string[] {
    return Object.keys(this.biotope.page.alternative_img);
  }

}
