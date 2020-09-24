<template>
    <div class="auth">
        <div class="auth__gradient auth__gradient--primary" />
        <div class="auth__gradient auth__gradient--secondary" />
        <el-card class="auth__card">
            <div class="auth__title ol-title">Authorization</div>
            <slot />
        </el-card>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class LoginBackground extends Vue {}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
.auth {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    &__gradient {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        &--primary {
            background: linear-gradient(200deg, rgba($color-primary, 0.6) 0%, rgba(255, 255, 255, 0) 55%);
        }
        &--secondary {
            background: linear-gradient(140deg, rgba($color-secondary, 0.6) 0%, rgba(255, 255, 255, 0) 55%);
        }
    }
    &__card {
        min-width: 320px;
        max-width: 400px;
        z-index: 10;
    }
    &__title {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 300;
        letter-spacing: 1px;
        color: $color-main-30;
    }
}
</style>
