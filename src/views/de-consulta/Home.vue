  
<template>
  <div class="home">
    <navigation-bar v-on:buscar="filtrar"></navigation-bar>
    <div id="titulo">Provincias de la Republica Argentinas</div>

    <div class="row container-fluid">
      <div v-for="prov in this.provsData" :key="prov.abreviatura" class="col-3">
        <provincia :provParam="prov"></provincia>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/shared/Navigation.vue";
import Provincia from "@/components/Provincia.vue";
export default {
  name: "Home",
  components: {
    "navigation-bar": Navigation,
    provincia: Provincia,
  },
  mounted() {
    this.getProvincias();
  }, //mounted()
  data() {
    return {
      provsData: [],
    };
  }, //data()
  methods: {
    //acá se definen los métodos que pueden ser llamados en cualquier momento
    async getProvincias() {
      const  param= this.$route.params.num;
       const res = await fetch("/lista_provincias.json");
      const resJson = await res.json();
   
if(param != null){
 alert('filtrando por poblacion')
             this.provsData = resJson.filter((provincia)=>
              Number( provincia.poblacion) >=param           );
        
}else{
  if (window.location.href.includes("con-puerto")) {
      alert('filtrando por puertos')
    for (let prov of resJson) {
          if (prov.tienePuerto === "Y") {
            this.provsData.push(prov);
          }
        }
   }else{
  alert('no finltrando')
        this.provsData = resJson;
   }     
}
 
    },
  }, //methods:
};
</script>

<style>
#titulo {
  /*(tipografía Verdana, tamaño 18px, en negritas, color verde)*/
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: green;
  text-align: center;
}
</style>