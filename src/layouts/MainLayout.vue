<template>
  <q-layout view="lHr lpR lfr">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar rounded size="lg">
            <img alt="Fisher and Paykel logo" src="/fpa-icon.png">
          </q-avatar>
          Scrum Poker Planning
        </q-toolbar-title>
        <router-link v-if="!useUserStore().isLoggedIn" to="login">
          <q-btn label="login"/>
        </router-link>
        <div v-else class="text-subtitle1">{{ displayName }}</div>
        <q-btn label="Logout" @click="logout"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>

import {useUserStore} from 'stores/user';
import {useRouter} from 'vue-router';

const userState = useUserStore()
const router = useRouter()
const displayName = userState.user?.displayName || userState.user?.email || null

async function logout() {
  localStorage.clear()
  await router.push({name: 'login'})

}
</script>
