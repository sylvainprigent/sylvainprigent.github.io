<template>
<div class="sp-sidebar-div">
    <div class="sp-avatar-div">
    <img src="~@/assets/avatar.png" alt="" width="150" height="150" class="rounded-circle"><br />
    <b>Sylvain Prigent</b> <br />
    Research engineer <br />
    </div>
    <div class="sp-contact-div">
        <span><i class="fas fa-map-marker-alt"></i></span> Rennes, France <br />
        <span><i class="fas fa-envelope"></i></span> <a class="sp-contact-link" href="mailto:sylvain.prigent@inria.fr">Email</a> <br />
        <span><i class="fab fa-linkedin"></i></span> <a class="sp-contact-link" href="https://fr.linkedin.com/in/sylvain-prigent">Linkedin</a> <br />
        <span><i class="fab fa-github"></i></span> <a class="sp-contact-link" href="https://www.github.com/sylvainprigent">GitHub</a> <br />
    </div>

</div>
</template>

<script>
export default {
  name: 'SiteNavbar',
  props: {
  },
  methods: {
    resume: function(){
        this.$emit("home");
    },
    projects: function(){
        this.$emit("projects");
    },
    conferences: function(){
        this.$emit("conferences");
    },
    journals: function(){
        this.$emit("journals");
    },
    talks: function(){
        this.$emit("talks");
    },
    tutorials: function(){
        this.$emit("tutorials");
    }
  }
}
</script>

<style scoped>
.sp-sidebar-div{
    padding-left: 50px;
}
.sp-avatar-div{
    padding-top: 50px;
}
.sp-contact-div{
    padding-top: 24px;
}
.sp-contact-link{
    color: #555555;
}
</style>