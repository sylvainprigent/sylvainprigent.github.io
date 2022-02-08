<template>
<div class="row">
    <div class="col-4 ">
      <img :src="require('@/assets/'+item.image)" alt="" width="300px" height="250px" class="rectangle sp-pr-thumb"><br />
    </div>  
    <div class="col-8">
        <div class="sp-pr-title">{{item.title}}</div> 
        <div class="sp-pr-desc">{{item.description}}</div> 
        <div class="sp-pr-data"><b>Data:</b> {{item.data}}</div> 
        <div v-if="item.link != ''" class="sp-pr-link"><b>Publication:</b> <a :href="item.link">here</a></div> 
        <div v-if="item.code != ''" class="sp-pr-code"><b>Code:</b> <a :href="item.code">here</a></div>
    </div>
</div>

</template>

<script>
export default {
  name: 'ProjectItem',
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
  .sp-pr-title{
    font-size: 22px;
    font-weight: bold;
  }
  .sp-pr-desc{
    margin-top: 7px;
  }
  .sp-pr-data{
    margin-top: 14px;
  }
  .sp-pr-link{
    margin-top: 1px;
  }
  .sp-pr-code{
    margin-top: 1px;
  }
  .sp-pr-thumb{
    margin-bottom: 7px;
    background-color: #ffffff;
    border: 2px solid #e1e1e1;
  }
</style>