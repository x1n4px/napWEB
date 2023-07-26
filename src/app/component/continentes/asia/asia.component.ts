import { Component } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent {

  biotopos = [
    {
      nombre: 'Phum Duang',
      provincia: 'Surat Thani',
      pais: 'Sur de Thailandia',
      imagen: 'https://i.imgur.com/HLip7Z9.jpg'
    }
  ]
}
