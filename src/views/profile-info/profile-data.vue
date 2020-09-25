<template>
    <div class="info" v-loading="loading">
        <div class="info__title">Login</div>
        <div class="info__data">{{ user.login }}</div>
        <div class="info__title">Name</div>
        <div class="info__data">{{ user.name }}</div>
        <div class="info__title">Email</div>
        <div class="info__data">{{ user.email }}</div>
    </div>
</template> 

<script lang="ts">
import { User } from '@/types/user';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ProfileData extends Vue {
    @Prop() loading!: boolean;
    @Prop() user!: User;
}
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
