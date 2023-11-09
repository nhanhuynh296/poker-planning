<template>
  <q-avatar
    :style="{background: backgroundColor}"
    :text-color="textColor"
    size="xs">
    <img v-if="data" alt="avatar" src="https://dummyimage.com/64/F2C037&text=x">
    <div v-else>{{ abbreviatedName }}</div>
  </q-avatar>
</template>

<script lang="ts" setup>
import {colors} from 'quasar';

const luminosity = colors.luminosity;

export interface UserSilhouetteProps {
  id: string
}

const props = defineProps<UserSilhouetteProps>();

//todo call api to get image from name
const data = null;
const abbreviatedName =  props.id.split(' ').map(bit => bit.charAt(0)).join('');

const backgroundColor = getRandomColour();
const textColor = isDarkColour(backgroundColor) ? 'black' : 'white'


function getRandomColour(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function isDarkColour(colour: string): boolean {
  return luminosity(colour) < 0.5

}
</script>
<style scoped>
</style>
