import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

import './styles/global.scss';

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import { createProvider } from './apollo/vue-apollo';
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    apolloProvider: createProvider(),
    render: h => h(App)
}).$mount('#app');
