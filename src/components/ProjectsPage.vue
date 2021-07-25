<template>
<div>
    <site-navbar></site-navbar>
    <div class="">
    <div class="col-12 sp-head-div">
    </div>
    <div class="row">
    <div class="col-md-2">
      <side-bar></side-bar>
    </div>
    <div class="col-10">
      <h2>Projects</h2>
      <ProjectItem
        v-for="item in projects"
        v-bind:key="item.title"
        v-bind:item="item"
      ></ProjectItem> 
          </div>
      </div>  
    </div>
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'
import SideBar from './SideBar'
import ProjectItem from "./ProjectItem"
import projectData from '../assets/projects.json'

export default {
  name: 'ProjectsPage',
  props: {
  },
  data: function(){
      return {
        projects: projectData.projects,  
      }
  },
  methods: {
  },
  components: {
    SiteNavbar,
    SideBar,
    ProjectItem
  }
}
</script>

<style scoped>
  .sp-head-div{
    height: 70px;
  }
</style>