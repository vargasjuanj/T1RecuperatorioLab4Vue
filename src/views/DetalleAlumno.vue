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
        <ul v-for="(nota,index) in alumnoEncontrado.notas" :key="index">
        <li >{{nota}}</li>
        </ul></td>
      </tr>
<tr>    
        <th>Promedio:</th>
        <td>{{promedio}}</td>
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

  mounted() {
    this.getAlumnoXLegajo();
  }, //mounted()

  data() {
    return {
      alumnoEncontrado:null,
      promedio:0
    };
  }, //data()

  methods: {
    async getAlumnoXLegajo() {
      const parametroLegajo = Number(this.$route.params.legajo);
      const res = await fetch("/alumnos.json");
      const resJson = await res.json();

      if(Number(parametroLegajo)==1){
alert('mejor promedio')
      }else{
      this.alumnoEncontrado = await resJson.find(
        (alumno) => Number(alumno.legajo) == Number(parametroLegajo)
      );
this.promedio = this.alumnoEncontrado.notas.reduce((anterior,actual)=>{
    return parseFloat(anterior+actual);
})

this.promedio=this.promedio/this.alumnoEncontrado.notas.length;
      }


    },

    async getPromedio(){
this.promedio=2
    }
  }, //methods:
}; //export default
</script>

<style>
/*Los estilos en CSS (o LESS o lo que sea)*/
</style>
