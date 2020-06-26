<template>
  <div class="">
    <menu-superior></menu-superior>

    <table style="width:500px;" class="table table-bordered">
        <tr>
        <td>
          <img
            :src="'/img/' + alumnoEncontrado.foto"
            class="bandera"
            alt="imagen"
          />
        </td>
           <td><h1 :class="[alumnoEncontrado.estaActivo? 'text-success' : 'text-danger']">{{ alumnoEncontrado.alumno }}</h1></td>
      </tr>

      <tr>
        <th>Legajo:</th>
        <td>{{ alumnoEncontrado.legajo}}</td>
      </tr>
        <tr>
        <th>Carrera:</th>
        <td>{{ alumnoEncontrado.carrera }}</td>
      </tr>

         <tr>
        <th>Está activo:</th>
        <td>{{ alumnoEncontrado.estaActivo? "Si" : "No" }}</td>
      </tr>
<tr>    
        <th>Fecha Nacimiento:</th>
        <td>{{ alumnoEncontrado.fechaNacimiento }}</td>
      </tr>

       <tr>
        <th>Notas:</th>
        <td>
        <ul >
        <li v-for="(nota,index) in alumnoEncontrado.notas" :key="index" >{{nota}}</li>
        </ul></td>
      </tr>
<tr>    
        <th>Promedio:</th>
        <td>{{getPromedio(alumnoEncontrado.notas)}}</td>
      </tr>
      <tr>
        <td>
          <a href="javascript:history.go(-1)" class="btn btn-secondary">VOLVER</a>
        </td>
        <td></td>
      </tr>
    </table>
  </div>

</template>

<script>
import MenuSuperiorOpciones from "@/components/shared/MenuSuperiorOpciones.vue";
 export default {
  name: "DetalleAlumno",
  props: [],
  components: {
    "menu-superior": MenuSuperiorOpciones,
  }, //components

  async mounted() {  
this.parametroLegajo = this.$route.params.legajo;
     //Es necesario el await aca, sino alumnoEncontrado va a ser undefined, primero debe obtener la data y despues buscar
  await this.obtenerData()
if(this.parametroLegajo==1){
  alert('merjor promedio')
}else{
  this.getAlumnoXLegajo();

}
     
 
  }, //mounted()

  data() {
    return {
      parametroLegajo:null,
      alumnos:[],
      alumnoEncontrado:null
    };
  }, //data()

  methods: {
    async obtenerData(){
   const res = await fetch("/alumnos.json");
   this.alumnos = await res.json();

    },
   async getAlumnoXLegajo() {
      this.alumnoEncontrado = await this.alumnos.find(
        alumno => alumno.legajo == this.parametroLegajo
      );
    },
//Elegir cuando sea necesario asyn await, sino va a mostarr object object por ejemplo al usarlo en el metodo generar promedio
// La Conversión a Number(num) es solo necesaria si el dato del json es un string. Parsefloat() no es necesaria en este caso tampoco
     getPromedio(notas){
     let promedio = notas.reduce((anterior,actual)=>
   anterior+actual
)

promedio=promedio/notas.length;

return promedio;
    }
  }, //methods:
}; //export default
</script>

<style>
/*Los estilos en CSS (o LESS o lo que sea)*/
</style>
