<template>
  <h2 class="text-lg">Welcome, {{ user.firstName }}</h2>
  <p class="text-sm text-gray-500">help you reach your full potential</p>
  <h2 class="text-2xl my-4">My Courses</h2>
  <ul class="grid gap-3">
    <li v-for="course in courses" :key="course.id">
      <NuxtLink :to="'/courses/' + course.id" class="bg-white text-black rounded-2xl p-4 flex gap-5">
        <div class="img">
          <img :src="course.thumbnail" class="h-full w-[200px] object-cover rounded-2xl"/>
        </div>
        <div class="flex-1 flex-wrap flex items-center">
          <div class="cnt flex-1 flex flex-col justify-around gap-2 min-w-[400px]">
            <p class="text-2xl">{{ course.title }}</p>
            <div class="flex gap-2 items-center">
              <div class="user-img rounded-full overflow-hidden">
                <img :src="`https://api.dicebear.com/9.x/open-peeps/svg?clothingColor=8fa7df,9ddadb,78e185&backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${course.mentor.firstName}_${course.mentor.lastName}`" class="w-6" />
              </div>
              <div class="user-descr flex flex-col flex-1 justify-center text-left">
                <span class="text-black font-semibold">{{ course.mentor.firstName }} {{ course.mentor.lastName }}</span>
              </div>
            </div>
          </div>
          <div class="pgrs max-w-[350px] min-w-[200px] flex-1 flex flex-col justify-around items-end">
            <span v-if="course.progress !== 100" class="flex items-center max-w-content gap-2 px-4 py-3 tag text-light h-6 rounded-lg" :style="`max-width: max-content; color: var(--blue-color); background-color: var(--blue-light-color);`">
              <span>In progress</span>
            </span>
            <span v-if="course.progress === 100" class="flex items-center max-w-content gap-2 px-4 py-3 tag text-light h-6 rounded-lg" :style="`max-width: max-content; color: var(--blue-color); background-color: var(--blue-light-color);`">
              <span>Completed</span>
            </span>
            <div class="flex items-center gap-2 text-xs w-full">
              <Progress class="h-1" color="var(--main-color)" v-model="course.progress" />
              <p>{{ course.progress }}%</p>
            </div>
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import type { IUser } from '../data/courses'

interface CoursesProps {
  user: IUser
}

defineProps<CoursesProps>()

const courses = ref([
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
])
</script>

<style lang="scss" scoped>

</style>