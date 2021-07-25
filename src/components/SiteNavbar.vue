<template>
<div>
  <b-navbar toggleable="lg" type="light" fixed="top" variant="light">
    <b-navbar-brand href="#"><span class="bi-brand">Sylvain Prigent's page</span></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav> 
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/home">Resume</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/skills ">Skills </router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/projects">Projects</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/conferences">Conferences</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/journals">Journals</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/patents">Patents</router-link></b-nav-item>
        <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/talks">Talks</router-link></b-nav-item>
        <!-- <b-nav-item class="nav-item"><router-link class="nav-link bi-nav-item" to="/tutorials">Tutorials</router-link></b-nav-item> -->
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  <div class="bi-space">
  </div>
</div>
</template>

<script>
export default {
  name: 'SiteNavbar',
  props: {
  },
  methods: {
  }
}
</script>

<style scoped>
.bi-brand {
  color: #555555;
  font-weight: bold;
}
.bi-nav-item {
    text-transform: uppercase;
}
.bi-space {
  height: 12px;
}
.navbar.navbar-light.bg-light{
    background-color: #ffffff!important;
    border-bottom: 1px solid #e1e1e1;
 }
</style>