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
this.parametroNombre= this.$route.params.nombre;

if(this.parametroLegajo != null){ //comparandolo con cero no estaria funcionando, por mas q se cambie en menuopciones y end ata
  alert('por legajo')
this.filtrarPorLegajo()
}else if(window.location.href.includes("por-nombre")) {
      alert('filtrando por nombres')
this.filtrarPorCoincidenciasDeNombres ()
   }else{
     this.getAlumnos()
   }

  }, //mounted()
  data() {
    return {
      parametroLegajo:null,
      parametroNombre:null,
              alumnos: []
             // mejor:0
    };
  }, //data()

  methods: {
   async getAlumnos(){
     const res = await fetch("/alumnos.json")
      this.alumnos= await res.json()
    },             

 getPromedio(notas){
     let promedio =  notas.reduce((anterior,actual)=>
 anterior+actual
 )
promedio= promedio/notas.length
//if(Number(this.mejor)<Number(promedio)){
  //  this.mejor=promedio;
//}
return promedio
  },
       async  filtrarPorLegajo(){
          await this.getAlumnos()
 this.alumnos = await this.alumnos.filter(alumno=>        
   alumno.legajo ==this.parametroLegajo
   );  
 }  
  ,
  async filtrarPorCoincidenciasDeNombres (){
 await this.getAlumnos()
    this.alumnos= await this.alumnos.filter(alumno=>
        alumno.alumno.toLowerCase().includes(this.parametroNombre.toLowerCase())
    )

    

  }
  //methods:
  }, //methods:
};
</script>



