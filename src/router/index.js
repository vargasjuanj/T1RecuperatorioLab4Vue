import Vue from 'vue'
import VueRouter from 'vue-router'
import GrillaAlumnos from '../views/GrillaAlumnos.vue'
import DetalleAlumno from '../views/DetalleAlumno.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'GrillaAlumnos',
    component: GrillaAlumnos
  },
  {
    path: '/grilla-alumnos/:legajo',
    name: 'GrillaAlumnos',
    component: GrillaAlumnos
  },
  {
    path: '/detalle-alumno/:legajo',
    name: 'DetalleAlumno',
    component: DetalleAlumno
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
