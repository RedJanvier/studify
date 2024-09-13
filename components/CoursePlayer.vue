<template>
  <div class="flex-1 border-l  p-4 border-gray-200 h-full">
    <div class="section-header flex justify-between items-center py-4">
        <h2 class="text-xl">{{ video.title }}</h2>
        <div class="section-header__actions flex gap-2">
          <button class="flex items-center text-gray-500 text-sm">
            <Icon icon="mdi:bookmark" width="25" height="25" />
            <span>Save for later</span>
          </button>
        </div>
      </div>
    <video class="w-100 object-cover my-2"></video>

    <div class="flex gap-4 items-center my-4">
      <div class="user-img rounded-full overflow-hidden">
        <img :src="`https://api.dicebear.com/9.x/open-peeps/svg?clothingColor=8fa7df,9ddadb,78e185&backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${mentor.firstName}_${mentor.lastName}`" class="w-10" />
      </div>
      <div class="user-descr flex flex-col flex-1 justify-center text-left">
        <span class="">{{ mentor.firstName }} {{ mentor.lastName }}</span>
        <span class="text-gray-500 text-xs">{{ mentor.role }}</span>
      </div>
    </div>

    <p class="text-gray-500 text-sm my-2">{{ video.summary }}</p>
  </div>
</template>

<script lang="ts" setup>
import {Icon} from '@iconify/vue'
import type { Mentor, VideoCourse } from '../data/courses'

interface VideoCoursesProps {
  video: VideoCourse;
  mentor: Mentor;
}

defineProps<VideoCoursesProps>()
</script>

<style lang="scss" scoped>

</style>