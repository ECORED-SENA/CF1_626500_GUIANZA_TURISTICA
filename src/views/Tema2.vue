<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Demanda turística

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-5.mt-4.mb-4
        p.mb-0 La demanda turística se refiere a la cantidad de bienes y servicios que los consumidores desean adquirir a distintos precios, de acuerdo con la capacidad adquisitiva de los turistas.

    p.mt-5(data-aos="fade-up") A continuación se brinda información para conocer más sobre algunas definiciones sobre la demanda turística.     

    SlyderA.slydera1.mt-5.p-5(tipo="b")
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Libre juego de oferta y demanda.
          p.mt-5 De acuerdo con Landi (2013), la demanda turística opera en el contexto de un mercado en el que intervienen diversos operadores de turismo ofreciendo determinados productos y servicios, y que supone, además, la existencia de un conjunto de espacios geográficos donde se realizan estos servicios. esto sucede en el marco de un libre juego de oferta y demanda.
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/3.png', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Demanda turística según los teóricos.
          p.mt-5 Uno de los teóricos más estudioso del territorio y a demanda turística, Robert Boullón (1997), afirma que el concepto de demanda turística puede variar según las escuelas en las que se inscriben los teóricos turísticos. 
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/4.png', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Demanda del sector turístico.
          p.mt-5 Para él, por ejemplo, la demanda turística se puede definir de dos formas:
          ul.lista-ul.mt-3(style="position:relative")
            li(data-aos="fade-up")
              p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Cantidad de personas que viajan.
            li(data-aos="fade-up")
              p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Consumo e ingresos de la zona turística.
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/5.png', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Total de personas que viajan.
          p.mt-5 La primera, como el número total de personas que viajan o desean viajar para disfrutar de facilidades turísticas y de servicios, en lugares distintos al sitio de trabajo y residencia habitual.
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/6.png', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Ingresos de la zona turística
          p.mt-5 La segunda, como el consumo y los ingresos que se generan en la zona turística. Este es un concepto más económico que está expresado en unidades monetarias y no en número de consumidores.
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/7.png', alt='')

    Separador

    .titulo-segundo
      h2#t_2_1 2.1. Perfil de turista

    .row
      .col-md-4.mb-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/8.png" data-aos="fade-right")
      .col-md-8(style="place-self:center;")
        .cajon.color-primario.p-5.mt-4(style="background-color:#FFD667;box-shadow:0px 0px 20px rgba(0,0,0,.14);")
          p.mb-0(data-aos="fade-up" style="position:relative") El turista moderno, dista mucho del turista de hace 20 años debido, entre otras cosas, a los cambios tecnológicos, políticos, económicos y culturales, los estudios que dan cuenta del perfil del turista, hoy se hacen con mayor frecuencia que antes, ya que es la mejor manera para atender apropiadamente la demanda en crecimiento del sector turístico en el mundo. El nuevo turista no viaja en grupos, primero elige el destino, luego el hotel y el vuelo, y lo demás lo elige y compra en el destino.
        p.mt-4(data-aos="fade-up") En un reciente informe de la Organización Mundial del Turismo (OMT-2020), analiza los cambios demográficos que afectarán al turismo en el siglo XXI y sostiene que:
        ul.lista-ul.mt-3(style="position:relative")
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] La progresiva concentración humana en grandes áreas urbanas marcará la evolución demográfica y afectará al turismo de aquí hasta 2030.
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] El turista es quien manda y la oferta es la que se debe adaptar a un cliente que exige información veraz, la mejor relación calidad-precio, experiencias auténticas y destinos que ofrezcan una oferta turística adecuada a sus deseos y necesidades.

    p.mt-2(data-aos="fade-up") En su informe para la OMT los turistas presentan varias características en su comportamiento, a saber:

    .row.mt-5
      .col-md-8.mb-4.mb-md-0
        SlyderA(style="background-color:#FFE6A1;border-radius:20px;height:100%;")
          div.p-5
            .row
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/10.png")
              .col(style="place-self:center")
                p.mb-0 Son tecnológico-dependientes: sin importar la edad, usan la tecnología para obtener asistencia durante el viaje de principio a fin.
            .row.mt-3
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/11.png")
              .col(style="place-self:center")
                p.mb-0 Buscan personalización en las experiencias: es el año perfecto para el uso de datos al servicio de los viajeros.
            .row.mt-3
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/12.png")
              .col(style="place-self:center")
                p.mb-0 Están más conscientes del impacto que causa su actividad: tanto en la comunidad local como en la ecología. Por tanto, tiende a realizar actividades sustentables.
          div.p-5
            .row
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/13.png")
              .col(style="place-self:center")
                p.mb-0 Quieren destinos novedosos: buscan en las agencias de viaje, tanto tradicionales como online, para encontrar experiencias curadas y realmente novedosas.
            .row.mt-3
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/14.png")
              .col(style="place-self:center")
                p.mb-0 El turista de hoy es diversificado, sofisticado y bien informado, causando nuevas necesidades que los profesionales de la industria deben enfrentar. 
            .row.mt-3
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/15.png")
              .col(style="place-self:center")
                p.mb-0 Los nuevos turistas se interesan por encontrar apps que les permitan identificar destinos donde el aumento de turistas tendría un efecto positivo en la comunidad local.
          div.p-5
            .row
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/16.png")
              .col(style="place-self:center")
                p.mb-0 El turista tecnológico, tiene un perfil que utiliza constantemente las redes sociales y, en general, las nuevas tecnologías, para tomar decisiones y recibir sugerencias a medida.
            .row.mt-3
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/17.png")
              .col(style="place-self:center")
                p.mb-0 Consulta referencias para elegir el alojamiento o el restaurante donde ir a cenar. 
            .row.mt-3
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/18.png")
              .col(style="place-self:center")
                p.mb-0 Utilizan las apps para organizar previamente las actividades y poder tener todas las informaciones relativas al viaje en un único lugar.
          div.p-5
            .row
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/19.png")
              .col(style="place-self:center")
                p.mb-0 El viajero con mascota es otro tipo de perfil cada vez más común, tanto que el número de alojamientos que admiten mascotas ha ido aumentando con el transcurso de los años, por ello las estructuras turísticas buscan ofrecer cada vez más servicios para las mascotas, así como propuestas a medida como camas para perro gratuitas, spas y tratamientos para las mascotas, entre otros.
            .row.mt-3
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/20.png")
              .col(style="place-self:center")
                p.mb-0 Uno de los efectos de la COVID-19, en los turistas es su afanosa búsqueda de nuevos destinos que, en todo caso, garanticen su seguridad sanitaria.

      .col-md-4(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/9.png" data-aos="fade-left")

    Separador

    .titulo-segundo
      h2#t_2_2 2.2. Demanda turística y relación con el guionaje

    p(data-aos="fade-up") La demanda turística guarda relación muy importante con la guianza turística, como se caracteriza a continuación:

    .row.mt-5
      .col-md-4.mb-4(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/21.png" data-aos="fade-right")
      .col-md-8(style="place-self:center")
        ul.lista-ul.mt-3(style="position:relative")
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Los destinos apetecidos por los turistas cuentan con características: culturales, patrimoniales, económicas, políticas y medio ambientales de importancia, para lo cual requiere de asesoría sobre todos estos temas, pero también la instrucción necesaria para adquirir conocimientos.
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Lo mínimo que espera un turista del destino que visitará es encontrar que, además de buen alojamiento y alimentación, se encuentre en ese espacio turístico con personal idóneo, paciente, bueno para escuchar y excelente para explicar, de preferencia en el idioma del turista.
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Otro factor determinante para que quien demanda el servicio turístico quede satisfecho, son las asesorías por parte del guía, sobre el tema de compras, buenos precios y calidad, ya que siendo foráneo el turista no identifica estos aspectos con facilidad.
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Al final del viaje, cuando el turista mide su grado de satisfacción respecto del destino que visitó, una de los temas que más tendrá en cuenta es su interacción con el guía que fue su contacto físico permanente, que lo asistió, le ayudó con trámites, lo instruyó y lo guió en cada parte del viaje.

    Separador

    .titulo-segundo
      h2#t_2_3 2.3. Demanda turística: principios generales

    .row
      .col-md-8.mb-4(style="place-self:center")
        p(data-aos="fade-up") Para brindar una excelente oferta de productos a los turistas que demandan ser satisfechos por los prestadores de servicios turísticos, se debe entender a los consumidores turísticos, por ello, vale la pena hablar de los principios básicos del consumidor.
        p.mt-4(data-aos="fade-up") El comportamiento del consumidor de productos turísticos está relacionado con todas las actividades que lleva a cabo una persona desde que experimenta la necesidad de viajar hasta el momento en que efectúa la compra y utiliza los distintos servicios turísticos.
        p.mt-4(data-aos="fade-up") Así las cosas, el comportamiento del consumidor es el siguiente:
        ul.lista-ul.mt-3(style="position:relative")
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Surgimiento de la necesidad de viajar.
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Búsqueda de información.
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Evaluación de alternativas.
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Selección de una alternativa y compra efectiva sensaciones posteriores a la compra.
      .col-md-4(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/22.png" data-aos="fade-left")

    p.mt-2(data-aos="fade-up") Todos estos aspectos deben ser tenidos en cuenta por los PST (Plan Sectorial de Turismo), a la hora de ofertar un producto o servicio y les permiten realizar un ejercicio muy importante, el de segmentar el mercado al que le ofrecerá sus bienes y servicios.

    .cajon.color-secundario.p-4.mt-5.row(style="background-color:#B7CEAC;")
      .col-md-2.mb-4.mb-md-0(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema2/23.png" data-aos="zoom-in-up" style="display:inline;max-width:100px;")
      .col-md-10(style="place-self:center")
        p.mb-0(data-aos="fade-up") Serra (2003), indica que la segmentación del mercado, es el proceso mediante el cual se divide el mercado en subgrupos relativamente homogéneos para llevar a cabo una estrategia comercial diferenciada y satisfacer de manera más eficiente sus necesidades, dentro de este análisis siempre se deberá tener en cuenta la prestación del servicio de guionaje, tan importante para llenar de experiencias positivas al turista, con el fin de cumpla todo el ciclo turístico.

    Separador

    .titulo-segundo
      h2#t_2_4 2.4. Producto turístico: concepto, características

    p(data-aos="fade-up") El producto turístico constituye la piedra angular del mercado turístico y su diseño es la actividad más importante del #[em marketing].

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-up") El producto turístico, de acuerdo con la Organización Mundial del Turismo (1998), debe ser más flexible con el propósito de adaptarse a los gustos y necesidades de los turistas, porque cada vez aparece nuevos destinos turísticos que se posicionan rápidamente, en el mercado gracias a sus atributos geográficos. Esto obliga a los destinos tradicionales a innovar y repensar la actividad turística, en beneficio del turista y el dinamismo del sector.

    p.mt-5(data-aos="fade-up") Es muy importante que, al #[strong(style="color:#EB6F2D;") identificar un producto turístico y que se desea poner en el mercado turístico, se evalúen muy bien los conceptos sobre el mismo;] aquí algunos de ellos:

    .row.mt-5
      .col-md-6.mb-4(style="place-self:center")
        ul.lista-ul.mt-3(style="position:relative")
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] El producto turístico es el conjunto de atractivos, equipamientos, servicios, infraestructura y organizaciones que satisfacen una necesidad o un deseo de los consumidores turísticos. Recordando que un solo destino turístico puede contener varios productos turísticos.
          li(data-aos="fade-up")
            p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] También un producto turístico está conformado por el conjunto de bienes y servicios que se ofrecen al mercado en forma individual o en una gama amplia de combinaciones resultantes de las necesidades, requerimientos o deseos de un consumidor al que llamamos turista.
        p.mt-4(data-aos="fade-up") A continuación, se exponen las #[strong(style="color:#EB6F2D;") características de un producto turístico, donde se analiza el producto turístico como una experiencia en la cual son utilizados productos muy diversos para su satisfacción:]
      .col-md-6(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/25.png" data-aos="fade-left")

    .cont_tema2_1.mt-5.ps-3.pe-3.pt-4.pb-4(style="position:relative")
      ImagenInfograficaBAjustada.color-primario.col-md-8.m-auto
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/27.svg' data-aos="zoom-in-up")
        div(x="30%" y="30%" tooltip="Inseparabilidad" numero="Inseparabilidad")
          .row
            .col-md-8
              h4(style="color:#12263F !important;") Inseparabilidad
              p.mt-3(style="color:#12263F !important;") La producción y el consumo son simultáneos, se efectúan al mismo tiempo y se dan en las instalaciones del oferente.
            .col-md-4
              figure
                img(src="@/assets/curso/tema2/28.png")
        div(x="70%" y="30%" tooltip="Heterogeneidad" numero="Heterogeneidad")
          .row
            .col-md-8
              h4(style="color:#12263F !important;") Heterogeneidad
              p.mt-3(style="color:#12263F !important;") Los servicios pueden ser altamente variables ya que dependen de la persona que los suministra, de la persona que lo recibe y de las circunstancias del momento.
            .col-md-4
              figure
                img(src="@/assets/curso/tema2/29.png")
        div(x="20%" y="50%" tooltip="Intangibilidad" numero="Intangibilidad")
          .row
            .col-md-8
              h4(style="color:#12263F !important;") Intangibilidad
              p.mt-3(style="color:#12263F !important;") Los servicios son intangibles, aunque no lo sean los elementos que sirven de soporte para la prestación del servicio. Esta naturaleza intangible de los servicios presenta una serie de implicaciones para su comercialización, por ejemplo, la dificultad para comercializarlo y el grado de incertidumbre para el consumidor antes de la adquisición.
            .col-md-4
              figure
                img(src="@/assets/curso/tema2/30.png")
        div(x="80%" y="50%" tooltip="Perecibilidad" numero="Perecibilidad")
          .row
            .col-md-8
              h4(style="color:#12263F !important;") Perecibilidad
              p.mt-3(style="color:#12263F !important;") Los servicios turísticos no pueden almacenarse y por tanto son caducos. Un exceso de capacidad no vendida un periodo de tiempo concreto representa una pérdida de ingresos potenciales que no puede ser recuperada.
            .col-md-4
              figure
                img(src="@/assets/curso/tema2/31.png")
        div(x="50%" y="70%" tooltip="Estacionalidad" numero="Estacionalidad")
          .row
            .col-md-8
              h4(style="color:#12263F !important;") Estacionalidad
              p.mt-3(style="color:#12263F !important;") Son los periodos de tiempo en los que ocurre la actividad turística y que además determina el tipo de estrategia para la venta del producto turístico, ya que este se consume particularmente en época vacacional. 
              p.mt-4(style="color:#12263F !important;") Otros factores que tiene que ver con la estacionalidad, son los desplazamientos relacionados con celebraciones culturales, tradicionales como la Navidad, Año Nuevo, Semana Santa, entre otros.
            .col-md-4
              figure
                img(src="@/assets/curso/tema2/31.png")

    Separador.mt-5

    .cont_tema2_2.pb-5.mt-5(style="position:relative")
      .titulo-segundo(style="position:relative")
        h2#t_2_5 2.5. Catálogo de productos turísticos de Colombia 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/34.png')})`}"
        )
        .bloque-texto-g__texto.p-5.mt-4.mb-4
          p.mb-0(data-aos="fade-up") Colombia es un país con inmensas riquezas naturales, culturales, arquitectónicas, arqueológicas, culturales patrimoniales y naturales que le hacen sobresalir, adicionalmente cuenta con una biodiversidad de flora y fauna que se destaca a nivel mundial. De allí la importancia de revisar el catálogo de productos turísticos del país.

      .mt-5.pt-5(style="box-shadow:0px 0px 10px rgba(0,0,0,.2);position:relative;border-radius:20px;background-color:white;")
        .cont_fake1
          .col-md-11.m-auto.mt-3(style="position:relative")
            span(data-aos="fade-up" style="padding:.7rem 2rem;background-color:#FCC843;font-size:20px;border-radius:50px;position:relative;font-weight:bold;") Productos turísticos de Colombia
          .col-md-7.m-auto.mt-5
            figure
              img(src="@/assets/curso/tema2/36.png" data-aos="zoom-in-up")

        .row.mt-5.ps-5.pe-5(style="position:relative")
          .col-auto
            figure
              img(src="@/assets/curso/tema2/37.png" data-aos="fade-up")
          .col
            span(style="font-size:18px;border-bottom:2px #DC753F solid;font-weight:bold;" data-aos="fade-up") Turismo cultural

        .row.ps-5.pe-5(style="position:relative")
          .col-md-6.mb-4(style="place-self:center")
            p.mt-5(data-aos="fade-up") Según la OMT (2018), el #[strong(style="color:#EB6F2D;") turismo cultural es “un tipo de actividad turística en la que la motivación esencial del visitante es aprender, descubrir, experimentar y consumir atractivos o productos culturales tangibles e intangibles en un destino turístico".] Según Fontur (2016) en promedio el gasto asociado al turismo cultural oscila entre USD1.870 y USD $3.140, dependiendo del destino.
            p.mt-4(data-aos="fade-up") El turismo cultural se proyecta como un impulsor de las empresas creativas, para el desarrollo de la economía naranja, las expresiones y bienes del patrimonio material e inmaterial, las festividades y eventos, así como el etnoturismo que cada día gana más adeptos.
            p.mt-4(data-aos="fade-up") A continuación, se expone más información sobre la oferta de productos y subproductos que se encuentran catalogados como turismo cultural en Colombia:
          .col-md-6(style="place-self:center")
            figure
              img(src="@/assets/curso/tema2/38.png" data-aos="fade-left")
        .cont_fake2.mt-5  
          .ps-5.pe-5
            figure
              img(src="@/assets/curso/tema2/40.svg" data-aos="zoom-in-up")

            .row.mt-5(style="position:relative")
              .col-auto
                figure
                  img(src="@/assets/curso/tema2/37.png" data-aos="fade-up")
              .col
                span(style="font-size:18px;border-bottom:2px #DC753F solid;font-weight:bold;" data-aos="fade-up") Turismo de naturaleza
            .row.mt-5
              .col-md-5.mb-4(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/41.png" data-aos="fade-right")
              .col-md-7(style="place-self:center")
                p(data-aos="fade-up") Colombia está entre los 17 países megadiversos del planeta, se viene consolidando una oferta especializada en torno al ecoturismo en áreas protegidas, turismo de aventura, agroturismo, turismo rural, ecoturismo y turismo científico.
                p.mt-4(data-aos="fade-up") En esta materia, #[strong(style="color:#EB6F2D;") el país cuenta con oportunidades para el desarrollo del turismo ecuestre, náutico, actividades de buceo, pesca deportiva, senderismo y la observación de flora y fauna], en particular el avistamiento de aves, al ser el segundo país más biodiverso del mundo en estas especies.

        .ps-5.pe-5.mt-3
          .p-5(style="background-color:#FFD667;")
            p.mb-0(data-aos="fade-up") Este hecho, asociado al alto gasto que generan estas actividades, constituyen una gran posibilidad para desarrollar procesos sostenibles que ofrezcan un alto impacto económico para las regiones. De acuerdo con Procolombia (2017), el gasto promedio de un turista de avistamiento de aves es hasta de USD$3.000 por visita. Siendo Colombia líder en el avistamiento de aves por la innumerable cantidad de aves en todo el territorio, se está visualizando esta actividad como un producto turístico de amplio desarrollo.
          p.mt-5(data-aos="fade-up") En el siguiente gráfico se aprecian cuáles son los productos y subproductos turísticos enmarcados en el turismo de naturaleza:

        .cont_fake3.mt-5  
          .ps-5.pe-5
            figure.col-md-10.m-auto
              img(src="@/assets/curso/tema2/43.svg" data-aos="zoom-in-up")

        .ps-5.pe-5.mt-5
          .row.mt-5(style="position:relative")
            .col-auto
              figure
                img(src="@/assets/curso/tema2/37.png" data-aos="fade-up")
            .col
              span(style="font-size:18px;border-bottom:2px #DC753F solid;font-weight:bold;" data-aos="fade-up") Turismo de salud y bienestar

          .row.mt-4
            .col-md-6.mb-4(style="place-self:center")
              p(data-aos="fade-up") Según el Programa de Transformación Productiva (PTP), de MinCIT, el turismo de salud y bienestar #[strong(style="color:#EB6F2D;") comprende los viajes por tratamientos con énfasis en medicina preventiva, curativa, intervenciones médicas, odontológicas y estéticas; igualmente incluye los desplazamientos de los viajeros por motivos de ocio en búsqueda de tratamientos alternativos y terapéuticos.] Colombia viene posicionando destinos de forma continuada, en estos segmentos dadas sus ventajas competitivas de costo y excelencia en mano de obra calificada.
              p.mt-4(data-aos="fade-up") Igualmente, el desarrollo existente de oferta como spa, el termalismo y la talasoterapia, que cuentan con múltiples atractivos y servicios en diferentes zonas del país, marcan una oportunidad para este tipo de turismo. 
            .col-md-6(style="place-self:center")
              figure
                img(src="@/assets/curso/tema2/44.png" data-aos="fade-left")

          p.mt-5(data-aos="fade-up") A continuación, se amplían la información sobre los productos y subproductos asociados al turismo de salud y bienestar:

        .cont_fake4.mt-5.pb-5
          .ps-5.pe-5
            figure
              img(src="@/assets/curso/tema2/46.svg" data-aos="zoom-in-up")

            br
            .row.mt-5(style="position:relative")
              .col-auto
                figure
                  img(src="@/assets/curso/tema2/37.png" data-aos="fade-up")
              .col
                span(style="font-size:18px;border-bottom:2px #DC753F solid;font-weight:bold;" data-aos="fade-up") Turismo de reuniones

        .cont_fake5.pb-5
          .ps-5.pe-5
            p(data-aos="fade-up") Colombia se viene consolidando como un lugar con la capacidad instalada para atender a turistas que buscan otras alternativas turísticas, como se aprecia en la siguiente infografía:

            .row.mt-5
              .col-md-4.mb-4(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema2/48.png" data-aos="fade-right")
              .col-md-8(style="place-self:center")
                .row
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/49.png" data-aos="fade-up")
                  .col
                    p.mb-0.pb-2(data-aos="fade-up" style="border-bottom:2px #C3C3C3 solid;") Según la OMT (2006) se define al Turismo de Reuniones como aquella actividad de viaje que se realiza fuera del entorno habitual de una persona, por lo menos 24 horas y que cumple con los requisitos de lo que es una reunión. Según Procolombia (2018) el turismo de reuniones comprende la #[strong(style="color:#EB6F2D;") captación y organización de congresos, convenciones, viajes de incentivos y eventos] SMERF.
                .row.mt-4
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/50.png" data-aos="fade-up")
                  .col
                    p.mb-0.pb-2(data-aos="fade-up" style="border-bottom:2px #C3C3C3 solid;") Colombia viene incursionando en esta tipología a nivel internacional con destinos como Bogotá, Cartagena y Medellín, entre otros, así como con una variada oferta para eventos corporativos y sociales, en el resto del país. Según la Asociación Internacional de Congresos y Convenciones (ICCA, 2017) #[strong(style="color:#EB6F2D;") el gasto promedio de un turista de reuniones en Colombia es de USD$480,8 en aproximadamente 3,5 días, que  es tres veces mayor al gasto promedio de un turista vacacional.]
                .row.mt-4
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/49.png" data-aos="fade-up")
                  .col
                    p.mb-0.pb-2(data-aos="fade-up" style="border-bottom:2px #C3C3C3 solid;") Adicionalmente, esta Asociación ubica #[strong(style="color:#EB6F2D;") a Colombia como el tercer destino que más congresos realiza en Suramérica,] luego de Brasil y Argentina, #[strong(style="color:#EB6F2D;") aportando el 12% de los eventos regionales.] También es el segundo con el mayor número de participantes que asisten a un evento en la región y el #[strong(style="color:#EB6F2D;") número 18 a nivel mundial] en esta misma categoría.
                .row.mt-4
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema2/50.png" data-aos="fade-up")
                  .col
                    p.mb-0(data-aos="fade-up") En 2018, #[strong(style="color:#EB6F2D;") Colombia] entró en el #[em ranking] ICCA: #[em International Congress and Convention Association], dentro de los #[strong(style="color:#EB6F2D;") 30 mejores destinos para el turismo de reuniones] por su variedad de climas, buena infraestructura y conectividad.
                    p.mb-0.mt-4(data-aos="fade-up") #[strong(style="color:#EB6F2D;") Turismo alternativo:] son los desplazamientos para realizar actividades recreativas en contacto con la naturaleza y las expresiones culturales que lo envuelven (#[em Sectur], 2004). 

      Separador.mt-5

      .titulo-segundo.mt-5.mb-0(style="position:relative")
        h2#t_2_6 2.6. Sistemas de información turística

    .row
      .col-md-6.mb-4(style="place-self:center")
        p(data-aos="fade-up") En la actividad turística se han establecido sistemas de información turística que recopilan, organizan y distribuyen información de un destino con la intención de tomar decisiones, planear y evaluar los mismos. Esta información es útil tanto para el sector público como para el privado, que bien pueden participar en la elaboración como en su consulta. En un principio estos sistemas de información eran en físico por medio de folletos o revistas que se conseguían en ferias o agencias, pero gracias a la tecnología el flujo de información es mayor y más actualizado, ya que así lo permiten las nuevas tendencias de la comunicación digital. 
        p.mt-4(data-aos="fade-up") La información es accesible, de calidad y más confiable, logrando que los destinos sean más fácilmente promocionados y comercializados.
        .cajon.color-primario.p-5.mt-4(style="background-color:#FFE6A1;")
          p.mb-0(data-aos="fade-up" style="position:relative") Colombia, a través del MinCIT, comenzó la ardua tarea de crear un sistema de información turística que diera cuenta de toda la actividad en tiempo real, manteniendo actualizada toda la estadística turística del país, lo que facilitó la toma de decisiones para los prestadores de servicios turísticos y para el mismo Gobierno.
      .col-md-6(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/51.png" data-aos="fade-left")

    p.mt-4(data-aos="fade-up") Así, se crea un sistema con dos escalas: a nivel nacional el Citur y a nivel regional el Situr.

    .row.mt-5.ps-4.pe-4(style="background: rgb(250,183,41);background: linear-gradient(270deg, rgba(250,183,41,1) 50%, rgba(63,106,48,1) 50%);")
      .col-md-4.mb-4.pt-4.pb-4(style="place-self:center")
        h5.text-white(data-aos="fade-up") Citur
        p.mt-4.text-white(data-aos="fade-up") Es un sistema único integral para el manejo de información cuantitativa y cualitativa de turismo de Colombia, que facilita el seguimiento del comportamiento del turismo y genera datos para la formulación, evaluación y seguimiento para la toma de decisiones tanto en el sector público como privado, haciendo uso de las tecnologías de la información (MinCIT – Citur 2021).
        p.mt-4.text-white(data-aos="fade-up") Centro de Información turística que reúne todos los datos enviados por los departamentos para consolidar estadísticas nacionales de la actividad turística: se observan en tiempo real datos de rutas aéreas, número de turistas nacionales y extranjeros, entre otros.
        p.mt-4.text-white(data-aos="fade-up") Su objetivo es consolidar las mediciones regionales que brinden al país la información para caracterizar el turismo y generar estándares que permitan la comparación e integración estadística sectorial a nivel nacional e internacional. MinCIT-CITUR (2021).
      .col-md-4.d-flex.align-items-end
        figure
          img(src="@/assets/curso/tema2/52.svg" data-aos="zoom-in-up")
      .col-md-4.pt-4.pb-4(style="place-self:center")
        h5.mt-4(data-aos="fade-up") Situr
        p.mt-4(data-aos="fade-up") Sistema de indicadores turísticos que es el que realizan en cada uno de los departamentos con base en los datos suministrados por los prestadores de servicios turísticos, este sistema se inició en Medellín y sus buenos resultados hicieron que se extendiera a todo el país, en él se recopila información de datos de eventos y épocas relevantes del año tales como: Colombiatex de las Américas, Semana Santa, Festival Internacional de Tango, vacaciones de mitad de año, Colombiamoda, Feria de las Flores, receso escolar (Octubre), Feria de Navidad y vacaciones de fin de año, entre otras, para publicar cifras de la ciudad y de la región, que sirvan como soporte a líneas de control y promoción del destino.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_7 2.7. Tendencias del turismo

    p(data-aos="fade-up") De acuerdo con Procolombia (2020), tomando en consideración que el turismo ha demostrado ser la industria más resiliente, debido a la pandemia por la COVID-19, se logró establecer que las tendencias del turismo fueron:

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Seguridad y confianza" :icono="require('@/assets/curso/tema2/53.svg')")
        .row.p-3
          .col-md-7.mb-4.mb-md-0
            h4 Seguridad y confianza
            p Además de los protocolos de bioseguridad, los seguros de asistencia en viaje con cobertura para Covid-19 serán fundamentales al momento de tomar la decisión de viajar.  Es evidente que luego de casi dos años de pandemia están ocurriendo dos fenómenos interesantes: 1)  las personas desean viajar más y a lugares particularmente cuidadosos con la naturaleza y 2) requieren que se garantice su seguridad en cuanto a los posibles contagios, es así como en Colombia aeropuertos los han modificado sus sistemas de seguridad y las aerolíneas que operan en el país están estableciendo políticas de cancelación que se ajustan a esta nueva coyuntura.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2/57.png')
      .py-4.py-md-5(titulo="Reservas con menor antelación" :icono="require('@/assets/curso/tema2/54.svg')")
        .row.p-3
          .col-md-7.mb-4.mb-md-0
            h4 Reservas con menor antelación
            p Un informe de #[em Skyscanner] que lleva como nombre #[em The New World of Travel] resalta que para 2021 se espera que aumenten las reservaciones de vuelos y hoteles con solamente un mes de anticipación o menos. Esto para obtener mejores promociones de viaje que pueden ser un factor decisivo, ya que el viajero se mantiene en la búsqueda de alternativas que le permitan ahorrar dinero.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2/58.png')
      .py-4.py-md-5(titulo="La reivindicación del <em>Slow Tourism</em>" :icono="require('@/assets/curso/tema2/55.svg')")
        .row.p-3
          .col-md-7.mb-4.mb-md-0
            h4 La reivindicación del #[em Slow Tourism]
            p Las personas están buscando viajes donde se puedan relajar y estar tranquilos, esto lo demuestra el estudio de la Confederación Española de Agencias de Viajes – CEAV: se harán con mayor regularidad viajes tranquilos sin cumplir con horarios estrictos y que realmente conecten al viajero con el destino, con sus costumbres y tradiciones. A esto se le conoce como #[em Slow Tourism], un concepto que aparece desde hace un par de años, pero que comienza a tomar más fuerza en esta coyuntura. Colombia con sus actividades en naturaleza y cultura, enfocados en turismo comunitario, caminatas, turismo de bienestar, entre otras, hacen que el viajero pueda realmente desconectarse y vivir nuevas y revitalizantes experiencias.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2/59.png')
      .py-4.py-md-5(titulo="Viajes nómadas" :icono="require('@/assets/curso/tema2/56.svg')")
        .row.p-3
          .col-md-7.mb-4.mb-md-0
            h4 Viajes nómadas
            p Los empresarios y empleados han demostrado que el trabajo a distancia funciona y una nueva ventaja para los empleados es la capacidad de trabajar desde cualquier lugar. Esta situación puede tener gran potencial para atraer turistas nómadas digitales como lo hizo Barbados, que fue uno de los primeros países que aprovechó esta oportunidad y elaboró un visado de “nómada digital” con el cual se puede trabajar desde ese país durante un año. Bermudas, Anguila, Georgia, Dubái y Estonia, entre otros, son algunos de los países que siguieron rápidamente esta idea. Es altamente probable que Colombia haga parte de este selecto grupo de países que aprovechen positivamente los efectos de la pandemia.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2/60.png')



      


</template>

<script>
import ImagenInfograficaBAjustada from '../components/ImagenInfograficaBAjustada.vue'
export default {
  name: 'Tema2',
  components: {
    ImagenInfograficaBAjustada,
  },
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.slydera1
  background: url(../assets/curso/tema2/2.png)
  background-size: cover
  background-repeat: no-repeat
  border-radius: 20px
.cajon.color-primario:before
  background-color: #DAAF40
.cont_tema2_1:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema2/26.png)
  background-position: center
  background-repeat: no-repeat
  background-size: cover
.img-infografica-b.color-primario .img-infografica-b__item__numero i
  color: #fff
  background-color: #EB6F2D
  padding: 7px
  border-radius: 33px
  border: 4px #F19E72 solid
  font-size: 13px
.img-infografica-b__modal
  background-color: #F6F6F6
.img-infografica-b__modal__btn-cerrar i
  color: #707070
.cont_tema2_2:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema2/33.png)
  background-position: top
  background-repeat: no-repeat
  background-size: 1350px
.cont_fake1
  background: url(../assets/curso/tema2/35.png)
  background-size: cover
  background-position: bottom
.cont_fake2
  background: url(../assets/curso/tema2/39.png)
  background-size: cover
  background-position: top
.cont_fake3
  background: url(../assets/curso/tema2/42.png)
  background-size: cover
  background-position: bottom
.cont_fake4
  background: url(../assets/curso/tema2/45.png)
  background-size: cover
  background-position: bottom
.cont_fake5
  background: url(../assets/curso/tema2/47.png)
  background-size: contain
  background-position: bottom
  border-radius: 20px
  background-repeat: no-repeat
.img-infografica-b__modal
  display: flex
  align-items: center
@media only screen and (max-width: 720px)
  .img-infografica-b__item__numero span
    font-size: 9px
</style>
