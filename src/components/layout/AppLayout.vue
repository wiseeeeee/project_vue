<template>
  <div class="wrapper">
    <side-aside :menuProps="menuProps"></side-aside>
    <div class="main-panel">
      <top-menu @inputToggle="menuToggle"></top-menu>
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
  props: {

  },
  components: {
    SideAside,
    TopMenu
  },
  data() {
    return {
      toggle: false,
      menuProps: ''
    }
  },
  methods: {
    menuToggle(checked) {
      
      this.menuProps = checked;
      console.log('toggle', this.menuProps )
    }
  },
  created() {
    console.log('applayout', this.toggle)
  }
};
</script>
