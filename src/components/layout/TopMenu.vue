<template>
  <div class="navbar">
      <ul>
        <li v-for="menu in routerMenu" :key="menu.path">
          <router-link :to="menu.path">{{menu.name}}</router-link>
        </li>
      </ul>
      <div class="menu_wrap">
        <input type="checkbox" class="menu_icon" v-model="checked" @change="$emit('inputToggle', checked)"/>
        <span></span>
        <span></span>
        <span></span>
      </div>    
  </div>
</template>

<script>
import routes from "@/router/routes";
  export default {
    name: "top-menu",
    data() {
      return {
        routerMenu: [],
        checked: false
      }
    },
    methods: {
    },
    created () {
      this.routerMenu = [...routes[0].children];
    }
  }
</script>
