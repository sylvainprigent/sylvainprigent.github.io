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
          {{cv.resume}}
          </div>  
          <div class="col-12">
              <div class="sp-spacer-div"></div>
              <h2>Work experiences</h2>
              <CVItem
                  v-for="item in cv.experiences"
                  v-bind:key="item.title"
                  v-bind:item="item"
                  v-on:browse="browse($event)"
              ></CVItem>
              <div class="sp-spacer-div"></div>
              <h2>Education</h2>
              <CVItem
                  v-for="item in cv.education"
                  v-bind:key="item.title"
                  v-bind:item="item"
                  v-on:browse="browse($event)"
              ></CVItem>
          </div>
      </div>  
      </div>
      </div>
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'
import SideBar from './SideBar'
import CVItem from "./CVItem"
import cdData from '../assets/cv.json'

export default {
  name: 'HomePage',
  props: {
  },
  data: function(){
      return {
        cv: cdData,  
      }
  },
  methods: {
  },
  components: {
    SiteNavbar,
    SideBar,
    CVItem
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