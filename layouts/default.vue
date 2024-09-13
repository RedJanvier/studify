<script lang="ts">
</script>

<template>
  <div class="flex box-border md:max-w-[1869px] md:mx-auto">
    <Menu></Menu>
    <main class="bg-gray-200 flex-1 mb-[76px] md:mb-0">
      <Nav :user="user"></Nav>
      <ScrollArea class="flex mt-4 flex-col-reverse md:flex-row box-border px-4 h-[calc(100vh-79px)]">
        <slot></slot>
      </ScrollArea>
    </main>
  </div>
</template>