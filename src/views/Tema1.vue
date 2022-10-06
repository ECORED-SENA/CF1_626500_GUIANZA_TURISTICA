<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades del turismo

    .cont_intro1.row(style="position:relative;")
      .col-md-6.mb-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema1/1.png" data-aos="fade-right" style="position:relative;display:inline;")
      .col-md-6(style="place-self:center;")
        p(data-aos="fade-up" style="position:relative") Debido a la importancia de la actividad turística en el mundo, es necesario entender bien cualquier tópico relacionado con el turismo en los diferentes destinos, sin que se pierdan las características del mismo, más bien resaltando los productos turísticos existentes, para que los turistas se lleven la mejor experiencia y deseen regresar.
        p.mt-4(data-aos="fade-up" style="position:relative") Esto explica la importancia de la función del guía turístico, de hecho, es una gran responsabilidad y de allí la relevancia de su formación y profesionalización para que cada día sea mejor el servicio que se le preste a visitantes y turistas.
        .cajon.color-primario.p-5.mt-4(style="background-color:#FFD667;box-shadow:0px 0px 20px rgba(0,0,0,.14);")
          p.mb-0(data-aos="fade-up" style="position:relative") En este componente se define cómo ha sido la evolución turística, qué es turismo, la teoría de la motivación y las tipologías turísticas, producto de dichas motivaciones y cómo se desarrolla la morfología turística; se incluye aspectos del guionaje y la profesión de guianza.

    Separador

    .titulo-segundo
      h2#t_1_1 1.1 Reseña de la evolución turística

    .cont_tema1_1(style="position:relative")
      .row.cont_magic1(style="position:relative")
        .col-lg-3.mb-3.mb-lg-0.ps-4.pe-4(style="place-self:center")
          figure.text-center
            img(src="@/assets/curso/tema1/38.svg" data-aos="fade-right" style="display:inline;position:relative;max-width:250px;")
        .col-lg-7.mb-3.mb-lg-0.p-5(style="place-self:center")
          h5(data-aos="fade-up" style="position:relative") Evolución turística
          p.mt-4(data-aos="fade-up" style="position:relative") Ahora se verá un recorrido de la evolución del turismo y la importancia de las prácticas de guianza a través de la historia; por ello, en el siguiente recurso se hará un recorrido por los sucesos más importantes.
        .col-lg-2.p-5.text-center(style="position:relative;place-self:center")
          a.boton.texto-blanco(:href="obtenerLink('downloads/resena_de_la_evolucion_turistica.pdf')" target="_blank")
            span Descargar
            i.fas.fa-file-download

      .row.mt-5
        .col-md-9.mb-4.mb-md-0(style="position:relative;place-self:center")
          h4.mb-0(data-aos="fade-up") Tres hechos que lo cambiaron todo…
          p.mt-4(data-aos="fade-up") Hubo tres hechos durante el Renacimiento que dieron lugar a cambios ideológicos, promovieron la libertad y la relación del ser humano con la naturaleza y que, además, fueron fundamentales para que luego se desarrollara la industria turística. #[br] #[br]
          p.mt-2(data-aos="fade-up") En realidad, estos tres hechos, fueron excelente referente para iniciar al turismo a partir del inicio del desligue de la Iglesia como fuente de todo, a la consideración de que el ser humano puede pensar libremente y ser bueno y la lucha del mismo por sus derechos fundamentales.
        .col-md-3(style="position:relative;place-self:center")
          figure
            img(src="@/assets/curso/tema1/39.png" data-aos="fade-left" style="max-width:250px;display:inline")


      p.mt-5(data-aos="fade-up" style="position:relative") De acuerdo con Jiménez (1990), los tres hechos son los siguientes:

      .row.mt-5
        .col-md-3(style="place-self:center")
          figure.text-center
            img(src="@/assets/curso/tema1/40.png" data-aos="fade-left" style="display:inline;position:relative")
        .col-md-9.mb-4(style="place-self:center")
          TabsA.color-primario(style="position:relative")
            .tarjeta.color-acento-botones.p-5.cont_tab_a(titulo="La reforma protestante" style="position:relative")
              h4 La reforma protestante
              p.mt-4 La Reforma Protestante iniciada por Martín Lutero en 1517, quien habla sobre el papel que la Iglesia católica estaba cumpliendo en la sociedad, cuestionó la relación del ser humano con la religión, denotando nuevos contextos del hombre libre.
            .tarjeta.color-acento-botones.p-5.cont_tab_a(titulo="Libro <em>El Emilio o la educación</em>" style="position:relative")
              h4 Libro #[em(style="color:#12263F;") El Emilio o la educación]
              p.mt-4 La publicación del libro El Emilio o la educación por parte de Jean-Jacques Rousseau en 1762, es un tratado filosófico que sostiene que el ser humano es bueno por naturaleza, mientras participa de una sociedad inevitablemente corrupta.
            .tarjeta.color-acento-botones.p-5.cont_tab_a(titulo="La Revolución francesa" style="position:relative")
              h4 La Revolución francesa
              p.mt-4 La Revolución francesa ocurrida en 1789, que cambió la pirámide social de la época, poniendo a los burgueses a la cabeza del Estado, ostentando poder político y económico.

    Separador

    .titulo-segundo
      h2#t_1_2 1.2  Evolución del concepto turismo

    .cont_tema1_2(style="position:relative")
      p(data-aos="fade-up" style="position:relative") El concepto del turismo, así como la actividad turística, también ha evolucionado con el tiempo y las circunstancias que rodean las sociedades humanas.
      .titulo-sexto.color-acento-contenido.mt-5(style="position:relative")
        h5 Tabla 1
        span #[em Corrientes que definieron el turismo]

      .tabla-a.color-acento-botones.mt-5(style="position:relative")
        table
          caption(style="background-color:#F6F6F6;font-weight:500;") Nota. Tomada de Jiménez (1990).
          thead(style="border:0;")
            tr(style="background-color:#EB6F2D;")
              th.p-3.text-white.text-center(style="font-size:18px;border:0;width:20%;") Corriente
              th.p-3.text-white.text-center(style="font-size:18px;border:0;width:40%;") Representantes
              th.p-3.text-white.text-center(style="font-size:18px;border:0;width:40%;") Contenido
          tbody
            tr(style="background-color:#F6F6F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-size:18px;font-weight:bold;") Económica
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Schullern (1911)
              td.p-4(style="border:0") El turismo es un hecho económico, que se manifiesta en la afluencia, permanencia y regreso de los turistas, desde, en y hacia ciertas regiones.
            tr(style="background-color:#FFFFFF;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-size:18px;font-weight:bold;") Cinética
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Schwink y Borrman 1929 y 1930
              td.p-4(style="border:0") El turismo es un movimiento de personas que abandona temporalmente su residencia habitual, por motivos relacionados con su cuerpo, su espíritu o su profesión.
            tr(style="background-color:#F6F6F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;font-size:18px;font-weight:bold;") Psicosocial
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Stradner y Morgenroth 1930
              td.p-4(style="border:0") Es el tráfico de viajeros cuya característica es que se desplazan sin ningún tipo de interés económico, solamente incrementar su “status” y satisfacer su necesidad de lujo.

      p.mt-5(data-aos="fade-up" style="position:relative") A continuación, se aprecia de manera gráfica la evolución del turismo, con sus hechos más destacados hasta la actualidad.

    .cont_tema1_3.mt-5.pb-5(style="position:relative")
      figure
        img(src="@/assets/curso/tema1/8.svg" data-aos="zoom-in-up" style="position:relative")

    .cont_tema1_4.mt-5.pb-5(style="position:relative")
      .row
        .col-md-6.mb-4(style="place-self:center")
          .p-5.mt-4(style="background-color:#FFD667;box-shadow:0px 0px 20px rgba(0,0,0,.14);")
            p.mb-0(data-aos="fade-up" style="position:relative") Se evidencia como en el curso de casi 20 años se dan tres tendencias sobre cuál debería ser la conceptualización del turismo, pasando de una concepción netamente económica a otra de movimiento, dinámica y llegando a un concepto en el que lo más importante son las apariencias; por lo anterior, el concepto del turismo sigue avanzando a partir de estas corrientes y se derivan en nuevos conceptos a saber:
          p.mt-4(data-aos="fade-up" style="position:relative") De igual manera, en la historia de la guianza turística, la evolución de la noción de turismo de corrientes de turismo a escuelas de turismo en relación con lo económico, se ilustra a continuación.
        .col-md-6(style="place-self:center")
          figure.text-center
            img(src="@/assets/curso/tema1/10.png" data-aos="fade-left" style="position:relative")

      .titulo-sexto.color-acento-contenido.mt-5(style="position:relative")
        h5 Figura 1
        span #[em Escuela económica del turismo]
      figure.text-center.mt-5
        img(src="@/assets/curso/tema1/11.svg" data-aos="fade-left" style="position:relative")

      p.mt-5(data-aos="fade-up" style="position:relative") En la anterior figura se ve cómo va variando el concepto turístico incluso dentro de referentes similares, aquí se pasa de la corriente económica de 1911 a la escuela económica del turismo de 1997 y 1980.
      p.mt-4(data-aos="fade-up" style="position:relative") Ahora, es preciso ilustrar la evolución de la noción de turismo de corrientes a escuelas de turismo en relación con lo cinético que evoluciona en humanístico.

      .titulo-sexto.color-acento-contenido.mt-5(style="position:relative")
        h5 Figura 2
        span #[em Corriente cinética del turismo]
      figure.text-center.mt-5.col-md-10.m-auto
        img(src="@/assets/curso/tema1/12.svg" data-aos="fade-left" style="position:relative")

      p.mt-5(data-aos="fade-up" style="position:relative") La corriente cinética como se pudo apreciar, se refiere a la evolución de la noción de turismo de corrientes a escuelas de turismo con relación psicosocial a lo sociológico.
      p.mt-4(data-aos="fade-up" style="position:relative") Sabiendo esto, en la corriente psicosocial, como se aprecia en la siguiente figura, evidencia una importante evolución de ver el turismo como un tema de prestigio a entender el fenómeno turístico como una relación entre grupos sociales.

      .titulo-sexto.color-acento-contenido.mt-5(style="position:relative")
        h5 Figura 3
        span #[em Corriente psicosocial del turismo]
      figure.text-center.mt-5.col-md-10.m-auto
        img(src="@/assets/curso/tema1/13.svg" data-aos="fade-left" style="position:relative")

    p.mt-5(data-aos="fade-up") De acuerdo con el desarrollo de estas escuelas, aparecen las tendencias turísticas que también conceptualizan sobre turismo así:

    .row.mt-5
      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/14.png' style="max-width:100px;display:inline;top:30px;")
          .tarjeta.color-primario(style="background-color:#FFD667;box-shadow:0px 0px 20px rgba(0,0,0,.1);")
            .text-white.p-4
              h4.text-center(data-aos="fade-up" style="color:#12263F !important") Tendencia sociológica
              p.mb-0.text-center(data-aos="fade-up" style="color:#12263F !important") El turismo tiene dos tendencias: #[br] #[strong(style="color:#12263F !important") Positiva:] el turismo es un problema social solucionable (Kabes, 1978). #[br] #[strong(style="color:#12263F !important") Negativa:] el turismo es una forma de que los ricos subyugan a los pobres (Ash y Turner, 1975).
      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/15.png' style="max-width:100px;display:inline;top:30px;")
          .tarjeta.color-primario(style="background-color:#FFD667;box-shadow:0px 0px 20px rgba(0,0,0,.1);")
            .text-white.p-4
              h4.text-center(data-aos="fade-up" style="color:#12263F !important") Tendencia geográfica 
              p.mb-0.text-center(data-aos="fade-up" style="color:#12263F !important") F. Cribier (1969): el turismo es un problema social porque aumentan los turistas y disminuye la calidad del espacio para vacaciones.
      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/16.png' style="max-width:100px;display:inline;top:30px;")
          .tarjeta.color-primario(style="background-color:#FFD667;box-shadow:0px 0px 20px rgba(0,0,0,.1);")
            .text-white.p-4
              h4.text-center(data-aos="fade-up" style="color:#12263F !important") Tendencia económica
              p.mb-0.text-center(data-aos="fade-up" style="color:#12263F !important") V.B. Cerny (1983): el turismo es un hecho de resultados económicos, que posee un espectro de influencia social y cultural.

    p.mt-5(data-aos="fade-up") Así, se evidencia cómo el concepto turismo no está unificado, simplemente porque existen muchos teóricos del turismo, en diferentes escuelas del turismo; esta diversidad de opiniones, sin lugar a dudas ha permitido que el turismo avance en varias direcciones sin que una sea más importante que la otra.

    .bloque1.bloque-texto-a.color-secundario.p-4.p-md-5.mt-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.text-center
            img(src="@/assets/curso/tema1/17.png" data-aos="zoom-in-up" style="max-width:250px;display:inline")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0(data-aos="fade-up") Según la Organización Mundial del Turismo (OMT) (2006), el turismo comprende las actividades que realizan las personas (turistas) durante sus viajes y estancias en lugares distintos al de su entorno habitual, por un periodo de tiempo consecutivo inferior a un año, con fines de ocio, por negocios y otros motivos (Ibáñez y Cabrera, 2011).
            p.mt-4(data-aos="fade-up") Cada día que avanza el mundo, a nivel político, económico, social y tecnológico, seguramente se evidenciarán nuevos conceptos sobre la actividad que involucra prácticamente todos los aspectos de relacionamiento del ser humano.

    Separador

    .titulo-segundo.mt-5
      h2#t_1_3 1.3  Morfología turística

    .cont_tema1_5.mt-5.pb-5(style="position:relative")
      .row
        .col-md-4.mb-4(style="place-self:center")
          figure.text-center
            img(src="@/assets/curso/tema1/19.png" data-aos="zoom-in-up" style="display:inline;position:relative")
        .col-md-8(style="place-self:center")
          p(data-aos="fade-up" style="position:relative") Es la clasificación de las formas en que se realiza la actividad turística, la cual procede de cuatro factores básicos:
          ul.lista-ul.mt-5(style="position:relative")
            li(data-aos="fade-up")
              p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding:.2rem;font-size:10px;")] #[strong Factor cinético- estático:] es decir, la clasificación desde el punto de vista del desplazamiento.
            li(data-aos="fade-up")
              p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding:.2rem;font-size:10px;")] #[strong Factor económico y de los bienes:] es la utilización de atractivos y servicios turísticos en un intercambio de bienes por dinero.
            li(data-aos="fade-up")
              p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding:.2rem;font-size:10px;")] #[strong Factor sociológico:] es la relación que surge entre el turista y el receptor.
            li(data-aos="fade-up")
              p #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding:.2rem;font-size:10px;")] #[strong Factor lúdico-motivacional:] es la realización de sueños y motivaciones turísticas, que dan satisfacción al turista.

    p.mt-5(data-aos="fade-up") Con base en lo anterior, Jiménez (1990), propone la siguiente morfología:

    .cont_tema1_6.mt-5.p-4.pb-5(style="position:relative")
      figure.text-center.col-md-8.m-auto
        img(src="@/assets/curso/tema1/21.svg" data-aos="zoom-in-up" style="display:inline;position:relative")

    br
    br
    .cont_intro1.pb-5.mt-5(style="position:relative")
      span(data-aos="fade-up" style="padding:.7rem 2rem;background-color:#B7CEAC;font-size:20px;border-radius:50px;position:relative;font-weight:bold;") Teoría de la motivación
      .row.mt-5
        .col-md-6.mb-4(style="place-self:center")
          .cajon.color-secundario.p-5.mt-4(style="background-color:#D2DDCE;box-shadow:0px 0px 20px rgba(0,0,0,.14);")
            p.mb-0(data-aos="fade-up" style="position:relative") La motivación es la fuerza interna que impulsa las decisiones, en el aspecto turístico se puede estudiar dicha motivación a partir de la teoría de Abraham Maslow, quien propuso una explicación para la motivación humana, en general.
          p.mt-4(data-aos="fade-up" style="position:relative") A continuación, se ilustra esta teoría de la Pirámide de las Necesidades de Maslow, que trata de una jerarquía de necesidades y factores que motivan a las personas, identifica cinco categorías de necesidades y considera un orden jerárquico ascendente de acuerdo con su importancia para la supervivencia y la capacidad de motivación:
        .col-md-6(style="place-self:center")
          figure.text-center
            img(src="@/assets/curso/tema1/22.png" data-aos="fade-left" style="position:relative;display:inline")

      figure.mt-5.col-md-10.m-auto
        img(src="@/assets/curso/tema1/23.svg" data-aos="zoom-in-up" style="position:relative")

      .cajon.color-primario.p-4.mt-5.col-md-10.m-auto(style="background-color:#FFE6A1;")
        p.mb-0(data-aos="fade-up" style="position:relative") Maslow (1970), propuso que las necesidades son la fuente de las motivaciones o impulsos que tienen los seres humanos para realizar actividades, propósitos y metas nuevas y que una vez satisfechas dichas necesidades el ciclo vuelve a comenzar.

    .row.mt-5
      .col-md-6.mb-4
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Necesidades fisiológicas o biológicas") Orientadas hacia la supervivencia del hombre son las necesidades básicas e incluyen cosas como: respirar, beber agua, dormir, comer, sexo, refugio.
          p(numero="2" titulo="Necesidades de seguridad") Cuando las necesidades fisiológicas están satisfechas, surgen las necesidades orientadas hacia la seguridad personal, cosas como: seguridad física, empleo, ingresos y recursos familiares, salud.
          p(numero="3" titulo="Necesidades de amor, afecto y pertenencia") Aparecen cuando las necesidades de seguridad y de bienestar fisiológico satisfechas, estas, están integradas por el amor, el afecto y la pertenencia o afiliación a un cierto grupo social y están orientadas, a superar los sentimientos de soledad y alienación.
          p(numero="4" titulo="Necesidades de estima") Cuando las tres primeras clases de necesidades están medianamente satisfechas, surgen estas necesidades, orientadas hacia la autoestima, el reconocimiento hacia la persona, el logro particular y el respeto hacia los demás; al satisfacer estas necesidades, las personas se sienten seguras de sí misma y valiosas dentro de una sociedad.
          p(numero="5" titulo="Necesidades de autorrealización") Son las más elevadas y se hallan en la cima de la jerarquía; Maslow describe la autorrealización como la necesidad de una persona para ser y hacer lo que la persona “nació para hacer”, este tipo de necesidades, incluyen los gustos, los lujos, el cumplimiento de sueños y metas. De acuerdo con Maslow, generalmente este tipo de necesidades se cumplen cuando se han satisfecho las anteriores, porque el ser humano se siente liberado para ser. Dentro de esta categoría sin lugar a dudas, se encuentra el deseo o necesidad de viajar y conocer cosas y lugares nuevos, nuevas culturas.
      .col-md-6
        figure.text-center
          img(src="@/assets/curso/tema1/24.png" data-aos="fade-left")

    .cont_tema1_7.mt-5(style="position:relative")
      .p-4
        p(data-aos="fade-up" style="position:relative") En turismo muchos teóricos han intentado abordar el tema de las necesidades y las motivaciones explicando el desarrollo de la actividad turística, ya se veía en la reseña histórica del turismo, como el ser humano primero se desplazó en busca de alimento (necesidad básica), luego comenzó a buscar protección y abrigo así que se sedentarizó, cubriendo sus necesidades de seguridad.
        p.mt-4(data-aos="fade-up" style="position:relative") Después, comenzó a viajar por comercio y guerras, en la que establecía relaciones con otros satisfaciendo su necesidad de amor y pertenencia, para enfrentar esas guerras. Más adelante se da cuenta de que requiere viajar y entender su propio mundo para apropiarlo y apropiarse, con lo cual satisface su necesidad de estima, los grandes viajes que se realizaron también tenían un trasfondo de prestigio, como el de Colón y el descubrimiento, sin saberlo, de un nuevo continente que después se denominaría América.
      figure
        img(src="@/assets/curso/tema1/26.svg" style="position:relative;border-bottom: 5px #41698B solid;")

    .row.p-4(style="background-color:#FFE6A1;position:relative;border-right:12px white solid;border-left:12px white solid;")
      .col-auto(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema1/27.png" style="position:relative;display:inline;max-width:100px;" data-aos="zoom-in-up")
      .col(style="place-self:center")
        p.mb-0(data-aos="fade-up" style="position:relative") Por último, pero no menos importante, ya que de hecho son estos viajes los que se consideran el primer vestigio de turismo, aparece el Grand Tour o viaje del conocimiento para satisfacer las necesidades de autorrealización y que luego se convierten en viajes de placer que hacen que el ser humano se sienta pleno, feliz y lleno de conocimientos nuevos, sin necesidad de viajar a estudiar.

    .row.mt-5
      .col-md-6.mb-4(style="place-self:center")
        p(data-aos="fade-up") #[strong(style="color:#EB6F2D;") De acuerdo con Gisolf (2014), la teoría de Maslow es la que posteriormente ha tenido más aplicaciones en el campo del estudio de la motivación turística] y entre estas figuran la aplicación elaborada por Pearce, quien a partir del modelo de Maslow, propuso una adaptación incorporando el factor de la experiencia turística misma.
        p.mt-4(data-aos="fade-up") Pearce (1988; 1993), Pearce y Caltabiano (1983) y Moscardo y Pearce (1986) desarrollaron una teoría de motivación llamada Travel Career Ladder (TCL). Esta teoría fue elaborada con base en la teoría jerárquica de la motivación.
        p.mt-4(data-aos="fade-up") La teoría describe que la motivación turística puede ocurrir en cinco niveles diferentes:
        ol.lista-ol--cuadro.mt-4.ps-4
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span #[strong 1]
            | Necesidad de relax. 
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span #[strong 2]
            | Necesidad de seguridad. 
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span #[strong 3]
            | Necesidad de relaciones. 
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span #[strong 4]
            | Necesidad de autoestima y desarrollo. 
          li(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span #[strong 5]
            | Necesidad de actualización y realización. 
      .col-md-6(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema1/28.png" data-aos="fade-left")

    p.mt-5(data-aos="fade-up") Según Pearce, Caltabiano y Moscardo (1986), citado por Araújo (2017), los viajeros tendrían una carrera en la cual los más inexpertos se volcaron a las necesidades de los niveles más básicos y los más experimentados a las necesidades de los niveles más altos. Sin embargo, hay que resaltar que los viajeros no navegan estrictamente pasando de un nivel al otro de la escalera, sino que algunos conjuntos de necesidades pueden tender a depender de la etapa de la carrera del viajero.

    .cont_tema1_8.mt-5.pb-5(style="position:relative")
      p(data-aos="fade-up" style="position:relative") Sabiendo lo anterior, en el siguiente esquema se aprecia el modelo de las necesidades turísticas de Pearce, Caltabiano y Moscardo (1986):
      figure.mt-5.col-md-8.m-auto
        img(src="@/assets/curso/tema1/30.png" data-aos="zoom-in-up" style="position:relative;display:inline")

    p.mt-2(data-aos="fade-up" style="position:relative") La importancia de identificar los tipos de necesidades que motivan los viajes de los turistas es de suma importancia para plantear las tipologías turísticas, ya que el sector turístico debe adaptarlas cada vez más, para complacer las múltiples necesidades de los turistas.

    .bloque-texto-a.color-primario.mt-5.bloque1(style="background-color:transparent;position:relative;z-index:1;")
      .row.m-0.align-items-center.justify-content-between(style="position:relative")
        .col-lg-8.p-5
          .bloque-texto-a__texto.p-4(style="position:relative")
            p.mb-0(data-aos="fade-up") En los años 60, cuando se produjo un auge inmenso del turismo de masas o fordismo, se pensaba en el turismo como una producción sistemática, donde lo que prevalecía era la producción en masa de bienes y servicios, siguiendo un patrón en donde el sujeto turista era lo menos importante, que permitió el desarrollo del turismo de sol y playa de forma desaforada. 
            p.mt-4(data-aos="fade-up") Luego de los años 80, cuando comienza a cambiar toda la concepción turística, se pone de manifiesto la teoría de las motivaciones turísticas, que da lugar a las tipologías turísticas.
        .col-lg-4.mb-4.mb-lg-0
          figure(style="position:relative")
            img(src="@/assets/curso/tema1/31.png" data-aos="fade-left" style="position:relative;bottom:-7px;")

    br
    br
    .cont_tema1_9.pb-5.mt-5(style="position:relative")
      span(data-aos="fade-up" style="padding:.7rem 2rem;background-color:#B7CEAC;font-size:20px;border-radius:50px;position:relative;font-weight:bold;") Tipología turística

      p.mt-5(data-aos="fade-up" style="position:relative") Las tipologías turísticas obedecen a una serie de motivaciones, que se han clasificado por diversos autores para entender mejor el sistema existente en la actualidad. #[br] El turismo, se cataloga de diferentes formas, de acuerdo con sus actividades o con su modalidad o por sus diferentes actividades, para un mejor entendimiento de todo el espectro; por ello, se analiza desde el punto de vista de las modalidades del turismo que son dos, así:

      .row.mt-5.col-md-10.m-auto
        .col-md-6.mb-4
          h4(data-aos="fade-up" style="position:relative") El turismo de masas o masivo
          figure
            img(src="@/assets/curso/tema1/35.png" data-aos="zoom-in-up")
          p.mt-3(data-aos="fade-up" style="position:relative") Es aquel ejercido por un gran número de personas, en destinos de sol y playa principalmente, o en cualquier otro destino. Es el tipo de turismo más criticado, porque al tomar el modelo fordista como paradigma, crece desaforadamente, sin tener cuidado con el medio ambiente ni con el destino, incluso es más económico para el turista, porque no es racionalmente planificado. 
          p.mt-4(data-aos="fade-up" style="position:relative") De acuerdo con la OMT (2005), citada por Ibáñez y Cabrera (2011), las actividades de este tipo de turismo se caracterizan por las visitas a playas y grandes destinos turísticos, o bien a ciudades coloniales o de atractivo cultural situadas regularmente en grandes ciudades.
        .col-md-6.mb-4
          h4(data-aos="fade-up" style="position:relative") El turismo alternativo
          figure
            img(src="@/assets/curso/tema1/36.png" data-aos="zoom-in-up")
          p.mt-3(data-aos="fade-up" style="position:relative") Es un conjunto de actividades alternativas que se presentan como las nuevas tendencias de la sociedad en general, en las que el turista busca un contacto cercano con la naturaleza, ya que dichas actividades se llevan a cabo de manera racional y con gran apego a la sustentabilidad.
          p.mt-4(data-aos="fade-up" style="position:relative") Estas actividades se enfatizan en un desarrollo económico en el que la comunidad reciba equitativamente los ingresos que se obtienen y se brinden más apoyos a la apertura de empresas locales, además de la conservación ambiental.
        p.mt-3(data-aos="fade-up" style="position:relative") Acorde a estas modalidades de turismo, existen unas categorías según las actividades turísticas realizadas, como se aprecia en la siguiente tabla:

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Tabla 2
      span #[em Modalidades, categorías y actividades turísticas]

    .tabla-a.color-acento-botones.mb-5 
      table
        caption(style="font-weight:500;background-color:#F8F8F8;") Nota. Tomada de Ibáñez y Cabrera (2011).
        thead(style="border:0")
          tr(style="background-color:#EB6F2D;")
            th.text-center.text-white(style="font-size:18px;border:0;") Modalidades
            th.text-center.text-white(style="font-size:18px;border:0;") Categorías
            th.text-center.text-white(style="font-size:18px;border:0;") Actividades
        tbody
          tr(style="background-color:#F8F8F8;")
            td.p-4.h5.text-center(style="border-left:0;" rowspan="4") Turismo masivo
          tr(style="background-color:#F8F8F8;")
            td.p-4 Turismo de sol y playa.
            td.p-4 Visitas aglomeradas en playas: esquí, paseos en moto y actividades acuáticas en complejos turísticos.
          tr(style="background-color:#F8F8F8;")
            td.p-4 Turismo cultural en grandes ciudades.
            td.p-4 Visitas a sitios históricos en grandes ciudades. #[br] Visitas a eventos musicales, concursos o ferias en grandes ciudades.
          tr(style="background-color:#F8F8F8;")
            td.p-4 Turismo a lugares de lujosa infraestructura.
            td.p-4 Disfrute y visitas a restaurantes lujosos y discotecas y casinos anexos.
          tr(style="background-color:#F8F8F8;")
            td.p-4.h5.text-center(style="border-left:0;" rowspan="4") Turismo alternativo
          tr(style="background-color:#F8F8F8;")
            td.p-4 Ecoturismo.
            td.p-4 Talleres de educación ambiental. #[br] Senderismo interpretativo. #[br] Observación sideral. #[br] Rescate de flora y fauna. #[br] Observación de flora y fauna. #[br] Observación de ecosistemas. #[br] Observación de aves. #[br] Observación geológica. #[br] Observación de atractivos naturales.
          tr(style="background-color:#F8F8F8;")
            td.p-4 Turismo de aventura.
            td.p-4 Montañismo. #[br] Rappel. #[br] Cabalgata. #[br] Escalada. #[br] Espeleología #[br] Ciclismo de montaña. #[br] Caminata.
          tr(style="background-color:#F8F8F8;")
            td.p-4 Turismo rural.
            td.p-4 Talleres artesanales. #[br] Etnoturismo.#[br] Ecoarqueología.#[br] Agroturismo.#[br] Preparación y uso de medicina tradicional.#[br] Talleres y disfrute gastronómico.#[br] Fotografía rural.#[br] Aprendizaje de dialectos.#[br] Vivencias místicas.





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.cont_intro1:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/intro1.svg)
  background-position: top
.cajon.color-primario:before
  background-color: #DAAF40
.cont_tema1_1:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema1/2.png)
  background-position: top
  background-repeat: no-repeat
.cont_tab_a
  background: url(../assets/curso/tema1/5.png)
.cont_tab_a h4, .cont_tab_a p
  color: #12263F !important
.cont_tab_a.tarjeta.color-acento-botones
  background-color: #ccd3ca
.tabs-a.color-primario .tabs-a__tab__selected
  background-color: #EB6F2D
  color: #ffffff
.tabs-a.color-primario .tabs-a__tab__selected:before
  background-color: #eb6f2d
.tabs-a.color-primario .tabs-a__tab:hover, .tabs-a.color-primario .tabs-a__tab:active, .tabs-a.color-primario .tabs-a__tab:focus
  background-color: #EB6F2D
  color: #fff
.tabs-a__tab
  background-color: #D8D8D8
.cont_tema1_2:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema1/6.png)
  background-position: top
  background-repeat: no-repeat
