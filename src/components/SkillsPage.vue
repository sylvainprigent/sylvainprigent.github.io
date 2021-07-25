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
    <div class="col-md-10">
          <div class="sp-spacer-div"></div>
          <div class="sp-spacer-div"></div>
          <div class="col-12">
              <div class="sp-spacer-div"></div>
              <h2>Skills</h2>
              <SkillsItem
                  v-for="item in skillsdata.skills"
                  v-bind:key="item.title"
                  v-bind:item="item"
                  v-on:browse="browse($event)"
              ></SkillsItem>
              <div class="sp-spacer-div"></div>
          </div>
    </div>  
    </div>
    </div>
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'
import SideBar from './SideBar'
import SkillsItem from "./SkillsItem"
import skillsData from '../assets/skills.json'

export default {
  name: 'SkillsPage',
  props: {
  },
  data: function(){
      return {
        skillsdata: skillsData,  
      }
  },
  methods: {
  },
  components: {
    SiteNavbar,
    SideBar,
    SkillsItem
  }
}
</script>

<style scoped>
  .sp-head-div{
    height: 70px;
  }
  .sp-spacer-div{
    height: 24px;
  }
</style>