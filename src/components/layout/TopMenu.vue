<template>
  <div>
    <nav class="navbar">
      <ul>
        <li v-for="menu in routerMenu" :key="menu.path">
          <router-link :to="menu.path">{{menu.name}}</router-link>
        </li>
      </ul>
      <div class="menu_wrap">
        <input type="checkbox" class="menu_icon"/>
        <span></span>
        <span></span>
        <span></span>
        <SideAside />
      </div>
    </nav>
    
  </div>
</template>

<script>
import routes from "@/router/routes";
import SideAside from '@/components/layout/SideAside'
  export default {
    name: "top-menu",
    components: {
      SideAside
    },
    data() {
      return {
        routerMenu: []
      }
    },
    created () {
      this.routerMenu = routes[0].children;
    }
  }
</script>
