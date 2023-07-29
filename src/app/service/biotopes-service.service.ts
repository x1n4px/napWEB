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
        header_name: 'Lago Grande  Manacapuru, Brazil',
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
          aquarium_info: 'Se eligió la recreacción del rio negro por la variedad de escalar elegidos, Pterophyllum scalare Manacapuru, que destacan principalmente por un coloración rojiza en la parte superior del cuerpo.Este al ser el primer montaje de biotopo, se recurrió a una recreación más básica, utilizando troncos de níspero simulando raices entrantes, un tronco en el centro a modo de covijo, arena de silice como sustrato, hojas y botánicos.No se utilizó ningún tipo de plantas acuáticas, como se puede llegar a apreciar en la zona superior derecha, había entrando raices de pothos, ya que el montaje comunicaba con una zona exterior, esta si plantada.',
          aquarium_date: 'Julio 2020',
          aquarium_decoration: 'Madera de níspero, arena de silice',
          aquarium_tech: 'Sump, bomba de 12.000l/h(al 25%), 30l de pómice, calentador de titanio',
          aquarium_fish_care: 'Cambio de agua del 20% semanal.',
          aquarium_fish: 'Pterophyllum scalare Manacapuru(8), Hyphessobrycon megalopterus(16), Corydoras sterbai(10), Ancistrus sp. (5), Symphysodon discus(8)',
          aquarium_plants: '',
          aquarium_botanics: 'Cariniana pod, Isoberlinia pod, Jacaranda pod, Mangrove pod, Palm pod, Pterygota pod, Sapucaia, Vaina de cacao',
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
          water_temperature: '28ºC',
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
      continente: 'America',
      href: 'Rio negro',
      page: {
        header_img: 'https://i.imgur.com/eXneoFJ.jpg',
        header_name: 'Rio negro, Brazil',
        full_name: 'Brazil, Amazonas, Rio negro',
        biotope_recreate: 'Este biotopo pretende recrear una zona media del rio Negro, donde principalmente hay una pequeña explanada con echinodorus y algunas raices',
        gps: '-3.042086, -60.181736',
        gps_img: 'https://i.imgur.com/5PzUbtU.png',
        geographic_region: 'South America',
        drainage_basin: 'Rio',
        river_carchment: 'Rio Negro',
        water_body: {
          water_body_type: 'River',
          water_body_name: 'Rio Negro',
          water_body_part: 'Pool',
          water_body_course: 'Middle',
          water_body_tributary: 'Rio nagro',
          water_body_tributary_name: 'Rio Negro'
        },
        youtube_url: '',
        youtube_img_url: 'https://i.ytimg.com/vi/f4ZMfWtfz2k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_6keUTyk8kgOMXetrfy84l9yZtQ',
        river_info: ' río Negro (en Brasil) es un largo río amazónico, el más caudaloso de todos los afluentes del río Amazonas y el más largo por su margen izquierda y también el mayor río de aguas negras del mundo. Tiene sus fuentes a lo largo de la divisoria de aguas entre la cuenca del Amazonas y la del río Orinoco y conecta con esta a través del canal de Casiquiare. Su curso alto nace en Colombia. Su principal afluente en este tramo es el río Vaupés, que disputa con las cabeceras del río Guaviare (un ramal de la cuenca del Orinoco) el drenaje de la ladera oriental de los Andes colombianos. Luego forma un corto tramo de frontera natural con Venezuela, antes de adentrarse finalmente en Brasil.',
        aquarium: {
          aquarium_info: 'Se seleccionó una zona del rio más central, la cuál no estaba cercana a una orilla, sino que, se encuentra en una llanura de arena, rodeadas de echinodorus, hojas, y algunos troncos. Además de un tronco que hace de convijo para los más pequeños. Esta vez, a diferencia de la anterior, la materia orgánica del fondo es mucho mayor, ya que la corriente en esta zona, dada la cantidad de troncos que cortan la corriente también es mayor.',
          aquarium_date: 'Diciembre 2022',
          aquarium_decoration: 'Madera de níspero, arena de silice, Madera de mangrove',
          aquarium_tech: 'Sump, bomba de 12.000l/h(al 25%), 30l de pómice, calentador de titanio',
          aquarium_fish_care: 'Cambio de agua del 20% semanal.',
          aquarium_fish: 'Pterophyllum scalare Manacapuru(8), Hyphessobrycon megalopterus(16), Corydoras sterbai(10), Ancistrus sp. (5), Symphysodon discus(8)',
          aquarium_plants: 'echinodorus osiris(6), echinodorus bolivianus(5)',
          aquarium_botanics: 'Cariniana pod, Isoberlinia pod, Jacaranda pod, Mangrove pod, Palm pod, Pterygota pod, Sapucaia, Vaina de cacao, Palos, corteza de palmera, viruta de madera',
          aquarium_length: '120cm',
          aquarium_depth: '60cm',
          aquarium_height: '70cm',
          aquarium_volume: '500L'
        },
        water: {
          water_type: 'Agua dulce',
          water_color: 'Aguas negras',
          water_transparency: 'Medio',
          water_sediment: 'Medio',
          water_temperature: '28ºC',
          water_flow: 'Bajo',
          water_ph: '6.7º',
          water_conductivity: '400tds',
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
      imagen: '',
      anio: '2023',
      continente: 'America'
    },
    {
      nombre: 'Kolenté',
      provincia: 'Kolenté',
      pais: 'Guinea',
      imagen: 'https://i.imgur.com/8kFtAp4.jpg',
      anio: '2023',
      continente: 'Africa',
      href: 'Kolenté',
      page: {
        header_img: 'https://i.imgur.com/8kFtAp4.jpg',
        header_name: 'Rio Kolenté, Guinea',
        full_name: 'Guinea, Kindia, Rio Kolenté',
        biotope_recreate: 'Este biotopo recrea una zona de manglarés muy cercano al poblado de kolenté, donde las ramas de los mismo entran al agua, dando mucho cobijo para pequeño animales.',
        gps: '10.078500, -12.619310',
        gps_img: 'https://i.imgur.com/HxtRxFT.png',
        geographic_region: 'Africa',
        drainage_basin: 'Rio',
        river_carchment: 'Rio Kolenté',
        water_body: {
          water_body_type: 'River',
          water_body_name: 'Rio Kolenté',
          water_body_part: 'River',
          water_body_course: 'Middle',
          water_body_tributary: 'Rio nagro',
          water_body_tributary_name: 'Rio Negro'
        },
        youtube_url: '',
        youtube_img_url: '',
        river_info: 'Una de las regiones más intrigantes, pero poco comúnmente replicadas del mundo en términos de hábitat acuático, es África Occidental. Las áreas de Ghana, Sierra Leona y Guinea, en particular, ofrecen una gran variedad de especies de peces hermosos y hábitats únicos que simplemente piden ser replicados en acuarios. Este río forma parte de la frontera internacional entre Guinea y Sierra Leona, y alberga muchas especies de peces, desde killis de la especie Epiplatys, hasta varios cíclidos del género Pelvicachromis, pasando por los peces gato Synodontis e incluso algunos caracinos interesantes, como el Caracino Africano Darter, Nannocharax fasciatus. Los afluentes cercanos abarcan una variedad de nichos ecológicos. El agua en el río Kolenté tiene una dureza de carbonato insignificante, con un pH alrededor de 6.0. Encontrarás muchas especies de Anubias, Bolbitis y Vallisneria en el sustrato típico de grava fina. Hojas y materiales botánicos de árboles del bosque colgantes se dispersan en el sustrato y entre las rocas. Es importante señalar que esta colección es una representación creativa de los materiales encontrados en el río y sus afluentes. Los elementos botánicos incluidos en el paquete se encuentran en muchas otras partes del mundo, pero creemos que es una agradable variedad de elementos que se adaptarán bien para replicar este hermoso río.',
        aquarium: {
          aquarium_info: 'Se seleccionó la zona del rio a la entrada del poblado de kolenté, donde está lleno de mangalares, que además de reducir el caudal a la entrada del mismo, da una zona de protección para la fauna de la zona.',
          aquarium_date: 'Noviembre 2022',
          aquarium_decoration: 'Canto rodado, raices de red moore, arena de silice, grava, hojas',
          aquarium_tech: 'Tidal 35, calentador 50w',
          aquarium_fish_care: 'Cambio de agua del 20% semanal.',
          aquarium_fish: 'Neocaridina, Aplocheilichthys Normani(10)',
          aquarium_plants: 'Anubia barteri(4), Anubia barteri nana(3), Anubia congensis(2), Bacopa(1)',
          aquarium_botanics: 'Hojas, fibra de coco, viruta de madera',

          aquarium_length: '32cm',
          aquarium_depth: '35cm',
          aquarium_height: '45cm',
          aquarium_volume: '40L'
        },
        water: {
          water_type: 'Agua dulce',
          water_color: 'Aguas negras',
          water_transparency: 'Baja',
          water_sediment: 'Alta',
          water_temperature: '24ºC',
          water_flow: 'Medio',
          water_ph: '7º',
          water_conductivity: '250tds',
          water_gh: '6mg/L',
          water_kg: '4mg/L'
        },
        alternative_img: {
          acuario: 'https://i.imgur.com/8kFtAp4.jpg',
          normali: 'https://laguiadelacuario.es/wp-content/uploads/2019/06/poropanchax_normanipda-1.jpg',
          neocaridina: 'https://www.fishi-pedia.com/wp-content/uploads/2017/10/Neocaridina-davidi-Sakura-.jpg'
        }

      }
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
      href: 'Phum Duang',
      page: {
        header_img: 'https://i.imgur.com/HLip7Z9.jpg',
        header_name: 'Rio Phum Duang',
        full_name: 'Sur de Thailandia, Surat Thani, Rio Phum Duang',
        biotope_recreate: '',
        gps: '9.033254, 99.026048',
        gps_img: 'https://i.imgur.com/hh4f6IG.png',
        geographic_region: 'Asia',
        drainage_basin: 'Rio',
        river_carchment: 'Rio Phum Duang',
        water_body: {
          water_body_type: 'River',
          water_body_name: 'Rio Phum Duang',
          water_body_part: 'River',
          water_body_course: 'Middle',
          water_body_tributary: 'Rio Tapi',
          water_body_tributary_name: 'Rio Phum Duang'
        },
        youtube_url: '',
        youtube_img_url: '',
        river_info: 'El río Tapi, es el más largo del sur de Tailandia. Nace en el monte Khao Luang, en la provincia de Nakhon Si Thammarat, y desemboca en el golfo de Tailandia en la bahía de Bandon, cerca de la ciudad de Surat Thani. Tiene una longitud de 230 kilómetros.El río drena una superficie de 5.460 kilómetros cuadrados y en 1997 tenía un caudal anual de 135,4 metros cúbicos por segundo o 4,3 kilómetros cúbicos al año. El río Phum Duang (o río Khiri Rat), que drena otros 6.125 km² al oeste de la cuenca del Tapi, se une al estuario a 15 km al oeste de Surat Thani en Amphoe Phunphin.',
        aquarium: {
          aquarium_info: '',
          aquarium_date: 'Febrero 2022',
          aquarium_decoration: 'Madera de mangrove, canto rodado pequeño, arena de silice',
          aquarium_tech: '',
          aquarium_fish_care: 'Cambio de agua del 20% semanal.',
          aquarium_fish: 'Neocaridina, Trichopsis pumila(6), Borara maculata (16)',
          aquarium_plants: 'cryptocoryne balansae(6), Cryptocoryne mohelmani(5), Cryptocoryne beckettii(1)',
          aquarium_botanics: 'Hojas de palma, calamus longisetus',
          aquarium_length: '50cm',
          aquarium_depth: '50cm',
          aquarium_height: '40cm',
          aquarium_volume: '80L'
        },
        water: {
          water_type: 'Agua dulce',
          water_color: 'Aguas Claras',
          water_transparency: 'Alta',
          water_sediment: 'baja',
          water_temperature: '27ºC',
          water_flow: 'Bajo',
          water_ph: '6.7º',
          water_conductivity: '350tds',
          water_gh: '8mg/L',
          water_kg: '1mg/L'
        },
        alternative_img: {
          acuario: 'https://i.imgur.com/HLip7Z9.jpg',
          normali: 'https://i.imgur.com/wiVXVbD.jpg',
          neocaridina: 'https://i.imgur.com/sxyu8ev.jpg'
        }

      }
    },

  ]


  devolverListado(continente: any) {
    return this.biotopos.filter(biotope => biotope.continente === continente);
  }

  devolverBiotope(nombre: any) {
    return this.biotopos.find(biotope => biotope.nombre === nombre);
  }
}
