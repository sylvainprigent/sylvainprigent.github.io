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
              <h2>Articles in conferences</h2>
              <PubliItem
                  v-for="item in publi.conferences"
                  v-bind:key="item.title"
                  v-bind:item="item"
                  v-on:browse="browse($event)"
              ></PubliItem>
          </div>
      </div>  
      </div>
      </div>
</div>
</template>

<script>
import SiteNavbar from './SiteNavbar'
import SideBar from './SideBar'
import PubliItem from "./PubliItem"
import publiData from '../assets/publications.json'

export default {
  name: 'ConferencesPage',
  props: {
  },
  data: function(){
      return {
        publi: publiData,  
      }
  },
  methods: {
  },
  components: {
    SiteNavbar,
    SideBar,
    PubliItem
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