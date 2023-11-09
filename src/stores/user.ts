import {defineStore} from 'pinia';
import {UserInfo} from 'firebase/auth';
import {computed, ref, Ref} from 'vue';

export interface RoomMember extends UserInfo {
  card: number
}

export const useUserStore = defineStore('user', () => {
  const user: Ref<UserInfo | null> = ref(null)

  const isLoggedIn = computed(() => !!user.value)

  return {user, isLoggedIn}
}, {persist: true});
