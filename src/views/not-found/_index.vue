<template>
    <h1>404</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class PageNotFound extends Vue {}
</script>

<style scoped lang="scss">
@import '~@/styles/variables';
h1 {
    text-align: center;
    font-size: 240px;
    letter-spacing: -10px;
    color: $color-secondary;
    background: -webkit-linear-gradient(240deg, rgba($color-primary, 0.8), rgba($color-secondary, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
