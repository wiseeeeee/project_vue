import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes,  //short for routes: routes
  mode:"history",// history 모드로 하게 되면 페이지를 다시 로드하지 않고 url 탐색
});

export default router;
