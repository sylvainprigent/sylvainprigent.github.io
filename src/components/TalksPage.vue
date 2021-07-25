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
              <h2>Talks & conferences without proceedings</h2>
              <TalkItem
                  v-for="item in talks"
                  v-bind:key="item.date"
                  v-bind:item="item"
                  v-on:browse="browse($event)"
              ></TalkItem>
          </div>
      </div>  
      </div>
      </div>
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'
import SideBar from './SideBar'
import TalkItem from "./TalkItem"
import talksData from '../assets/talks.json'

export default {
  name: 'TalksPage',
  props: {
  },
  data: function(){
      return {
        talks: talksData.talks,  
      }
  },
  methods: {
  },
  components: {
    SiteNavbar,
    SideBar,
    TalkItem
  }
}
</script>

<style scoped>
  .sp-head-div{
    height: 70px;
  }
  .sp-spacer-div{
    height: 14px;
  }
</style>