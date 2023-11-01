<template>
  <q-card>
    <div>
      <RoomAttributeComponent v-for="roomDatum in roomAttributes" :key="roomDatum.title" v-bind="roomDatum">
        <div v-if="roomDatum.title === 'Users'">
          <UserSilhouetteComponent  v-for="user in roomDatum.caption" :key="user" :id="user"/>
        </div>
      </RoomAttributeComponent>

    </div>
    <q-card-actions>
      <q-btn color="primary">Confirm</q-btn>
      <q-btn color="primary">Show Card/Reset</q-btn>
    </q-card-actions>
  </q-card>
</template>
<script lang="ts" setup>

import RoomAttributeComponent, {RoomAttributeProp} from 'components/RoomComponents/RoomAttributeComponent.vue';
import UserSilhouetteComponent from 'components/UserComponents/UserSilhouetteComponent.vue';
import {PropType} from 'vue';

defineProps({
  roomAttributes: Array as PropType<Array<RoomAttributeProp>>
})

</script>
<style scoped>

</style>
