<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">{{tituloEnMayusculas}}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <a href="/" class="nav-link"> Home </a>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
          <h6>Legajo</h6>
            <b-form-input size="sm" class="mr-sm-2" type="number" v-model="legajo"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0"  v-on:click="buscar">
              Buscar
            </b-button>
          </b-nav-form>

               <b-nav-form>
          <h6>Alumno</h6>
            <b-form-input size="sm" class="mr-sm-2" type="number" v-model="nombre"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0"  v-on:click="buscar">
              Buscar 
            </b-button>
 <a :href="'/detalle-alumno/'+1">Mejor Alumno</a>
          </b-nav-form>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'MenuSuperiorOpciones',
    components: {
    },//components

    mounted(){
    },//mounted()

    data() {
      return {
      titulo:'alumnos', //para propiedad computada de ejemplo
      legajo:null,
      nombre:''
      }
    },//data()

    methods: {
      buscar(){

        window.location.href = "/grilla-alumnos/"+this.legajo
       console.log(this.legajo)
        //this.$emit('buscar', { busqueda: this.busqueda })
      }//buscar
    }//methods:
    ,
    computed:{

      //Se ejecuta solo cuando cambia titulo, las puedo usar como funcion poniendole los parentesis, pero como funciones se ejecutan mas veces
      tituloEnMayusculas: function(){ //Ejemplo de propiedad computada, transformando siempre titulo a mayusculas. Siempre estará observando la propiedad titulo y cambiandola, cuando cambie su valor
    return this.titulo.toUpperCase()
      }
    
      
    }
  }//export default
</script>