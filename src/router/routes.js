import Login from "@/pages/01Login.vue"
import About from "@/pages/03About.vue"
import Main from "@/pages/02Main.vue"
import ContentLayout from "@/components/layout/ContentLayout.vue"

const topMenu = {
  path:'/',
  component : ContentLayout,
  children:[
    {
        path:'login',
        name:'Login',
        component: Login
    }
  ]
}

const sideMenu = {
  path:'/',
  component : ContentLayout,
  children:[
    {
        path:'about',
        name:'About',
        component: About,
    },
    {
      path:'main',
      name:'Main',
      component: Main
  }
  ]
}


const routes = [
  topMenu,
  sideMenu
];

export default routes;
