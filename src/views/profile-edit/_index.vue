<template>
    <div class="edit">
        <profile-form :user="user" :loading="loading" @save="updateUser" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import ProfileForm from './profile-form.vue';

@Component({
    components: { ProfileForm },
    computed: {
        ...mapGetters({
            user: 'user/USER',
            loading: 'user/LOADING',
        }),
    },
    methods: {
        ...mapActions({
            updateUser: 'user/UPDATE',
        }),
    },
})
export default class ProfileEdit extends Vue {
    mounted() {
        this.$store.dispatch('user/GET');
    }
}
</script>

<style scoped lang="scss"></style>
