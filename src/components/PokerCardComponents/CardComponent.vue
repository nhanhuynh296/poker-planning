<template>
  <q-btn class="full-width metal-background-silver text-white" push size="lg">
    <div class="text-h3">{{ value }}</div>
  </q-btn>
</template>
<script lang="ts" setup>
export interface PokerCardProps {
  value: number
}

defineProps<PokerCardProps>()
</script>

<style scoped>
.metal-background-silver {
  border-color: #7c7c7c;
  background: linear-gradient(180deg, #e6e6e6 0%, rgba(0, 0, 0, 0.25) 49%, rgba(38, 38, 38, 0.6) 51%, rgba(0, 0, 0, 0.25) 100%);
  border-radius: 5px;
}

</style>
