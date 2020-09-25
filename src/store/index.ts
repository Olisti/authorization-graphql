import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import profile from './profile';

Vue.use(Vuex);

export interface RootState {}

export default new Vuex.Store({
    modules: { auth, profile }
});
