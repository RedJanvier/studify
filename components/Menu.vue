<script lang="ts" setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

let settingsLinks = ref([
  {
    id: 1,
    text: 'Settings',
    link: '/settings',
    icon: 'mdi:settings-outline',
  },
  {
    id: 2,
    text: 'Logout',
    link: '/inbox',
    icon: 'mdi:logout',
    danger: true
  },
])

const overviewLinks = [
  {
    id: 1,
    text: 'Dashboard',
    link: '/',
    icon: 'mdi:view-dashboard',
    active: true
  },
  {
    id: 2,
    text: 'Inbox',
    link: '/inbox',
    icon: 'mdi:inbox-outline'
  },
  {
    id: 3,
    text: 'Courses',
    link: '/courses',
    icon: 'mdi:book-education-outline'
  },
  {
    id: 4,
    text: 'Task',
    link: '/task',
    icon: 'mdi:subtasks'
  },
  {
    id: 5,
    text: 'Groups',
    link: '/groups',
    icon: 'mdi:account-group-outline'
  },
]

const friendsList = [
  {
    id: 1,
    name: 'Magas Paphie',
    friendship: 'Friend',
    image: 'https://api.dicebear.com/7.x/open-peeps/webp'
  },
  {
    id: 2,
    name: 'John Doe',
    friendship: 'Old Friend',
    image: 'https://api.dicebear.com/7.x/open-peeps/webp'
  },
  {
    id: 3,
    name: 'Jhon Tosan',
    friendship: 'Friend',
    image: 'https://api.dicebear.com/7.x/open-peeps/webp'
  },
]
</script>
<template>
  <aside class="flex flex-col bg-white p-6 box-border md:static md:w-auto md:h-screen w-full fixed bottom-0 z-10 left-0">
    <a href="/" class="text-6xl mb-14 hidden md:block"><h1>Studify</h1></a>
    <div class="md:mt-10">
      <p class="text-xs text-gray-600 pb-2 min-w-60 uppercase hidden md:block">Overview</p>
      <ul class="flex justify-around md:justify-start md:grid gap-6">
        <li :key="item.id" v-for="item in overviewLinks">
          <NuxtLink :to="item.link" class="flex gap-2 items-center">
            <Icon :icon="item.icon" width="28" height="28" />
            <span :class="`text-black text-lg md:block`">{{ item.text }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="mt-10 flex-1 hidden md:block">
      <p class="text-xs text-gray-600 pb-2 min-w-48 uppercase">Friends</p>
      <ul class="grid gap-6">
        <li :key="item.id" v-for="item in friendsList">
          <div class="flex gap-2 items-center">
            <div class="user-img ">
              <img :src="'https://api.dicebear.com/9.x/open-peeps/svg?clothingColor=8fa7df,9ddadb,78e185&backgroundColor=b6e3f4,c0aede,d1d4f9&seed=' + item.name.replaceAll(' ', '_')" class="w-10" />
            </div>
            <div class="user-descr flex flex-col justify-center">
              <span class="text-black font-semibold">{{ item.name }}</span>
              <span class="text-gray-500">{{ item.friendship }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class=" hidden md:block">
      <p class="text-xs text-gray-600 pb-2 min-w-40 uppercase">Settings</p>
      <ul class="grid gap-4">
        <li :key="item.id" v-for="item in settingsLinks">
          <a :href="item.link" class="flex gap-2 items-center" :style="item.danger? 'color: red;' : ''">
            <Icon :icon="item.icon" width="28" height="28" />
            <span class="text-lg">{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
<style scoped>
  .router-link-active {
    color: var(--main-color);
  }
  @media screen and (max-width: 768px) {
    :not(.router-link-active) > span {
      display: none;
    }
  }
</style>
