import Vue from 'vue'
import Router from 'vue-router'
import inicio from './components/inicio.vue'
import endereco from './components/endereco/endereco.vue'
import complemento from './components/endereco/complemento.vue'

import usuario from './components/usuario/usuario.vue'
import usuarioLista from './components/usuario/usuarioLista.vue'
import usuarioDetalhe from './components/usuario/usuarioDetalhe.vue'
import usuarioEditar from './components/usuario/usuarioEditar.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            component: inicio
        },
        {
            path:'/usuario',
            component: usuario,
            props: true,
            children: [
                {path: '', component: usuarioLista},
                {path: ':id', component: usuarioDetalhe, props: true},
                {path: ':id/editar', component: usuarioEditar, props: true}
            ]
        },
        {
            path:'/endereco',
            component: endereco
        },
        {
            path:'/complemento',
            component: complemento
        }
    ]
})