<script lang="ts" setup>
export interface UserInRoomProps {
  name: string
}

defineProps<UserInRoomProps>()


</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ name }}</div>
<!--      <div class="text-subtitle2"> John Doe</div>-->
    </q-card-section>
  </q-card>
</template>

<style scoped>

</style>
