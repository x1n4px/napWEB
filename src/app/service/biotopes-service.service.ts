import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiotopesServiceService {

  constructor() { }


  biotopos = [
    {
      nombre: 'Manacapuru',
      provincia: 'Manacapuru',
      pais: 'Brazil',
      imagen: 'https://i.imgur.com/K4iityQ.jpg',
      anio: '2021',
      continente: 'America',
      href: 'manacapuru'
     },
    {
      nombre: 'Rio negro',
      provincia: 'Manaos',
      pais: 'Brazil',
      imagen: 'https://i.imgur.com/eXneoFJ.jpg',
      anio: '2022',
      continente: 'America'
    },
    {
      nombre: 'Rio negro',
      provincia: 'Manaos',
      pais: 'Brazil',
      imagen: '',
      anio: '2023',
      continente: 'America'
    }, {
      nombre: 'Kolenté',
      provincia: 'Kolenté',
      pais: 'Guinea',
      imagen: 'https://i.imgur.com/8kFtAp4.jpg',
      anio: '2023',
      continente: 'Africa'
    },
    {
      nombre: 'Kolenté',
      provincia: 'Kolenté',
      pais: 'Guinea',
      imagen: '',
      anio: '2023',
      continente: 'Africa'
    },{
      nombre: 'Bandsjarmin',
      provincia: '',
      pais:'',
      imagen: 'https://i.imgur.com/WLafppn.jpg',
      anio: '2021',
      continente: 'Asia'
    },
    {
      nombre: 'Phum Duang',
      provincia: 'Surat Thani',
      pais: 'Sur de Thailandia',
      imagen: 'https://i.imgur.com/HLip7Z9.jpg',
      anio: '2023',
      continente: 'Asia',
      href: 'phumduang'
    }

  ]


  devolverListado(continente: any) {
    return this.biotopos.filter(biotope => biotope.continente === continente);
  }
}
