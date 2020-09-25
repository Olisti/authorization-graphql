<template>
    <header class="header">
        <div class="header__content wrapper">
            <div class="header__title">{{ navigationTitle }}</div>
            <div class="header__user">
                <i class="el-icon-user-solid"></i>
                {{ userName }}
            </div>
            <router-link class="header__logout" to="/login">Log Out</router-link>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
    computed: {
        ...mapGetters({
            userName: 'user/USER_NAME',
        }),
    },
})
export default class AppHeader extends Vue {
    get navigationTitle() {
        return this.$route.meta.title;
    }
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
.header {
    background: linear-gradient(200deg, rgba($color-primary, 0.5) 0%, rgba($color-secondary, 0.5) 55%);
    &__content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: 100%;
    }
    &__title {
        flex: 1;
        min-width: 200px;
        margin-right: 10px;
        text-transform: uppercase;
        font-size: 18px;
    }
    &__logout {
        margin-left: 30px;
        color: $color-main;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
