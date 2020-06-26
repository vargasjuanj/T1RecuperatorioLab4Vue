import Vue from 'vue'
import VueRouter from 'vue-router'
import GrillaAlumnos from '../views/GrillaAlumnos.vue'
Vue.use(VueRouter)

  const routes = [
  {//carga inmediata, eager
    path: '/',
    name: 'GrillaAlumnos',
    component: GrillaAlumnos,
    
  },
  {
    path: '/grilla-alumnos/:legajo',
    name: 'GrillaAlumnos',
    component: GrillaAlumnos
  },
  {
    path: '/grilla-alumnos/por-nombre/:nombre',  //para que no se choquen los dos parametros se extiende la ruta pra poder usarlo con windows.includes location
    name: 'GrillaAlumnos',
    component: GrillaAlumnos
  },
  { //carga lazy o perezosa del componente, solo cuando se requiere
    path: '/detalle-alumno/:legajo',
    name: 'DetalleAlumno',
    component: () => import('../views/DetalleAlumno.vue')
  }
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
