<template>
    <login-background>
        <login-form :loading="loading" @submit="submit" />
    </login-background>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginBackground from './login-background.vue';
import LoginForm, { LoginFormModel } from './login-form.vue';

@Component({
    components: { LoginBackground, LoginForm },
})
export default class Login extends Vue {
    loading = false;

    form = {
        login: '',
        password: '',
    };

    submit(form: LoginFormModel) {
        console.log('submit', form);
    }
}
</script>

<style scoped lang="scss"></style>
