<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cont_intro1(style="position:relative")
      p(data-aos="fade-up" style="position:relative;") El guionaje es tan antiguo como el turismo y sus términos han cambiado a lo largo del tiempo, así esta actividad se ha tenido que ir adaptando a los cambios modernos, sin perder su esencia y su importancia, por lo que se invita a comenzar esta nueva aventura, viendo el siguiente video:
      
      figure.mt-5(style="position:relative")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/5z6zoqopOss" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
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
</style>
