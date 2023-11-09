<template>
  <div class="row q-col-gutter-md justify-start">
    <div v-for="cardValue in cardValues" :key="cardValue.value" class="col-4 col-sm-3 col-md-2">
      <PokerCardComponent :value="cardValue.value"/>
    </div>
  </div>
</template>
<script lang="ts" setup>

import PokerCardComponent, {PokerCardProps} from 'components/PokerCardComponents/CardComponent.vue';
import {PropType} from 'vue';

defineProps({
  cardValues: Array as PropType<Array<PokerCardProps>>
})


</script>
<style scoped>

</style>
