<template>
  <div class="wrapper">
    <side-aside></side-aside>
    <div class="main-panel">
      <top-menu></top-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import ContentLayout from '@/components/layout/ContentLayout'
import SideAside from '@/components/layout/SideAside'
import TopMenu from '@/components/layout/TopMenu'

export default {
  name: 'app-layout',
  components: {
    
    SideAside,
    TopMenu
  }
};
</script>
