<template>
<div>
    <div class="col-12 sp-publi-item">
        <span class="sp-publi-title"><a v-bind:href="item.link">{{item.title}}</a></span><br />
        <span class="sp-publi-authors">{{item.authors}}</span><br />
        <span class="sp-publi-journal">{{item.journal}}</span><br />
        <div v-if="item.code">
          <span class="sp-publi-code">[<a :href="item.code">code</a>]</span><br />
        </div>  
    </div>
</div>

</template>

<script>
export default {
  name: 'PubliItem',
  props: {
    item : {type: Object, required: true}
  },
  data: function(){
      return {
      }
  },
  methods: {
  }
}
</script>

<style scoped>
  .sp-publi-item{
    margin-bottom: 14px;
  }
  .sp-publi-title{
    font-size: 16px;
    font-weight: bold;
  }
  .sp-publi-authors{
    font-size: 16px;
    font-weight: italic;
  }
  .sp-publi-journal{
    font-size: 16px;
    font-weight: italic;
  }
  
</style>