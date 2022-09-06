<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 El guionaje en Colombia

    p(data-aos="fade-up") A continuación, en el siguiente video se verá cómo ha evolucionado la guianza turística y el sector turístico en Colombia:

    figure.mt-5(style="position:relative")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1. Principios básicos: perfil y campo de acción

    .cont_tema3_1(style="position:relative")
      p(data-aos="fade-up" style="position:relative") El guía de turismo desempeña un cargo fundamental para el turismo, ya que están en contacto directo con el turista, son el elemento de enlace entre el turista y el país que visita. Por el trato que le brinde el guía, puede el turista juzgar a todo el país, pues ya es la primera impresión que recibe del lugar. De su comportamiento y cultura de servicio, depende la idea que el turista se forme de un destino turístico.
      .row.mt-4(style="position:relative")
        .col-md-6.mb-4(style="place-self:center;")
          p(data-aos="fade-up") Para ejercer la guianza turística, se requiere la tarjeta profesional como guía y la inscripción al Registro Nacional de turismo -RNT-, teniendo en cuenta:
          SlyderF.mb-5(columnas="col-lg-12")
            .tarjeta.color-primario.p-4(style="background-color:#FFD667;")
              .row.justify-content-center.mb-3
                p Campo de actuación en el que el guía puede ofrecer sus servicios como independiente directamente al turista, pasajero o visitante, también a empresas del sector, tales como: 
                ul.lista-ul.mt-3(style="position:relative")
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Agencias de turismo.
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Alojamientos.
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Operadores de transporte especial de pasajeros. 
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Atractivos turísticos: museos, centros de interpretación, fábricas e industrias, entre otros.
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Organizadoras de congresos, eventos, ferias, exposiciones.
            .tarjeta.color-primario.p-4(style="background-color:#FFD667;")
              .row.justify-content-center.mb-3
                p En el ámbito público y privado, puede desempeñar sus funciones en: 
                p.mt-4 Entidades de servicios sociales:
                ul.lista-ul.mt-3(style="position:relative")
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Gremios.
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Sindicatos.
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Mutuales.
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Obras sociales.
            .tarjeta.color-primario.p-4(style="background-color:#FFD667;")
              .row.justify-content-center.mb-3
                p Entes de turismo, de fomento o promoción turística:
                ul.lista-ul.mt-3(style="position:relative")
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Oficinas y centros de información, públicos o privados. 
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Entidades de educación.
                  li(data-aos="fade-up")
                    p.mb-1 #[i.fas.fa-paper-plane(style="color:#12263F;border: 1px #12263F solid;border-radius:50%;padding:.3rem;font-size:10px;")] Puntos de Información Turística (PIT).
        .col-md-6(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/2.png" data-aos="fade-left")

      .cajon.color-secundario.p-4.mt-3.row.cajon_2_1(style="background-color:#E8E8E8;")
        .col-md-2.mb-4.mb-md-0(style="place-self:center")
          figure.text-center
            img(src="@/assets/curso/tema3/3.png" data-aos="zoom-in-up" style="display:inline;max-width:100px;")
        .col-md-10(style="place-self:center")
          p.mb-0(data-aos="fade-up") Para cumplir las expectativas de dichas organizaciones, el guía debe conocer todo lo que puede llegar a interesar sus usuarios, contar con un acervo cultural y artístico, identificar las bellezas naturales, atractivos, diversiones, información sobre comunicaciones, alojamientos, transportes, entre otros y dominar con fluidez los idiomas extranjeros, como mínimo inglés.

      .row.mt-5(style="position:relative")
        .col-md-6.mb-4.mb-md-0(style="place-self:center")
          figure
            img(src="@/assets/curso/tema3/4.png" data-aos="fade-right")
        .col-md-6(style="place-self:center")
          p(data-aos="fade-up") Deberá conocer no solo el desarrollo socio cultural local sino también la del usuario que atiende, de esta manera, podrá comprenderlo y asistirlo mejor. 
          p.mt-4(data-aos="fade-up") Además de los conocimientos específicos del guía, se hacen indispensables ciertas cualidades individuales del carácter, tales como: 
          ul.lista-ul.mt-3.ps-3(style="position:relative")
            li(data-aos="fade-up")
              p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] Amabilidad.
            li(data-aos="fade-up")
              p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] Intuición
            li(data-aos="fade-up")
              p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] Tacto.
            li(data-aos="fade-up")
              p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] Equilibrio emocional.
            li(data-aos="fade-up")
              p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] Dominio de sí mismo.
            li(data-aos="fade-up")
              p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] Compostura en los modos.
            li(data-aos="fade-up")
              p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] Capacidad comunicativa.
            li(data-aos="fade-up")
              p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] Ánimo jovial y alegre.
            li(data-aos="fade-up")
              p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] Espíritu de observación.
            li(data-aos="fade-up")
              p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] Diplomacia.
            li(data-aos="fade-up")
              p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] Paciencia.

      p.mt-3(data-aps="fade-up" style="position:relative") La honestidad es el principio del ejercicio profesional del guía de turismo, esta debe verse reflejada en el ejercicio de la misma, con un buen trato hacia el turista, y con un buen manejo de la información.

    .bloque-texto-a.color-primario.mt-5.bloque3_1(style="background-color:transparent;position:relative;z-index:1;")
      .row.m-0.align-items-center.justify-content-between(style="position:relative")
        .col-lg-8.p-5
          .bloque-texto-a__texto.p-4(style="position:relative")
            p.mb-0(data-aos="fade-up") Como fortalezas actitudinales, el guía de turismo debe tener sentido de pertenencia, de liderazgo, actitud de servicio, manejo de idiomas, buena presentación personal y saber cómo manejar los imprevistos. Las fortalezas actitudinales se reflejan en los amplios conocimientos de las regiones y del mundo; igualmente, es necesario procurar su preparación académicamente, tener una buena condición física, con ética profesional y con conocimiento de los requerimientos para las personas con discapacidad.
        .col-lg-4.mb-4.mb-lg-0
          figure(style="position:relative")
            img(src="@/assets/curso/tema3/6.svg" data-aos="fade-left")

    .row.mt-5
      .col-md-1.mb-3(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema3/7.svg" data-aos="zoom-in-up" style="display:inline;max-width:100px")
      .col-md-11(style="place-self:center")
        p(data-aos="fade-up") Como profesional, el guía de turismo ejerce una atención personalizada al cliente, en este caso el turista, encaminada a asistir y a conducir en un determinado tiempo y lugar de interés. Tal estadía puede darse por motivos de recreación, educación, cultura, entre otros.
        p.mt-3(data-aos="fade-up") Como se aprecia a continuación, existen otros aspectos importantes para definir el perfil profesional de un guía que son:

    .cont_tema3_2.mt-5.ps-3.pe-3.pt-4(style="position:relative")
      ImagenInfograficaAjustada.color-secundario.col-md-7.m-auto.infografia1
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema3/9.svg' data-aos="zoom-in-up")
        .tarjeta.color-acento-botones.p-4(x="40%" y="10%" numero="Aspecto lingüístico")
          h4.mb-0.p-2(style="color:#12263F;border-left:4px #12263F solid;") Aspecto lingüístico
          p.mt-3(style="color:#12263F;") Con el uso del vocabulario correcto y técnico en el idioma en el cual ejerce su labor, que pueda ser entendido y que no dé lugar a equívocos o suposiciones, además de mostrar una cuidada dicción, utilizando el tono y énfasis adecuados a la hora de comunicar. 
        .tarjeta.color-acento-botones.p-4(x="25%" y="35%" numero="Lenguaje corporal")
          h4.mb-0.p-2(style="color:#12263F;border-left:4px #12263F solid;") Lenguaje corporal
          p.mt-3(style="color:#12263F;") Es un medio de expresión importantísimo, ya que se transmiten sentimientos y actitudes. Hay que recordar que “es más revelador lo que hacemos que lo que decimos”, con la mirada, la expresión facial, las posturas, la proximidad y la orientación, las manos y los movimientos (Ministerio de Comercio Exterior y Turismo, 2007).
        .tarjeta.color-acento-botones.p-4(x="45%" y="60%" numero="Imagen personal")
          h4.mb-0.p-2(style="color:#12263F;border-left:4px #12263F solid;") Imagen personal
          p.mt-3(style="color:#12263F;") Es demasiado importante saber específicamente a quién va dirigidos los productos o servicios de la organización, cuanto más se delimite el público al que se debe llegar, mayor efectividad tendrán las estrategias diseñadas.

    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2. Servicios guiados y modalidades de contratación

    p(data-aos="fade-up") Por su relación laboral los guías de turismo en Colombia se pueden clasificar como #[em freelance] o dependientes; a continuación, se explica cómo se clasifica la actividad bajo la modalidad de #[em freelance]:

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Guía <em>freelance</em> o independiente" :icono="require('@/assets/curso/tema3/10.png')")
        .row.p-3
          .col-md-6.mb-4.mb-md-0
            h4 Guía #[em freelance] o independiente
            p Es aquel que no tiene una relación laboral directa con una agencia de viajes u operadora, sino que presta sus servicios en varias de ellas o que directamente es contratado por el turista o pasajero para servicios turísticos.
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/11.png')
      .py-4.py-md-5(titulo="Asistencias" :icono="require('@/assets/curso/tema3/10.png')")
        .row.p-3
          .col-md-6.mb-4.mb-md-0
            h4 Asistencias
            p Es la atención en el lugar de arribo o embarque (aeropuerto, terminal terrestre, estación de tren, etc.). Las asistencias se dividen en nacional e internacional, incluye el acompañamiento para las diligencias que requiera realizar el usuario del servicio guiado.
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/12.png')
      .py-4.py-md-5(titulo="<em>City Tour</em>" :icono="require('@/assets/curso/tema3/10.png')")
        .row.p-3
          .col-md-6.mb-4.mb-md-0
            h4 #[em City Tour]
            p Visita guiada dentro de una ciudad. Se puede hacer peatonal, en bus, minibus, auto, van. Por lo general, su duración puede ser de 3 horas, dependiendo de la ciudad donde se tome el tour.
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/13.png')
      .py-4.py-md-5(titulo="<em>Tour</em>" :icono="require('@/assets/curso/tema3/10.png')")
        .row.p-3
          .col-md-6.mb-4.mb-md-0
            h4 #[em Tour]
            p Visita organizada en un tiempo determinado a lugares de interés dentro de una ciudad. El tour siempre está a cargo de un guía de turismo que da la información general en la visita, y en la mayoría de las veces también incluye el servicio de transporte turístico.
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/14.png')
      .py-4.py-md-5(titulo="Traslado o <em>transfer</em>" :icono="require('@/assets/curso/tema3/10.png')")
        .row.p-3
          .col-md-6.mb-4.mb-md-0
            h4 Traslado o #[em transfer]
            p Servicio turístico donde se transporta al grupo o al turista entre dos puntos geográficos dentro de una ciudad. Los traslados más frecuentes son entre el aeropuerto y un establecimiento de hospedaje o viceversa. Asimismo, en los traslados entre aeropuerto - establecimiento de hospedaje o viceversa se diferencia en internacional o nacional de acuerdo con el vuelo y línea aérea que utiliza el turista (Ministerio de Comercio Exterior y Turismo, 2007).
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/15.png')

    .cajon.color-secundario.p-4.mt-3.row.cajon_2_1(style="background-color:#E8E8E8;")
      .col-md-2.mb-4(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema3/16.png" data-aos="zoom-in-up" style="display:inline;max-width:100px;")
      .col-md-10(style="place-self:center")
        p.mb-0(data-aos="fade-up") La otra forma de condición laboral, es cuando el guía presta sus servicios de forma directa y permanente para una agencia de viajes u operadora, en este caso su cargo puede tener algunas de estas clasificaciones, como se observa a continuación: 

    .row.mt-5
      .col-md-6.mb-4.mb-md-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/17.png" data-aos="fade-left")
      .col-md-6(style="place-self:center")
        AcordionA.acor1(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Guía  acompañante  y  coordinador.")
            p Es  responsable  del  desarrollo  de  la  visita desde la realización de reservas, itinerarios, alimentación, además de la coordinación y ejecución del viaje.
          .row(titulo="Guía conductor")
            p Como el anterior, cumple sus funciones de guía y, además, conduce el  vehículo donde se presta el servicio.
          .row(titulo="Transferista   o <em>transfer</em>")
            p Su   responsabilidad   reside   en   recibir y   realizar desplazamientos  en  la  terminal,  ya  sea de  manera  terrestre, aérea, marítima o fluvial hasta el lugar de hospedaje. 
          .row(titulo="Guía de destino")
            p Su cometido es apoyar a los visitantes en los desplazamientos en función de solucionar los problemas e imprevistos en la ciudad de destino. 
          .row(titulo="Guía  de  ecoturismo")
            p Su labor  es  realizar  recorridos  de  turismo  sostenible, sustentable  y  ecoturísticos  en  áreas  naturales,  parques  nacionales, reservas, entre otras.
          .row(titulo="Guía de montaña.")
            p Es el encargado de actividades de ecoturismo realizadas en la montaña con diferentes alturas y requerimientos de dificultad, capacitación, entrenamiento y manejo de equipos de baja montaña de menor dificultad.

    .cajon.color-primario.p-4.mt-3.row(style="background-color:#FFE6A1;")
      .col-md-2.mb-4.mb-md-0(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema3/3.png" data-aos="zoom-in-up" style="display:inline;max-width:100px;")
      .col-md-10(style="place-self:center")
        p.mb-0(data-aos="fade-up") Los guías de turismo en Colombia deben circunscribirse a lo preceptuado en el Código Laboral colombiano, en todo lo que se refiera a su contratación, para quedar amparados por la legislación, que protege sus derechos y establece sus deberes. Algunas modalidades existentes son:

    .row.mt-5
      .col-md-6.mb-4.mb-md-0(style="place-self:center")
        ul.lista-ul.mt-3.ps-3(style="position:relative")
          li(data-aos="fade-up")
            p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] #[strong Contrato a término fijo:] es aquel contrato por escrito que estipula el tiempo exacto en que se van a prestar los servicios contratados por el empleador y establece las diferentes cláusulas entre trabajador y empleador, en este caso es este último quien asume parte del pago de la seguridad social del trabajador. #[br] Por lo general los guías de turismo en Colombia que trabajan directamente con un atractivo turístico o en puntos de información turística, tienen esta modalidad de contrato.
          li(data-aos="fade-up")
            p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] #[strong Contrato a término indefinido:] es aquel contrato en el que se estipula la fecha de inicio, pero no se establece la duración máxima del mismo, aquí el empleador se hace cargo del pago de parte de la seguridad social del trabajador. Aunque no es tan común en el caso de los guías de turismo, por lo general este contrato se da en algunos atractivos turísticos.
      .col-md-6(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/19.png" data-aos="fade-left")

    .row.mt-5
      .col-md-6.mb-4.mb-md-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/20.png" data-aos="fade-right")
      .col-md-6(style="place-self:center")
        ul.lista-ul.mt-3.ps-3(style="position:relative")
          li(data-aos="fade-up")
            p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] #[strong Por obra laboral:] es cuando se contrata al guía para desarrollar sus actividades en un lugar y con una duración determinada por el empleador, este último asume el pago de la seguridad social. Aunque con algunas variaciones, esta es la modalidad de contratación que se realiza a los guías de turismo en las agencias de viajes.
          li(data-aos="fade-up")
            p.mb-1 #[i.fas.fa-paper-plane(style="color:#EB6F2D;border: 1px #EB6F2D solid;border-radius:50%;padding:.3rem;font-size:10px;")] #[strong A destajo:] no existe una modalidad de contrato de trabajo a destajo, como puede ser el contrato de trabajo por duración de obra o labor, sino que el destajo es una forma o modalidad de remunerar al trabajador.

    .cajon.color-primario.p-4.mt-5.row.cajon_2_2(style="background-color:#FFD667;box-shadow:0px 0px 10px rgba(0,0,0,.15);")
      .col-md-2.mb-4.mb-md-0(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema3/21.png" data-aos="zoom-in-up" style="display:inline;max-width:100px;")
      .col-md-10(style="place-self:center")
        p.mb-0(data-aos="fade-up") Cualquier contrato, sea fijo, indefinido, por duración de obra o labor, ocasional o transitorio, a domicilio, puede ser remunerado bajo la modalidad a destajo o por tarea. En la remuneración por destajo al trabajador se le paga según la tarea que desarrolle en su jornada laboral, o según las unidades producidas (Código Sustantivo de Trabajo,  Ministerio de Protección Social, 2011).

    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3. Normatividad sobre guionaje

    p(data-aos="fade-up") A continuación, puede apreciar una línea del tiempo de la normativa más sobresaliente para este prestador de servicios turísticos:     
    .row.mt-5
      .col-md-6.mb-4.mb-md-0(style="place-self:center")
        AcordionA.acor2(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Decreto 2345 de 1956")
            p Artículo 7°: “Toda persona que se ocupe o quiera ocuparse en prestar el servicio de guía o cicerone, llenará los siguientes requisitos ante la División Nacional de Turismo: 1- Comprobar ser mayor de 18 años; 2- Presentar examen de conocimientos generales ante la División Nacional de Turismo o ante persona o entidad que ésta designe; 3- Presentar certificado de idoneidad en idiomas extranjeros, particularmente del inglés (Decreto 2345 de 1956).
          .row(titulo="Decreto 410 de 1979")
            p Reglamenta los servicios que prestar el guía de turismo: acompañar al turista o grupo durante la excusión a su cargo; prestar la asistencia necesaria en trámites y diligencias que deba cumplir antes las autoridades particulares; informar debidamente al turista sobre los diversos aspectos de interés del sitio a visitar; prevenir en lo posible las eventualidades que puedan a afectar a los turistas. 
            p.mt-4 Además, este Decreto reglamentó la formación necesaria para ejercer y el carné que debía portar para prestar el servicio de guionaje en el territorio colombiano.
          .row(titulo="Ley 300 de 1996")
            p Es la Ley Marco del Turismo en Colombia, definió a los guías de turismo como las personas naturales que prestan servicios profesionales en el área del guionaje o guianza turística, cuyas funciones hacia el turista, viajero o pasajero son orientarlo, conducirlo, instruirlo y asistirlo durante la ejecución del servicio contratado (Ley 300 de 1996).
          .row(titulo="Decreto 503 de 1997")
            p Se incorporan otras disposiciones para el reconocimiento de la Guía Profesional de Turismo, los derechos, deberes y obligaciones, así como la creación de Consejo Profesional de Guías de Turismo (Decreto 503 de 1997).
          .row(titulo="Decreto 1825 de 2001")
            p Se dictan nuevas disposiciones cuya finalidad es lograr que los guías de turismo presten los servicios ofrecidos a los usuarios dentro de los mejores niveles de calidad, así como establecer algunas normas que regulen su actividad. Entre ellas se destaca el acceso gratuito a las áreas abiertas al público como museos, monumentos, zonas arqueológicas y en general a todo sitio de interés turístico (Decreto 1825 de 2001).
          .row(titulo="Ley 1101 de 2006")
            p #[strong Artículo 12.] Prestadores de servicios turísticos que se deben registrar en RNT Registro Nacional de Turismo … 4. Los guías de turismo…
          .row(titulo="Resolución 4896 de 2011")
            p Estableció los requisitos para la actualización anual de la inscripción de los guías de turismo en el Registro Nacional de Turismo. 
      .col-md-6(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/22.png" data-aos="fade-left")

    .row.mt-5
      .col-md-6.mb-4.mb-md-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/23.png" data-aos="fade-left")
      .col-md-6(style="place-self:center")
        AcordionA.acor2(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Ley 1558 de 2012")
            p Modifica la Ley 300 de 1996 y la Ley 1101 de 2006. Se conoce como profesional en el área de Guionaje o Guianza turística en cualquiera de sus modalidades, a la persona que esté inscrita en el Registro Nacional de Turismo.
            p.mt-4 La Tarjeta Profesional de Guía de Turismo es el documento único legal que se expide para identificar, proteger, autorizar y controlar al titular de la misma en el ejercicio profesional del Guionaje o Guianza Turística.
          .row(titulo="Prestadores de servicios turísticos")
            p Los prestadores de servicios turísticos, así como las personas o entidades a cargo de la administración de todos los atractivos turísticos registrados en el inventario turístico nacional, están en la obligación de observar y hacer cumplir que el servicio profesional de guionaje o guianza turística sea prestado únicamente por Guías de Turismo inscritos en el Registro Nacional de Turismo. 
          .row(titulo="Circular 003 de 2016 ")
            p Circular 003 de 2016 del Viceministerio de Turismo. Sobre la contratación de Guías de Turismo y Prestadores de Servicios Turísticos en General, en la cual se dicta que “es obligación de las agencias de viajes en particular … proporcionar, intermediar o contratar directa o indirectamente con el turista la prestación de los servicios turísticos con sus homólogos inscritos en el Registro Nacional de Turismo”. 
          .row(titulo="Código de Ética de la Profesión del Guionaje o Guianza Turística")
            p En el año 2016 el Consejo Profesional de Guías de Turismo establece mediante la Resolución 135 el Código de Ética de la Profesión del Guionaje o Guianza Turística y deroga la Resolución 221 del 8 de abril de 1999. 
          .row(titulo="Decreto 229 de 2017")
            p Por el cual se establecen las condiciones y requisitos para la inscripción y actualización en el Registro Nacional de Turismo. Decreto Único Reglamentario del sector Comercio, Industria y Turismo. 
          .row(titulo="Decreto 1053 de 2020")
            p Por medio del cual se reglamenta el guionaje turístico, y se adoptan otras disposiciones.  
          .row(titulo="Ley 2068 de 2020")
            p Modificó la Ley General de Turismo, en el artículo 23 indica que para obtener la tarjeta como guía de turismo se deberá acreditar un nivel de competencias mediante la presentación de un título de formación de educación superior del nivel tecnológico en el área de Guionaje Turístico, o de conformidad con las condiciones y mecanismos que establezca el Sistema Nacional de Cualificaciones (SNC). De igual forma, podrá ser reconocido como Guía de Turismo quien ostente un título profesional en las áreas afines del conocimiento determinadas por el Ministerio de Comercio, Industria y Turismo, y haber aprobado el curso de homologación que el SENA diseñe para tal fin.







</template>

<script>
import ImagenInfograficaAjustada from '../components/ImagenInfograficaAjustada.vue'
export default {
  name: 'Tema3',
  components: {
    ImagenInfograficaAjustada,
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
.cont_tema3_1:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema3/1.jpg)
  background-position: top
  background-repeat: no-repeat
  background-size: cover
.slyder-f__btn i
  color: #707BA3
.cajon_2_1:before
  background-color: #AFAFAF !important
.cajon_2_2:before
  background-color: #DAAF40
.bloque3_1.bloque-texto-a.color-primario
  background-color: #FFB338
.bloque3_1.bloque-texto-a.color-primario:before
  background: url(../assets/curso/tema3/5.png)
  background-size: cover
  background-repeat: no-repeat
  height: 93%
  top: 33px
.bloque3_1.bloque-texto-a.color-primario:after
  width: 100%
  height: 92.5%
  content: ''
  position: absolute
  background-color: #3F6A31
  top: 35px
  z-index: -1
.cont_tema3_2:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema3/8.png)
  background-position: bottom
  background-repeat: no-repeat
  background-size: cover
.infografia1 .img-infografica__item__numero i
  color: #fff
  background-color: #0387D0
  padding: 7px
  border-radius: 33px
  border: 4px #90A15A solid
  font-size: 13px
.infografia1 .tarjeta.color-acento-botones
  background-color: rgba(255,214,103,.85)
.acor1 .acordion__activo
  background: url(../assets/curso/tema3/18.png)
  background-size: cover
  background-repeat: no-repeat
.acor2 .acordion__activo
  background-color: #FFE6A1
</style>
