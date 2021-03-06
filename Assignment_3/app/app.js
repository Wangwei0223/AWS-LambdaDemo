import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue'
import axios from 'axios';
import test from './components/test.vue'
import cognito from './components/cognito.vue';
import chatBot from './components/chatBot.vue';
import lex from './components/lex.vue';
import search from './components/search.vue';
import testvoice from './components/testvoice.vue';

Vue.prototype.$axios = axios;
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/test', component: test },
        { path: '/cognito', component: cognito },
        { path: '/chatBot', component: chatBot },
        { path: '/lex', component: lex },
        { path: '/search', component: search },
        { path: '/testvoice', component: testvoice },
        { path: '/', redirect: '/search' }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
