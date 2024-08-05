<template>
<div class="row align-items-center sp-pr-item">
    <div class="col-md-4">
      <div class="sp-pr-title">{{item.title}}</div> 
      <img :src="require('@/assets/'+item.image)" alt="" width="300px" height="250px" class="rectangle sp-pr-thumb"><br />
    </div>  
    <div class="col-md-8">
      <div class="row">
        
        <div class="col-md-12">
          <div class="row">
            <h3>{{item.title}}</h3>
          </div>  
          <div class="row">
            {{item.context}}
            <br />
          </div> 

          <div v-if="item.methodology != ''" class="row">
            <h4>Methodology</h4>
          </div>  
          <div  v-if="item.methodology != ''" class="row">
            <ul>
                <li v-for="item in item.methodology" :key="item.content">
                    {{ item.content }}
                </li>
            </ul>
          </div> 

          <div v-if="item.tasks != ''" class="row">
            <h4>Tasks</h4>
          </div>  
          <div v-if="item.tasks != ''" class="row">
            <ul>
                <li v-for="item in item.tasks" :key="item.content">
                    {{ item.content }}
                </li>
            </ul>
          </div> 

          <div v-if="item.deliverables != ''" class="row">
            <h4>Deliverable</h4>
          </div>  
          <div v-if="item.deliverables != ''" class="row">
            <ul>
                <li v-for="item in item.deliverables" :key="item.content">
                    {{ item.content }}
                </li>
            </ul>
          </div> 

        </div>
      </div>
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
  .sp-pr-item{
    border-top: 1px solid #e1e1e1;
  }
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