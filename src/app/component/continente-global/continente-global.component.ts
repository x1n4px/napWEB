import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiotopesServiceService } from 'src/app/service/biotopes-service.service';

@Component({
  selector: 'app-continente-global',
  templateUrl: './continente-global.component.html',
  styleUrls: ['./continente-global.component.css']
})
export class ContinenteGlobalComponent {

  continente: String = '';


  biotopos: any[] = [

  ]

  biotoposShow: any[] = [];

  constructor(private route: ActivatedRoute, private biotopeService: BiotopesServiceService) {

    this.route.paramMap.subscribe(params => {
      let cont = params.get('nombre');
      this.biotopos = this.biotopeService.devolverListado(cont);
      this.continente = cont? cont: '';
    })


  }



}
