<script setup>
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="grow overflow-auto">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
