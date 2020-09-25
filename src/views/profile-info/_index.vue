<template>
    <div class="profile">
        <profile-avatar />
        <profile-data :user="user" :loading="loading" class="profile__info" />
        <div class="profile__tools">
            <router-link to="/profile/edit">
                <el-button icon="el-icon-edit" type="info">Edit Profile</el-button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import ProfileAvatar from './profile-avatar.vue';
import ProfileData from './profile-data.vue';

@Component({
    components: { ProfileAvatar, ProfileData },
    computed: {
        ...mapGetters({
            user: 'user/USER',
            loading: 'user/LOADING',
        }),
    },
})
export default class ProfileInfo extends Vue {
    mounted() {
        this.$store.dispatch('user/GET');
    }
}
</script>

<style scoped lang="scss">
.profile {
    display: grid;
    grid-template-columns: 160px auto;
    grid-gap: 60px;
    grid-template-areas:
        'avatar info'
        'tools tools';
    &__info {
        grid-area: info;
    }
    &__tools {
        grid-area: tools;
    }
}
</style>
