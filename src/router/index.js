import Vue from 'vue'
import Router from 'vue-router'

import Lines from '@/pages/Lines'
import Files from '@/pages/Files'
import Login from '@/pages/Login'
import User from '@/pages/User'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index,
        }, 
        {
            path: '/:project',
            component: Files,
        }, 
        {
            path: '/:project/:file',
            component: Lines,
        },
        // {
        //     path: '/user',
        //     name: 'User',
        //     component: Index,
        // }, {
        //     path: '/setting',
        //     name: 'Setting',
        //     component: Index,
        // }, {
        //     path: '/statics',
        //     name: 'statics',
        //     component: Index,
        // }, {
        //     path: '/about',
        //     name: 'about',
        //     component: Index,
        // }, {
        //     path: '/logout',
        //     name: 'logout',
        //     component: Index,
        // }
    ]
})
