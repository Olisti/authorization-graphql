<template>
    <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <slot />
    </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class TransitionExpandHeight extends Vue {
    enter(element: any) {
        const width = getComputedStyle(element).width;
        element.style.width = width;
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.height = 'auto';
        const height = getComputedStyle(element).height;
        element.style.width = null;
        element.style.position = null;
        element.style.visibility = null;
        element.style.height = 0;
        this.forceRepaint(element);
        requestAnimationFrame(() => {
            element.style.height = height;
        });
    }

    forceRepaint(element: HTMLElement) {
        return getComputedStyle(element).height;
    }

    afterEnter(element: HTMLElement) {
        element.style.height = 'auto';
    }

    leave(element: HTMLElement) {
        const height = getComputedStyle(element).height;
        element.style.height = height;
        this.forceRepaint(element);
        requestAnimationFrame(() => {
            element.style.height = '0';
        });
    }
}
</script>

<style lang="scss" scope>
.expand-enter-active,
.expand-leave-active {
    transition: height 300ms ease-in-out;
    overflow: hidden;
}

.expand-enter,
.expand-leave-to {
    height: 0;
}
</style>
