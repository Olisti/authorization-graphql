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
            label="Name"
            prop="name"
            :rules="[{ required: true, message: 'The name field is required', trigger: 'blur' }]"
        >
            <el-input v-model="form.name" type="text"></el-input>
        </el-form-item>
        <el-form-item
            label="Email"
            prop="email"
            :rules="[
                { required: true, message: 'The email field is required', trigger: 'blur' },
                { type: 'email', message: 'The email field must be a valid email', trigger: ['blur', 'change'] },
            ]"
        >
            <el-input v-model="form.email" type="email"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button class="form__submit" type="primary" :loading="loading" @click="save()">Save changes</el-button>
            <router-link class="form__cancel" to="/profile">
                <el-button>Cancel</el-button>
            </router-link>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { ElForm } from 'element-ui/types/form';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ProfileForm extends Vue {
    loading = false;
    form = {
        name: '',
        email: '',
    };
    save() {
        (this.$refs['form'] as ElForm).validate((valid: boolean) => {
            if (valid) this.$emit('save', this.form);
            else return false;
        });
    }
}
</script>

<style scoped lang="scss">
.form {
    max-width: 400px;
    &__submit {
        margin-top: 20px;
    }
    &__cancel {
        margin-left: 20px;
    }
}
</style>
