<template>
<div>
    <div class="col-12">
        <div class="sp-cv-title-bullet"></div> 
        <div class="sp-cv-title">{{item.title}}</div> 
        <div class="text-primary sp-cv-period"></div>
    </div>
    <div class="col-12">
        <div class="sp-cv-description">
            <ul>
                <li v-for="item in item.items" :key="item.content">
                    {{ item.content }}
                </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'SkillsItem',
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
  .sp-cv-title{
    display:inline-block;
    font-size: 22px;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 7px;
  }
  .sp-cv-period{
    display:inline-block;
    font-size: 22px;
    font-weight: bold;
  }
  .sp-cv-title-bullet{
    display:inline-block;
    background: #0587fd;
    border-radius: 50%;
    width: 14px;
    height: 14px;
  }
  .sp-cv-description{
    margin-left: 6px;
    border-left: 2px solid #0587fd;
  }
</style>