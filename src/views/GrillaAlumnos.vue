<template>
<div>
<menu-superior></menu-superior>
 <table class="table">
  <thead>
    <tr>
      <th scope="col">Alumno</th>
      <th scope="col">Legajo</th>
      <th scope="col">Fecha Nacimiento</th>
      <th scope="col">Promedio Notas</th>
     <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="alumno in this.alumnos" :key="alumno.legajo">
    
      <td>{{alumno.alumno}}</td>
      <td>{{alumno.legajo}}</td>
      <td>{{alumno.fechaNacimiento}}</td>
    <td>{{getPromedio(alumno.notas)}}</td>
       <td>
           <router-link :to="'/detalle-alumno/' + alumno.legajo" >VER DETALLES</router-link>

       </td>
    </tr>
  </tbody>
</table>
</div>
 
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'
import MenuSuperiorOpciones from "@/components/shared/MenuSuperiorOpciones.vue";

export default {
  name: "GrillaAlumnos",
  props: [],
  components: {
          "menu-superior": MenuSuperiorOpciones,

  }, //components

  async mounted( ) {
 this.parametroLegajo= this.$route.params.legajo;
 await this.getAlumnos()
if(this.parametroLegajo != null){
  alert('por legajo')
await this.filtrarPorLegajo()

}
  }, //mounted()
  data() {
    return {
      parametroLegajo:null,
              alumnos: []
             // mejor:0
    };
  }, //data()

  methods: {
   async getAlumnos(){
     const res = await fetch("/alumnos.json")
      this.alumnos= await res.json()
    },
     async  filtrarPorLegajo(){
 this.alumnos = await this.alumnos.filter(alumno=>        
   alumno.legajo ==this.parametroLegajo
   );  
 }               
,
 getPromedio(notas){
     let promedio =  notas.reduce((anterior,actual)=>
 anterior+actual
 )
promedio= promedio/notas.length
//if(Number(this.mejor)<Number(promedio)){
  //  this.mejor=promedio;
//}
return promedio
  }
  //methods:
  }, //methods:
};
</script>



