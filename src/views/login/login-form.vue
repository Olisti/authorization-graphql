<template>
    <el-form
        class="form"
        :model="form"
        ref="form"
        label-width="120px"
        label-position="top"
        :hide-required-asterisk="true"
    >
        <el-form-item
            label="Login"
            prop="login"
            :rules="[{ required: true, message: 'The login field is required', trigger: 'blur' }]"
        >
            <el-input v-model="form.login" type="text"></el-input>
        </el-form-item>
        <el-form-item
            label="Password"
            prop="password"
            :rules="[{ required: true, message: 'The password field is required', trigger: 'blur' }]"
        >
            <el-input v-model="form.password" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-button class="form__submit" type="primary" :loading="loading" @click="submit()">Log In</el-button>
        <transition-expand-height>
            <div v-if="error" class="form__error">
                <el-alert title="You are not authenticated" type="error" :closable="false" show-icon> </el-alert>
            </div>
        </transition-expand-height>
    </el-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ElForm } from 'element-ui/types/form';
import TransitionExpandHeight from '@/components/transitions/expand-height.vue';

export interface LoginFormModel {
    login: string;
    password: string;
}

@Component({
    components: { TransitionExpandHeight }
})
export default class LoginForm extends Vue {
    @Prop() loading!: boolean;
    error = false; //FIXME: в стор

    form: LoginFormModel = {
        login: '',
        password: ''
    };

    submit() {
        this.error = true;
        (this.$refs['form'] as ElForm).validate((valid: boolean) => {
            if (valid) this.$emit('submit', this.form);
            else return false;
        });
    }
}
</script>

<style scoped lang="scss">
.form {
    &__submit {
        margin-top: 20px;
        width: 100%;
    }
    &__error {
        margin-top: 20px;
    }
}
</style>
