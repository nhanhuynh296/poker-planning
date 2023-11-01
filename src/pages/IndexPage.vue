<template>
  <q-page>
    <div class="q-py-sm q-px-sm row flex-center">
      <div class="col-md-8 col-12">
        <RoomDetailComponent :room-attributes="roomData"/>
      </div>
    </div>
    <div class="q-py-sm q-px-sm row flex-center">
      <div class="col-md-8 col-sm-11 col-12">
        <UsersInRoomWrapper :users="players"/>
      </div>
    </div>
    <div class="q-py-xl q-px-sm row flex-center">
      <div class="col-md-8 col-sm-11 col-12">
        <PokerCardWrapper :card-values="fibonacciValuesStrategy"/>
      </div>
    </div>


  </q-page>
</template>

<script lang="ts" setup>
import RoomDetailComponent from 'components/RoomComponents/RoomDetailWrapper.vue';
import UsersInRoomWrapper from 'components/UserComponents/UsersInRoomWrapper.vue';
import PokerCardWrapper from 'components/PokerCardComponents/PokerCardWrapper.vue';
import {UserSilhouetteProps} from 'components/UserComponents/UserSilhouetteComponent.vue';
import {PokerCardProps} from 'components/PokerCardComponents/CardComponent.vue';
import {RoomAttributeProp} from 'components/RoomComponents/RoomAttributeComponent.vue';

const players: UserSilhouetteProps[] = [
  {
    id: 'Nathan Huynh'
  },
  {
    id: 'Alok Alok'
  },
  {
    id: 'Nick Lott'
  },
  {
    id: 'Nathan Huynh'
  },
  {
    id: 'Alok Alok'
  },
  {
    id: 'Nick Lott'
  }
]

const fibonacciValuesStrategy: PokerCardProps[] = [
  {
    value: 1
  },
  {
    value: 2
  },
  {
    value: 3
  },
  {
    value: 5
  },
  {
    value: 8
  },
  {
    value: 13
  }
]

const roomData: RoomAttributeProp[] = [
  {
    title: 'Users',
    caption: players.map(player => player.id),
    icon: 'group'
  },
  {
    title: 'Room name',
    caption: 'Series 7',
    icon: 'meeting_room'
  },
  {
    title: 'URL',
    caption: 'https://nathanhuynh.link',
    icon: 'link'
  },
  {
    title: 'Donate',
    caption: 'Nick please give me pay rise 👉🏻👈🏻',
    icon: 'price_change'
  },
]


</script>
