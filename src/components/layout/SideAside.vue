<template>
  <div>
    <ul class="aside-box" :class="[menuProps ? '' : 'on']">
      <li v-for="menu in routerMenu" :key="menu.path">
        <router-link :to="menu.path">{{menu.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import routes from "@/router/routes";
  export default {
    name: "side-aside",
    props: {
      menuProps: Boolean
    },
    data() {
      return {
        routerMenu: []
      }
    },
    created () {
      this.routerMenu = [...routes[1].children];
    }
  }
</script>
