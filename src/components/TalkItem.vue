<template>
<div>
    <div class="col-12">
        <div class="sp-tk-bullet"></div> 
        <div class="sp-tk-date">{{item.date}}</div> 
        <div class="sp-tk-txt">{{item.text}}</div> 
    </div>
</div>

</template>

<script>
export default {
  name: 'TalkItem',
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
  .sp-tk-bullet{
    display:inline;
    float: left;
    background: #0587fd;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-top: 7px;
  }
  .sp-tk-date{
    display:inline;
    float: left;
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 7px;
  }
  .sp-tk-text{
    display:inline;
    float: left;
    margin-left: 5px;
    border-left: 2px solid #0587fd;
  }
</style>