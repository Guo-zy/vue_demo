import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import Router from 'vue-router';

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');