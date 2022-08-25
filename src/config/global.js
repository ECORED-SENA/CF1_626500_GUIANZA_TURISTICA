export default {
  global: {
    componenteFormativo: 'El guionaje en la actividad turística',
    descripcionCurso:
      'El turismo como actividad humana sobrepasa el concepto de actividad económica por el cual es reconocido. Se puede afirmar que el ser humano en su ADN tiene consigo la necesidad y deseo de descubrir y explorar lo que le rodea física, así como lo que no ve y desconoce.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades del turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Reseña de la evolución turística',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Evolución del concepto turismo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Morfología turística',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Demanda turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Perfil de turista',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Demanda turística y relación con el guionaje',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Demanda turística: principios generales',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Producto turístico: concepto, características',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Catálogo de productos turísticos de Colombia ',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Sistemas de información turística',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Tendencias del turismo',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El guionaje en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Principios básicos: perfil y campo de acción',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Servicios guiados y modalidades de contratación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Normatividad sobre guionaje',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Araújo P, G. (2017) Los viajeros y sus motivaciones. Un estudio exploratorio sobre quienes aman viajar. Estudios y Perspectivas en Turismo, 26(1), 62-85.',
      link: 'https://redalyc.org/pdf/1807/180749182004.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1996). Ley 300 de julio 26 de 1996.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8634',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2006). Ley 1101 de 22 de noviembre de 2006.',
      link:
        'https://xperta.legis.co/visor/estatuto2/estatuto2_091302f6bf1945bb8ea03556b55f19ef/estatuto-tributario/ley-1101-de-2006',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1558 de 10 de julio de 2012.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1558_2012.html',
    },
    {
      referencia:
        'Gambari. A. (2020). Informe OBS del turismo global en la era del COVID-19. Nuevos rumbos. Organización Mundial del Turismo.',
      link:
        'https://marketing.onlinebschool.es/Prensa/Informes/InformeOBS_Turismo%20Global%20en%20la%20Era%20del%20COVID-19.%20Nuevos%20rumbos.pdf',
    },
    {
      referencia:
        'Gisolf, M. C. (2014). Motivación en el turismo, Necesidades, motivos y motivaciones en el turismo.',
      link: 'https://www.tourismtheories.org/?p=329&lang=es',
    },
    {
      referencia:
        'Ibáñez, R., y Cabrera, C. (2011). Teoría general del turismo. Universidad Autónoma de Baja California Sur.',
      link: '',
    },
    {
      referencia:
        'Instituto Tomás Pascual Sanz. (2016). El origen de los juegos olímpicos.',
      link:
        'https://www.institutotomaspascualsanz.com/origen-juegos-olimpicos/',
    },
    {
      referencia:
        'Jiménez, L. F. (1990). Teoría turística. Un enfoque integral de un hecho social. Universidad Externado de Colombia. ',
      link: '',
    },
    {
      referencia:
        'Martínez. A. F. (2020). Los Caballeros Hospitalarios de la Orden de San Juan de Jerusalén. ',
      link:
        'https://eldiariodesalud.com/catedra/los-caballeros-hospitalarios-de-la-orden-de-san-juan-de-jerusalen',
    },
    {
      referencia:
        'Maslow. A. (1970). Abraham Maslow y la psicología transpersonal (Cap. 14). ',
      link: 'http://biblio3.url.edu.gt/Libros/2013/teo-per/14.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio Exterior y Turismo. (2007). Manual de Buenas Prácticas Guías de Turismo y Operación Turistica. Plan Nacional de Calidad Turística del Perú – Caltur.',
      link:
        'http://www.agoturlima.com/images/normas/CALTUR_ManualDeBuenasPracticas.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. MinCIT- Citur. (2021). Centro de Información Turística de Colombia.',
      link: 'https://www.citur.gov.co/pages/1#gsc.tab=0',
    },
    {
      referencia:
        'Ministerio de Protección Social. (2011). Código Sustantivo del Trabajo.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Codigo/30019323',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1997). Decreto 503 de 1997.',
      link: 'https://vlex.com.co/vid/decreto-353491786',
    },
    {
      referencia: 'Procolombia. (2020). Cinco tendencias para viajar en 2021. ',
      link:
        'https://procolombia.co/noticias/cinco-tendencias-para-viajar-en-2021',
    },
    {
      referencia: 'Serra. A. (2003). Marketing turístico. Pirámide. Esic.',
      link: '',
    },
    {
      referencia:
        'Vergara. F. (s. f.). Arquitectura del renacimiento. Arqhys. ',
      link: 'https://www.arqhys.com/articulos/renacimiento-arquitectura.html',
    },
  ],
  glosario: [
    {
      termino: 'Normativa',
      significado:
        'agrupación de normas, reglas, condiciones legales de un área o materia',
    },
    {
      termino: 'Prestador de servicio turístico',
      significado:
        'personas que ejercen actividades de acompañamiento, orientación y satisfacer necesidades de un cliente relacionados a transporte, alojamiento y otros.',
    },
    {
      termino: 'Registro Nacional de Turismo',
      significado:
        'inscripción abierta a prestadores de servicios del sector turismo en cumplimiento de la normativa legal.',
    },
    {
      termino: 'Tarjeta profesional',
      significado:
        'documento expedido por profesionales colegiados o agrupados bajo la tutela de normativa. Acreditación interna para ejercer la labor.',
    },
    {
      termino: 'Parafiscal',
      significado:
        'aporte o contribución de carácter obligatoria que beneficia estamentos públicos y surgen de una práctica laboral.',
    },
  ],
  complementario: [
    {
      tema: '1. Generalidades del turismo',
      referencia:
        'Colombia productiva. (2013). Plan de negocios: turismo, naturaleza, bienestar, salud. ',
      tipo: 'Documento',
      link:
        'https://www.colombiaproductiva.com/CMSPages/GetFile.aspx?guid=2ef226c3-5cb5-410a-b081-ad762c9f4e17',
    },
    {
      tema: '2.1. Perfil de turista',
      referencia:
        'Procolombia. (2020). En el turismo poscovid los viajeros buscarán destinos bioseguros, viajes de corta distancia y experiencias en turismo de naturaleza. ',
      tipo: 'Página web ',
      link:
        'https://procolombia.co/noticias/asi-sera-el-nuevo-turista-internacional',
    },
    {
      tema: '2.3. Demanda turística: principios generales',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s.f.). Consejo profesional de guías de turismo.',
      tipo: 'Página web',
      link:
        'https://www.mincit.gov.co/CMSPages/GetFile.aspx?guid=5f8016cc-520b-4238-aad4-d6d13991392a',
    },
    {
      tema: '2.6. Sistemas de información turística',
      referencia:
        'Centro de Información Turística – Citur. (2021). Atractivos turísticos. ',
      tipo: 'Documentos',
      link: 'https://www.citur.gov.co/publicaciones#gsc.tab=0?t=33',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: '',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: '',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: '',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: '',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
