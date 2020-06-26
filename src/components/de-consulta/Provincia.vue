<template>
  <div class="">
    <table style="weight:15px" class="tabla-provincia table table-bordered">
      <tr>
        <td style="color:green">
          {{ provParam.provincia }}
        </td>
      </tr>
      <tr>
        <td>
          <img
            :src="'/img/' + provParam.bandera"
            class="bandera"
            alt="imagen"
          />
        </td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Capital - {{ provParam.capital }}</td>
      </tr>
      <tr>
        <td>
          <router-link :to="'/detalle-provincia/' + provParam.abreviatura" class="btn btn-secondary">VER MAS</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "Provincia",
  props: ["provParam"],
  components: {}, //components
  mounted() {}, //mounted()
  data() {
    return {};
  }, //data()
  methods: {}, //methods:
}; //export default
</script>

<style>
.tabla-provincia{
    align-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
    margin-right:auto
}
</style>