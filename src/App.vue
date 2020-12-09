<template>
  <div id="app">
    <input type="text" placeholder="请搜索"
      @input="searchInput($event)"
    />
    <List ref="child" :msg="course" :resurceArr="resurceArr"/>
  </div>
</template>

<script>
import List from './components/List.vue'
import course from './dataCourse';
import {throttle} from './throttle'; // 导入节流函数

export default {
  name: 'App',
  components: {
    List
  },
  data() {
    return {
      course,
      resurceArr:[]
    }
  },
  methods: {
    searchInput:throttle(function(e) {
      // 父组件通过 $refs 给子组件传递事件
      this.$refs.child.parentMsg(e.target.value)
    },3000)
  },
}
</script>

<style>
</style>
