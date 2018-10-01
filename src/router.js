import Vue from 'vue'
import Router from 'vue-router'
import PostContainer from './components/PostContainer.vue'
import PostList from './components/PostList.vue'
import UserInfoContainer from './components/UserInfoContainer.vue'

const RouteTest = resolve => require(['@/components/RouteTest.vue'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/posts/"
    },
    {
      path: '/posts/',
      name: 'post-list',
      component: PostList
    },
    {
      path: '/posts/:id',
      name: 'post-container',
      component: PostContainer
    },
    {
      path: '/users/:id',
      name: 'user-info-container',
      component: UserInfoContainer
    },
    {
      path: '/route-test',
      name: 'route-test',
      component: RouteTest
    },
  ]
})
