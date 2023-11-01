<template>
  <q-card>
    <div v-for="roomDatum in roomAttributes" :key="roomDatum.title">
      <div v-if="roomDatum.title == 'Users'">
        <RoomAttributeComponent :title="roomDatum.title" :icon="roomDatum.icon">
          <UserSilhouetteComponent  v-for="user in roomDatum.caption" :key="user" :id="user"/>
        </RoomAttributeComponent>
      </div>
      <div v-else>
        <RoomAttributeComponent v-bind="roomDatum"/>

      </div>



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
