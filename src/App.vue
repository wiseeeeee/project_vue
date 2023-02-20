<template>
  <div id="app">
    <AppLayout/>
  </div>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout.vue'

export default {
  name: 'App',
  components: {
    AppLayout
  }
}
</script>
<style lang="scss">
  @import "@/assets/sass/index.scss"
</style>