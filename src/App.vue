<template>
    <div id="app" class="app">
        <app-header class="app__header" v-if="!isPublicPage"></app-header>
        <div class="app__content wrapper" :class="{ 'app__content--fullscreen': isPublicPage }">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import AppHeader from './components/app-header.vue';

@Component({ components: { AppHeader } })
export default class App extends Vue {
    get isPublicPage(): boolean {
        return !!this.$route.meta.isPublic;
    }
}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
$header-height: 60px;
.app {
    height: 100%;
    &__header {
        height: $header-height;
    }
    &__content {
        height: calc(100% - #{$header-height});
        padding-top: 40px;
        padding-bottom: 20px;
        &--fullscreen {
            height: 100%;
        }
    }
}
</style>
