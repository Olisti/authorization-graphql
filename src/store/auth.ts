import { Module } from 'vuex';
import { RootState } from '@/store';
import router from '@/router';
import { apolloLogin, apolloClient, apolloLogout } from '../apollo/vue-apollo';
import { GQLResponse } from '@/types/response';

export interface authModel {
    login: string;
    password: string;
}

export interface State {
    loading: boolean;
    error: boolean;
}

export default {
    namespaced: true,
    state: {
        loading: false,
        error: false
    },
    getters: {
        LOADING: (state: State) => state.loading,
        ERROR: (state: State) => state.error
    },
    actions: {
        LOGIN: async ({ commit }, payload: authModel) => {
            const { login, password } = payload;
            commit('SET_LOADING', true);
            await apolloClient
                .mutate({
                    mutation: require('../apollo/mutations/login.gql'),
                    variables: { login, password }
                })
                .then((data: GQLResponse) => {
                    commit('SET_ERROR', false);
                    const token = data.data.auth;
                    apolloLogin(apolloClient, token);
                    router.push({ name: 'profile-info' });
                })
                .catch(() => commit('SET_ERROR', true));
            commit('SET_LOADING', false);
        },
        LOGOUT: async ({ commit }) => {
            apolloLogout(apolloClient);
            commit('LOGOUT');
        }
    },
    mutations: {
        LOGOUT: state => {
            state.error = false;
            state.loading = false;
        },
        SET_LOADING: (state, payload: boolean) => {
            state.loading = payload;
        },
        SET_ERROR: (state, payload: boolean) => {
            state.error = payload;
        }
    }
} as Module<State, RootState>;
