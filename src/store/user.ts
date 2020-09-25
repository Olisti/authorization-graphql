import { Module } from 'vuex';
import { RootState } from '@/store';
import router from '@/router';
import { apolloClient } from '../apollo/vue-apollo';
import { GQLResponse } from '@/types/response';
import { User } from '@/types/user';
import { Notification } from 'element-ui';

export interface State {
    user: User;
    loading: boolean;
}

export default {
    namespaced: true,
    state: {
        user: {} as User,
        loading: false
    },
    getters: {
        USER: (state: State) => state.user,
        LOADING: (state: State) => state.loading
    },
    actions: {
        GET: async ({ commit }) => {
            commit('SET_LOADING', true);
            await apolloClient
                .mutate({ mutation: require('../apollo/queries/user.gql') })
                .then((data: GQLResponse) => commit('SET_USER', data.data.currentUser))
                .catch(() => onError());
            commit('SET_LOADING', false);
        },
        UPDATE: async ({ commit, state }, payload: Partial<User>) => {
            commit('SET_LOADING', true);
            await apolloClient
                .mutate({
                    mutation: require('../apollo/mutations/updateUser.gql'),
                    variables: { ...payload }
                })
                .then(() => {
                    Notification.success({
                        title: 'Success',
                        message: `User ${payload.name} updated successfully`
                    });
                    commit('SET_USER', { ...state.user, ...payload });
                    router.push({ name: 'profile-info' });
                })
                .catch(() => onError());
            commit('SET_LOADING', false);
        }
    },
    mutations: {
        SET_USER: (state, payload: User) => {
            state.user = payload;
        },
        SET_LOADING: (state, payload: boolean) => {
            state.loading = payload;
        }
    }
} as Module<State, RootState>;

function onError() {
    Notification.error({
        title: 'Error',
        message: 'Something went wrong'
    });
    router.push({ name: 'login' });
}
