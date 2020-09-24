import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

import './styles/global.scss';

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
