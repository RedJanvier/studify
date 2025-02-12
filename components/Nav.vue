<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { cn } from '../lib/utils'
import { buttonVariants } from './ui/button'
import { Separator } from './ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from './ui/tooltip'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './ui/command'
import { user } from '../data/courses'
import type { IUser } from '../data/courses'

// interface NavProps {
//   user: IUser
// }

// defineProps<NavProps>()
</script>

<template>
  <div class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
    <nav class="flex md:grid md:grid-cols-[8fr_42px_42px_3px_1fr] justify-around items-center gap-4 px-6 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
      <Command class="rounded-full hidden md:block">
        <CommandInput placeholder="Search your course..." />
      </Command>
      <div class="icon w-[36px] border border-gray-500 rounded-full h-[36px] relative">
        <Icon icon="mdi:email" width="20" height="20" class="absolute left-1/2 top-1/2" style="transform: translate(-50%,-50%);"></Icon>
      </div>
      <div class="icon w-[36px] border border-gray-500 rounded-full h-[36px] relative">
        <Icon icon="mdi:bell" width="20" height="20" class="absolute left-1/2 top-1/2" style="transform: translate(-50%,-50%);"></Icon>
      </div>
      <Separator orientation="vertical" class="border-black bg-gray-500 h-12 hidden md:block" />
      <div class="user flex gap-3 flex-1 justify-end">
        <div class="user-image rounded-full overflow-hidden w-[36px] h-[36px]">
          <img :src="`https://api.dicebear.com/9.x/open-peeps/svg?clothingColor=8fa7df,9ddadb,78e185&backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${user.firstName}`" alt="profile" />
        </div>
        <b class="text-nowrap self-center hidden md:block">{{ user.firstName }} {{ user.lastName }}</b>
      </div>
    </nav>
  </div>
</template>