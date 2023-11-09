<script setup lang="ts">
import {UserSilhouetteProps} from 'components/UserComponents/UserSilhouetteComponent.vue';
import UserInRoomComponent from 'components/UserComponents/UserInRoomComponent.vue';
import {PropType} from 'vue';

defineProps({
  users: Array as PropType<Array<UserSilhouetteProps>>
})

</script>

<template>
  <div class="row q-col-gutter-md justify-start" >
    <div v-for="user in users" :key="user.id" class="col-6 col-sm-4 col-md-3 col-lg-2">
      <UserInRoomComponent :name="user.id"/>
    </div>
  </div>
</template>

<style scoped>

</style>
