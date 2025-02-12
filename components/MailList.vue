<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { Icon } from '@iconify/vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import { formatDistanceToNow } from 'date-fns'
import type { IUser } from '../data/courses'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { Button } from './ui/button'
import { cn } from '../lib/utils'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'

interface DashboardProps {
  user: IUser
}

defineProps<DashboardProps>()

function getBadgeVariantFromLabel(label: string) {
  if (['work'].includes(label.toLowerCase()))
    return 'default'

  if (['personal'].includes(label.toLowerCase()))
    return 'outline'

  return 'secondary'
}

const mentors = [
  {
    firstName: 'Patdhang',
    lastName: 'Satrio',
    following: false,
    startDate: '2/16/2014',
  },
  {
    firstName: 'Zakir',
    lastName: 'Horizontal',
    following: false,
    startDate: '8/26/2013',
  },
  {
    firstName: 'Leonardo',
    lastName: 'Samsul',
    following: false,
    startDate: '9/16/2021',
  },
]

const tags = [
  {
    icon: 'mdi:design',
    name: 'UI/UX Design',
    completed: 2,
    total: 8,
    color: 'var(--main-color)',
    bgColor: 'var(--main-light-color)',
  },
  {
    icon: 'mdi:shape',
    name: 'Branding',
    completed: 3,
    total: 8,
    color: 'var(--red-color)',
    bgColor: 'var(--red-light-color)',
  },
  {
    icon: 'mdi:shape-polygon-plus',
    name: 'Frontend',
    completed: 6,
    total: 12,
    color: 'var(--cyan-color)',
    bgColor: 'var(--cyan-light-color)',
  },
]

const courses = [
  {
    id: 1,
    title: "Beginner's guide to Becoming a Professional Front-End Developer",
    tag:{
      icon: 'mdi:shape-polygon-plus',
      name: 'Frontend',
      completed: 6,
      total: 12,
      color: 'var(--cyan-color)',
      bgColor: 'var(--cyan-light-color)',
    },
    thumbnail: 'https://images.pexels.com/photos/6818306/pexels-photo-6818306.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=2',
    mentor: {
      firstName: 'Leonardo',
      lastName: 'Samsul',
      following: false,
      startDate: '2/16/2014',
    },
    progress: 80,
  },
  {
    id: 2,
    title: "Optimizing User Experience using the Best UI/UX Design",
    tag: {
      icon: 'mdi:design',
      name: 'UI/UX Design',
      completed: 2,
      total: 8,
      color: 'var(--main-color)',
      bgColor: 'var(--main-light-color)',
    },
    thumbnail: 'https://images.pexels.com/photos/6894013/pexels-photo-6894013.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=2',
    mentor: {
      firstName: 'Banyu',
      lastName: 'Salto',
      following: false,
      startDate: '2/16/2014',
    },
    progress: 60,
  },
  {
    id: 3,
    title: "Reviving and Refreshing the whole Company image",
    tag: {
      icon: 'mdi:shape',
      name: 'Branding',
      completed: 3,
      total: 8,
      color: 'var(--red-color)',
      bgColor: 'var(--red-light-color)',
    },
    thumbnail: 'https://images.pexels.com/photos/6981085/pexels-photo-6981085.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=2',
    mentor: {
      firstName: 'Patdhang',
      lastName: 'Satrio',
      following: false,
      startDate: '2/16/2004',
    },
    progress: 40,
  },
  {
    id: 4,
    title: "Reviving and Refreshing the whole Company image",
    tag: {
      icon: 'mdi:shape',
      name: 'Branding',
      completed: 3,
      total: 8,
      color: 'var(--red-color)',
      bgColor: 'var(--red-light-color)',
    },
    thumbnail: 'https://images.pexels.com/photos/6981085/pexels-photo-6981085.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=2',
    mentor: {
      firstName: 'Patdhang',
      lastName: 'Satrio',
      following: false,
      startDate: '2/16/2004',
    },
    progress: 40,
  },
]

const cardContainer = ref(null)
const currentIndex = ref(0)
const totalCards = courses.length

const isAtStart = computed(() => currentIndex.value === 0)
const isAtEnd = computed(() => currentIndex.value === totalCards - 1)

const scroll = (direction:string) => {
  if (direction === 'left' && !isAtStart.value) {
    currentIndex.value--
  } else if (direction === 'right' && !isAtEnd.value) {
    currentIndex.value++
  }
}

onMounted(() => {
  // Initial check not needed as we're using computed properties
})

</script>

