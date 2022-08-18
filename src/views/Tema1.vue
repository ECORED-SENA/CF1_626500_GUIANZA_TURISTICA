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
        p(data-aos="fade-up" style="position:relative") Debido a la importancia de la actividad turística en el mundo, es necesario entender bien el abordando cualquier tópico relacionado con el turismo en los diferentes destinos, sin que se pierdan las características del mismo, más bien resaltando los productos turísticos existentes, para que los turistas se lleven la mejor experiencia y deseen regresar.
        p.mt-4(data-aos="fade-up" style="position:relative") Esto explica la importancia de la función del guía turístico, de hecho, es una gran responsabilidad y de allí la relevancia de su formación y profesionalización para que cada día sea mejor el servicio que se le preste a visitantes y turistas.
        .cajon.color-primario.p-5.mt-4(style="background-color:#FFD667;box-shadow:0px 0px 20px rgba(0,0,0,.14);")
          p.mb-0(data-aos="fade-up" style="position:relative") En este componente se define cómo ha sido la evolución turística, qué es turismo, la teoría de la motivación y las tipologías turísticas, producto de dichas motivaciones y cómo se desarrolla la morfología turística; se incluye aspectos del guionaje y la profesión de guianza.

    Separador

    .titulo-segundo
      h2#t_1_1 1.1 Reseña de la evolución turística

    .cont_tema1_1(style="position:relative")
      p(data-aos="fade-up" style="position:relative") Ahora se verá un recorrido de la evolución del turismo y la importancia de las prácticas de guianza a través de la historia; por ello, en el siguiente video se hará un recorrido por los sucesos más importantes:
      figure.mt-5(style="position:relative")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4(style="position:relative")
          h4.mb-0(data-aos="fade-up") Tres hechos que lo cambiaron todo… #[br] #[br]
          p.mt-4(data-aos="fade-up") Hubo tres hechos durante el Renacimiento que dieron lugar a cambios ideológicos, promovieron la libertad y la relación del ser humano con la naturaleza y que, además, fueron fundamentales para que luego se desarrollara la industria turística. #[br] #[br]
          p.mt-4(data-aos="fade-up") En realidad, estos tres hechos, fueron excelente referente para iniciar al turismo a partir del inicio del desligue de la Iglesia como fuente de todo, a la consideración de que el ser humano puede pensar libremente y ser bueno y la lucha del mismo por sus derechos fundamentales.

      p.mt-5(data-aos="fade-up" style="position:relative") De acuerdo con Jiménez (1990), los tres hechos son los siguientes:

      .row.mt-5
        .col-md-9.mb-4(style="place-self:center")
          TabsA.color-primario(style="position:relative")
            .tarjeta.color-acento-botones.p-5.cont_tab_a(titulo="La reforma protestante" style="position:relative")
              h4 La reforma protestante
              p.mt-4 La Reforma Protestante iniciada por Martín Lutero en 1517, quien habla sobre el papel que la Iglesia católica estaba cumpliendo en la sociedad, cuestionó la relación del ser humano con la religión, denotando nuevos contextos del hombre libre.
            .tarjeta.color-acento-botones.p-5.cont_tab_a(titulo="Libro <em>El Emilio o la educación</em>" style="position:relative")
              h4 Libro #[em(style="color:#12263F;") El Emilio o la educación]
              p.mt-4 La publicación del libro El Emilio o la educación por parte de Jean-Jacques Rousseau en 1762, es un tratado filosófico que sostiene que el ser humanoes bueno por naturaleza, mientras participa de una sociedad inevitablemente corrupta.
            .tarjeta.color-acento-botones.p-5.cont_tab_a(titulo="La Revolución francesa" style="position:relative")
              h4 La Revolución francesa
              p.mt-4 La Revolución francesa ocurrida en 1789, que cambió la pirámide social de la época, poniendo a los burgueses a la cabeza del Estado, ostentando poder político y económico.
        .col-md-3(style="place-self:center")
          figure.text-center
            img(src="@/assets/curso/tema1/4.png" data-aos="fade-left" style="display:inline;position:relative")

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
</style>
