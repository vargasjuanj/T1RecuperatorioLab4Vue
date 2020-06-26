<template>
  <div class="">
    <navigation-bar></navigation-bar>
    <div class="container-fluid">
      <h2 class="titulo">República Argentina</h2>
      <img src="/img/argentina.png" alt="argentina" />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/shared/Navigation.vue";
export default {
  name: "Nombre",
  props: ["platoParam"],
  components: {
    "navigation-bar": Navigation,
  }, //components
  mounted() {}, //mounted()
  data() {
    return {};
  }, //data()
  methods: {}, //methods:
}; //export default
</script>

<style>
/*Los estilos en CSS (o LESS o lo que sea)*/
.titulo{
    color: blue;
    font-weight: bold;
}
</style>