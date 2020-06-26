<template>
  <div>
    <form>
      <b-form-input
        type="number"
        v-model="nro1"
        placeholder="Nro 1"
        @keyup.enter="sumarNumeros"
      ></b-form-input>
      <b-form-input
        type="number"
        v-model="nro2"
        placeholder="Nro 2"
        @keyup.enter="sumarNumeros"
      ></b-form-input>
      <b-button @click="sumarNumeros">Button</b-button>
    </form>
    <div class="mt-2">Value: {{ nro1 }}</div>
    <div class="mt-2">Value: {{ nro2 }}</div>
    <div id="txtResultado"></div>
  </div>
</template>

<script>
import axios from "axios";

//Eventos v-on (en su forma abreviada @)
export default {
  data() {
    return {
      nro1: "",
      nro2: ""
    };
  },
  methods: {
    sumarNumeros() {
      //npm install axios
      axios
        .get("http://localhost:8081/WebAppServer/RestoServlet", {
          params: {
            action: "sumar",
            nro1: this.nro1,
            nro2: this.nro2
          }
        })
        .then(response => {
          console.log(JSON.stringify(response));
          console.log("El resultado es " + response.data);
          document.getElementById("txtResultado").innerHTML =
            "El resultado es <b>" + response.data + "</b>";
        })
        .catch(error => {
          console.log("Error");
          console.log(error);
        });
    }
  }
};
</script>

<style lang=""></style>