.cont_tema1_3:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema1/7.png)
  background-position: top
  background-repeat: no-repeat
.cont_tema1_4:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema1/9.svg)
  background-position: top
  background-repeat: no-repeat
.bloque1.bloque-texto-a.color-secundario
  background-color: #E8E8E8
.cont_tema1_5:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema1/18.svg)
  background-position: top
  background-repeat: no-repeat
.cont_tema1_6:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema1/20.svg)
  background-position: bottom
  background-repeat: no-repeat
.linea-tiempo-d__item--selected .tarjeta
  background-color: #D2DDCE
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #D2DDCE
  color: #12263f
.cont_tema1_7:before
  content: ''
  position: absolute
  width: 100%
  height: 90%
  background: url(../assets/curso/tema1/25.svg)
  background-position: bottom
  background-repeat: no-repeat
.cont_tema1_8:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema1/29.png)
  background-position: bottom
  background-repeat: no-repeat
.bloque1.bloque-texto-a.color-primario
  background-color: #FFB338
.bloque-texto-a.color-primario:before
  background: url(../assets/curso/tema1/32.png)
  background-size: cover
  background-repeat: no-repeat
  top: 25px
  bottom: -13px
.bloque-texto-a.color-primario:after
  width: 100%
  height: 93%
  content: ''
  position: absolute
  background-color: #FFB338
  top: 31px
  z-index: -1
.cont_tema1_9:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema1/34.svg)
  background-position: bottom
  background-repeat: no-repeat
.cont_magic1
  background: url(../assets/curso/tema1/37.png)
  background-size: 100% 75%
  background-position: bottom
  background-repeat: no-repeat
  background-position: 0px 90%
</style>
