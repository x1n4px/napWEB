import { Component } from '@angular/core';

@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.css']
})
export class AmericaComponent {
  biotopos = [
    {
      nombre: 'Manacapuru',
      provincia: 'Manacapuru',
      pais: 'Brazil',
      imagen: ' ',
      anio: '2021'
    },
    {
      nombre: 'Rio negro',
      provincia: 'Manaos',
      pais: 'Brazil',
      imagen:'',
      anio: '2022'
    },
    {
      nombre: 'Rio negro',
      provincia: 'Manaos',
      pais: 'Brazil',
      imagen:'',
      anio: '2023'
    }
  ]
}
