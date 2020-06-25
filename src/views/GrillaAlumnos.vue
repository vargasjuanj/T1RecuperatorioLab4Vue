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
    <td>{{getPromedio(alumno)}}</td>
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

  mounted( ) {
this.getAlumnos()
  }, //mounted()

  data() {
    return {
              alumnos: [],
              promedio:0,
              mejor:0
    };
  }, //data()

  methods: {
          async getAlumnos() {
                    const  param= this.$route.params.legajo;
          const res = await fetch("/alumnos.json");
      const resJson = await res.json();
if(param != null){

 alert('filtrando por legajo')
             this.alumnos = resJson.filter((alumno)=>{

             
            return  Number( alumno.legajo) ===Number(param)  
                      }         );
        
}else{
    this.alumnos=resJson;
}

  
  } ,
 getPromedio(alumnoEncontrado){
     let promedio = alumnoEncontrado.notas.reduce((anterior,actual)=>{
    return parseFloat(anterior+actual);
}

)

promedio= promedio/alumnoEncontrado.notas.length;
if(Number(this.mejor)<Number(promedio)){
    this.mejor=promedio;
}
return promedio;
  }
  //methods:
  }, //methods:
};
</script>



