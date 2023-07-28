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
      href: 'Manacapuru',
      page: {
        header_img: 'https://i.imgur.com/K4iityQ.jpg',
        full_name: 'Brazil, Amazonas, Manacapuru',
        biotope_recreate: 'The aquarium recreates the flooded area near the Lago Grande de Manacapuru. It is a blackwater area, due to all the surrouding vegetation. The water is very acidic and soft.',
        gps: '-3.0773740, -61.5096169',
        gps_img: 'https://i.imgur.com/5PzUbtU.png',
        geographic_region: 'South America',
        drainage_basin: 'Lago',
        river_carchment: 'Rio Manacapuru',
        water_body: {
          water_body_type: 'River',
          water_body_name: 'Rio Manacapuru',
          water_body_part: 'Pool',
          water_body_course: 'Middle',
          water_body_tributary: 'Rio nagro',
          water_body_tributary_name: 'Rio manacapuru'
        },
        youtube_url: 'https://www.youtube.com/watch?v=f4ZMfWtfz2k',
        youtube_img_url: 'https://i.ytimg.com/vi/f4ZMfWtfz2k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_6keUTyk8kgOMXetrfy84l9yZtQ',
        river_info: 'El río Manacapuru es una imponente vía fluvial situada en la región amazónica de Brasil, conocida por su diversidad acuática y belleza natural. La zona acuática de este majestuoso río alberga un ecosistema único y próspero que fascina a biólogos y amantes de la naturaleza por igual. En estas aguas cristalinas y serenas, coexisten diversas especies de peces y plantas acuáticas, algunas de las cuales son endémicas de la región. Entre los tesoros más notables se encuentran las coloridas especies de peces tropicales, como los famosos tetras y los llamativos cíclidos amazónicos. El río Manacapuru es un paraíso para los amantes del buceo y la observación de vida acuática. En sus meandros, se pueden descubrir paisajes submarinos de ensueño, repletos de corales, formaciones rocosas y peces exóticos que componen una sinfonía de colores y formas. Además de su valor ecológico, el río Manacapuru también es fundamental para las comunidades locales, que dependen de sus aguas para la pesca y la subsistencia. Su preservación y conservación son cruciales para mantener el equilibrio de este preciado tesoro natural y garantizar su existencia para las generaciones futuras.',
        aquarium: {
          aquarium_info: 'e eligió la recreacción del rio negro por la variedad de escalar elegidos, Pterophyllum scalare Manacapuru, que destacan principalmente por un coloración rojiza en la parte superior del cuerpo.Este al ser el primer montaje de biotopo, se recurrió a una recreación más básica, utilizando troncos de níspero simulando raices entrantes, un tronco en el centro a modo de covijo, arena de silice como sustrato, hojas y botánicos.No se utilizó ningún tipo de plantas acuáticas, como se puede llegar a apreciar en la zona superior derecha, había entrando raices de pothos, ya que el montaje comunicaba con una zona exterior, esta si plantada.',
          aquarium_date: 'Julio 2020',
          aquarium_decoration: 'Madera de níspero, arena de silice',
          aquarium_tech: 'Sump, bomba de 12.000l/h(al 25%), 30l de pómice, calentador de titanio',
          aquarium_fish_care: 'Cambio de agua del 20% semanal.',
          aquarium_fish: 'Pterophyllum scalare Manacapuru(8), Hyphessobrycon megalopterus(16), Corydoras sterbai(10), Ancistrus sp. (5), Symphysodon discus(8)',
          aquarium_plants: '',
          aquarium_length: '120cm',
          aquarium_depth: '60cm',
          aquarium_height: '70cm',
          aquarium_volume: '500L'
        },
        water: {
          water_type: 'Agua dulce',
          water_color: 'Aguas negras',
          water_transparency: 'Medio',
          water_sediment: 'Bajo',
          water_temperatura: '28ºC',
          water_flow: 'Bajo',
          water_ph: '6º',
          water_conductivity: '200tds',
          water_gh: '8mg/L',
          water_kg: '1mg/L'
        },
        alternative_img: {

        }

      }
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
    }, {
      nombre: 'Bandsjarmin',
      provincia: '',
      pais: '',
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
