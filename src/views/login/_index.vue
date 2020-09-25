<template>
    <login-background>
        <login-form :loading="loading" :error="error" @submit="login" />
    </login-background>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import LoginBackground from './login-background.vue';
import LoginForm from './login-form.vue';

@Component({
    components: { LoginBackground, LoginForm },
    computed: {
        ...mapGetters({
            loading: 'auth/LOADING',
            error: 'auth/ERROR',
        }),
    },
    methods: {
        ...mapActions({
            login: 'auth/LOGIN',
        }),
    },
})
export default class Login extends Vue {
    mounted() {
        this.$store.dispatch('auth/LOGOUT');
    }
}
</script>

<style scoped lang="scss"></style>
