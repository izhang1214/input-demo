<template>
  <div>
    <ul v-if="resultArr.length>0">
      <li v-for="(item,index) in resultArr" :key="index">
        <div>{{item.name}}</div>
        <div>{{item.price}}</div>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(item,index) in arr_course" :key="index">
        <div>{{item.name}}</div>
        <div>{{item.price}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props:{
    msg:Array,
    resurceArr:Array
  },
  data() {
    return {
      arr_course: this.msg,
      resultArr:this.resurceArr
    }
  },
  methods: {
    parentMsg(value) {
      this.resultArr = this.arr_course.filter(function(item){
        if(item.name.includes(value)){
          return item
        }
      })
      console.log(this.resultArr );
    }
  },
}
</script>

<style scoped>
ul li{
  margin: 10px;
}
</style>
