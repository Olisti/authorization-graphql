<template>
    <div class="edit">
        <profile-form />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfileForm from './profile-form.vue';

@Component({
    components: { ProfileForm },
})
export default class ProfileEdit extends Vue {}
</script>

<style scoped lang="scss"></style>
