<script setup lang="ts">
import { BarChart } from './ui/chart-bar'

const data = [
  { name: 'Jan', total: 35},
  { name: 'Feb', total: 46},
  { name: 'Mar', total: 34},
  { name: 'Apr', total: 60},
  { name: 'May', total: 30},
]
</script>

<template>
  <BarChart
    class="h-[150px] bg-gray-100 rounded-2xl p-3 pl-0"
    :data="data"
    index="name"
    :categories="['total']"
    :showLegend="false"
    :colors="['#6550cf', '#d8d0ff']"
  />
</template>