<template>
  <div class="grid grid-cols-1 min-[1500px]:grid-cols-[minmax(400px,_2fr)_minmax(400px,_1fr)] gap-4 pt-0">
    <div class="">
      <h2 class="text-4xl block md:hidden">Hello, {{ user.firstName }}</h2>
      <p class="block md:hidden py-4 text-gray-500">help you reach your full potential</p>
      <Command class="rounded-full block md:hidden h-[40px] mb-6">
        <CommandInput placeholder="Search your course..." />
      </Command>
      <div class="w-full p-6 text-white rounded-2xl mb-4" style="background: var(--main-color);">
        <span class="uppercase py-4">Online Courses</span>
        <h2 class="text-4xl py-5">
          Sharpen Your Skills with <br class="hidden md:block"/>
          Professional Online Courses
        </h2>
        <Button class="rounded-full px-2 py-6 pl-4 bg-black">
          <span class="text-lg">Join now</span>
          <div class="icon p-2 rounded-full bg-white text-black ml-3"><Icon icon="mdi:arrow-right" /></div>
        </Button>
      </div>
      <ScrollArea class="border rounded-md">
        <ul class="flex gap-8 my-4 w-max">
          <li v-for="tag in tags" :key="tag.name" class="bg-white flex items-center p-3 rounded-3xl w-60 justify-between">
            <div class="flex items-center">
              <div class="icon p-4 rounded-full" :style="`color: ${tag.color}; background-color: ${tag.bgColor};`">
                <Icon :icon="tag.icon" width="24" height="24" />
              </div>
              <div class="descr ml-3">
                <p class="text-sm text-gray-500">{{tag.completed}}/{{tag.total}}watched</p>
                <p class="font-bold">{{tag.name}}</p>
              </div>
            </div>
            <div class="icon text-gray-500">
              <Icon icon="mdi:dots-vertical" width="22" height="22" />
            </div>
          </li>
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div class="section-header flex justify-between items-center py-4">
        <h2 class="text-2xl font-semibold">Continue watching</h2>
        <div class="section-header__actions flex gap-2">
          <button 
            @click="scroll('left')" 
            :disabled="isAtStart"
            :class="[
              'p-2 rounded-full transition-colors',
              isAtStart ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[var(--main-color)] hover:bg-[var(--main-light-color)] text-[white]'
            ]"
          >
            <ChevronLeft class="w-6 h-6" />
          </button>
          <button 
            @click="scroll('right')" 
            :disabled="isAtEnd"
            :class="[
              'p-2 rounded-full transition-colors',
              isAtEnd ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[var(--main-color)] hover:bg-[var(--main-light-color)] text-[white]'
            ]"
          >
            <ChevronRight class="w-6 h-6" />
          </button>
        </div>
      </div>
      <div class="bg-white p-4 rounded-2xl px-0 overflow-hidden">
        <div class="flex">
          <ul class="flex gap-4 flex-nowrap no-scrollbar transition-transform duration-300 ease-in-out"
            :style="{ transform: currentIndex > 0 ? `translateX(calc(${-currentIndex * (320)}px - ${currentIndex - 1 + 'rem'}))` : `translateX(calc(${-currentIndex * (320)}px + 1rem))` }">
            <li class="inline-block" v-for="course in courses" :key="course.id">
              <div class="grid gap-2 w-[350px] snap-start max-w-xs overflow-hidden rounded-lg">
                <img :src="course.thumbnail" alt="course thumbnail" class="w-full h-[200px] rounded-2xl object-cover" />
                <span class="flex items-center max-w-content gap-2 px-2 tag text-light rounded-full" :style="`max-width: max-content; color: ${course.tag.color}; background-color: ${course.tag.bgColor};`">
                  <Icon :icon="course.tag.icon" />
                  <span>{{ course.tag.name }}</span>
                </span>
                <h4>{{ course.title }}</h4>
                <Progress class="h-2" color="var(--main-color)" v-model="course.progress" />
                <div class="flex gap-2 items-center">
                  <div class="user-img rounded-full overflow-hidden">
                    <img :src="`https://api.dicebear.com/9.x/open-peeps/svg?clothingColor=8fa7df,9ddadb,78e185&backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${course.mentor.firstName}_${course.mentor.lastName}`" class="w-10" />
                  </div>
                  <div class="user-descr flex flex-col flex-1 justify-center text-left">
                    <span class="text-black font-semibold">{{ course.mentor.firstName }} {{ course.mentor.lastName }}</span>
                    <span class="text-gray-500">Mentor</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="section-header flex justify-between items-center py-4">
        <h2 class="text-2xl font-semibold">Your Lesson</h2>
        <div class="section-header__actions flex gap-2">
          <a href="/" class="text-[var(--main-color)] text-underline">See all</a>
        </div>
      </div>

      <ul class="bg-white w-full rounded-2xl">
        <li class="grid grid-cols-[3fr_2fr_4fr_1fr] uppercase text-gray-500 border border-bottom-gray-500 text-center py-2">
          <h3>Mentor</h3>
          <h3>Type</h3>
          <h3>Descr</h3>
          <h3>Action</h3>
        </li>
        <li v-for="course in courses" :key="course.id" class="grid grid-cols-[3fr_2fr_4fr_1fr] items-center mx-3 py-4 border-dashed border-b border-bottom-gray-500">
          <div class="flex gap-2 items-center">
            <div class="user-img rounded-full overflow-hidden">
              <img :src="`https://api.dicebear.com/9.x/open-peeps/svg?clothingColor=8fa7df,9ddadb,78e185&backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${course.mentor.firstName}_${course.mentor.lastName}`" class="w-10" />
            </div>
            <div class="user-descr flex flex-col flex-1 justify-center text-left">
              <span class="text-black font-semibold">{{ course.mentor.firstName }} {{ course.mentor.lastName }}</span>
              <span class="text-gray-500">{{ course.mentor.startDate }}</span>
            </div>
          </div>
          <span class="flex items-center max-w-content gap-2 px-2 tag text-light h-6 rounded-full" :style="`max-width: max-content; color: ${course.tag.color}; background-color: ${course.tag.bgColor};`">
            <Icon :icon="course.tag.icon" />
            <span>{{ course.tag.name }}</span>
          </span>
          <p class="text-black font-semibold">{{ course.title }}</p>
          <div class="flex justify-center">
            <button class="icon p-2 border border-[var(--main-color)] text-gray-500 w-10 h-10 rounded-full" style="color: var(--main-color);">
              <Icon icon="mdi:arrow-top-right" width="22" height="22" />
            </button>
          </div>
        </li>
      </ul>
    </div>

    <div class="bg-white p-4 h-full rounded-2xl max-w-[510px] text-center hidden min-[1500px]:block">
      <div class="flex justify-between">
        <p class="font-bold">Statistics</p>
        <div class="icon"><Icon icon="mdi:dots-vertical" width="22" height="22" /></div>
      </div>
      <div class="w-100 grid place-items-center my-3 relative">
        <img  :src="user.image" class="w-[150px] absolute top-50 left-50 bg-red-100 rounded-full" alt="profile">
        <circle-progress :percent="user.progress" 
          empty-color="#f7f7f7"
          fill-color="var(--main-color)"
          :border-width="10"
          :border-bg-width="12" />
      </div>
      <p class="font-bold">Good Morning {{ user.firstName }}🔥</p>
      <p class="text-sm text-gray-500 mb-6">Continue your learning to achieve your target!</p>
      <activity-chart />

      <div class="flex justify-between items-center my-6">
        <p class="font-bold">Your mentor</p>
        <button class="icon p-2 border border-gray-500 text-gray-500 rounded-full" style="color: var(--main-color);">
          <Icon icon="mdi:plus" width="22" height="22" />
        </button>
      </div>
      <div class="p-4 bg-gray-100 rounded-2xl">
        <ul class="grid gap-6">
          <li :key="item.id" v-for="item in mentors">
            <div class="flex gap-2 items-center">
              <div class="user-img rounded-full overflow-hidden">
                <img :src="`https://api.dicebear.com/9.x/open-peeps/svg?clothingColor=8fa7df,9ddadb,78e185&backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${item.firstName}_${item.lastName}`" class="w-20" />
              </div>
              <div class="user-descr flex flex-col flex-1 justify-center text-left">
                <span class="text-black font-semibold">{{ item.firstName }} {{ item.lastName }}</span>
                <span class="text-gray-500">Mentor</span>
              </div>
              <button class="flex items-center gap-2 border border-gray-500 rounded-full px-3 py-1" style="color: var(--main-color)">
                <Icon icon="mdi:person-check-outline" width="22" height="22" />
                <span>Follow</span>
              </button>
            </div>
          </li>
        </ul>
        <button class="flex w-full justify-center items-center gap-2 border rounded-full mt-4 px-3 py-1 text-lg" style="color: var(--main-color); background-color: var(--main-light-color);">
          <span>See all</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.list-leave-active {
  position: absolute;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>