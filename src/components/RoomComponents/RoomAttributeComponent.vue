<template>
  <q-item>
    <q-item-section avatar top>
      <q-avatar :icon="icon" color="primary" text-color="white"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption lines="2" v-if="caption">{{caption}}</q-item-label>
      <q-item-label v-else><slot/></q-item-label>
    </q-item-section>

<!--    <q-item-section side top>-->
<!--      <q-item-label caption>5 min ago</q-item-label>-->
<!--      <q-icon color="yellow" name="star"/>-->
<!--    </q-item-section>-->
  </q-item>

</template>

<script lang="ts" setup>

export interface RoomAttributeProp {
  title: string;
  icon?: string;
  caption?: string | string[]
}

withDefaults(defineProps<RoomAttributeProp>(), {
  icon: '',
})
</script>

<style scoped>

</style>
