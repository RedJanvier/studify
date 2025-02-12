<script lang="ts" setup>
import { Search } from 'lucide-vue-next'
import { Icon } from '@iconify/vue'

import { computed, ref } from 'vue'
import { refDebounced } from '@vueuse/core'


const user = { 
    firstName: 'Jason',
    lastName: 'Rantiii',
    progress: 32,
    image: 'https://api.dicebear.com/9.x/open-peeps/svg?clothingColor=8fa7df,9ddadb,78e185&backgroundColor=b6e3f4,c0aede,d1d4f9&seed=Jason',
  }

</script>

<template>
  <courses-list :user="user" />
</template>

