import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HomePage from './components/HomePage'
import SkillsPage from './components/SkillsPage'
import ProjectsPage from './components/ProjectsPage'
import ConferencesPage from './components/ConferencesPage'
import JournalsPage from './components/JournalsPage'
import PatentsPage from './components/PatentsPage'
import TalksPage from './components/TalksPage'
import TutorialsPage from './components/TutorialsPage'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

const router = new VueRouter({
  routes : [
    { path: '/', component: HomePage },
    { path: '/home', component: HomePage },
    { path: '/skills', component: SkillsPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/conferences', component: ConferencesPage },
    { path: '/journals', component: JournalsPage },
    { path: '/patents', component: PatentsPage },
    { path: '/talks', component: TalksPage },
    { path: '/tutorials', component: TutorialsPage }
  ]
})

new Vue({
  router,
  render: function(createElement){
      return createElement(App)
  }
}).$mount('#app')
