import {defineStore} from 'pinia';
import {ref} from 'vue';
import {RoomMember} from 'stores/user';
import {Ref} from 'vue/dist/vue';

export interface Room {
  name: string,
  members: RoomMember[]

}

export const useRoomStore = defineStore('room', () => {
  const room: Ref<Room | null> = ref(null)
  return {room}
});



