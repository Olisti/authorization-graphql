<template>
    <el-avatar icon="el-icon-user-solid" class="avatar"></el-avatar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ProfileAvatar extends Vue {}
</script>

<style scoped lang="scss">
.avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 160px;
    width: 160px;
    font-size: 80px;
}
</style>
