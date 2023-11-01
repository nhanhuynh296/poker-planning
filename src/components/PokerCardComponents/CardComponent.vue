<template>
    <q-btn size="lg" push class="full-width">
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

</style>
