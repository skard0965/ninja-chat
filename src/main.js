import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Welcome from "@/components/Welcome"
import Chat from "@/components/Chat"
import VueChatScroll from "vue-chat-scroll"
Vue.config.productionTip = false

Vue.use(VueChatScroll)
Vue.use(VueRouter)

const routes = [
  { name: 'Welcome', path: '/', component: Welcome },

  { 
    name: 'Chat',
    path: '/chat',
    component: Chat,
    props:true,
    beforeEnter:(to,from,next)=>{
      if(to.params.name){
        next()
      }else{
        next({name:'Welcome'})
      }
    }
  },


];


const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
