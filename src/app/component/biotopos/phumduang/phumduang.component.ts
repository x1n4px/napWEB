import { Component } from '@angular/core';

@Component({
  selector: 'app-phumduang',
  templateUrl: './phumduang.component.html',
  styleUrls: ['./phumduang.component.css']
})
export class PhumduangComponent {
  biotopos = [
    {
      nombre: 'Phum Duang',
      provincia: 'Surat Thani',
      pais: 'Sur de Thailandia',
      afluente: 'Río Tapi',
      imagen: 'https://i.imgur.com/HLip7Z9.jpg',
      descripcionRio: 'El río Phum Duang, es un río en la provincia de Surat Thani , sur de Tailandia , el principal afluente del río Tapi . Los ríos drenan un área de 6.125 kilómetros cuadrados (2.365 millas cuadradas) al oeste de la cuenca del Tapi, principalmente las laderas orientales de la cordillera de Phuket . Se une al estuario del Tapi a 5 kilómetros (3 millas) al oeste de Surat Thani en el distrito de Phunphin .Se desconoce la etimología de "Phum Duang", pero la etimología de "Khiri Rat" se originó en el punto de origen de los ríos en el distrito de Khiri Rat Nikhom en la confluencia de los ríos Phrasaeng y Sok',
      nacimientoRio: 'Monte Khao Luang'
    }
  ]
}
