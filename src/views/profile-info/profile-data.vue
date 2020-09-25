<template>
    <div class="info">
        <div class="info__title">Login</div>
        <div class="info__data">User</div>
        <div class="info__title">Name</div>
        <div class="info__data">User</div>
        <div class="info__title">Email</div>
        <div class="info__data">user@user.com</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ProfileData extends Vue {}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
.info {
    display: grid;
    grid-template-columns: 80px auto;
    grid-template-rows: 40px 40px 40px;
    margin: auto 0;
    &__title {
        align-self: center;
        color: $color-main-40;
    }
    &__data {
        align-self: center;
    }
}
</style>
