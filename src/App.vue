<template>
  <div id="app">
    <h2 class="active">2333</h2>
    <router-link active-class="active" to="/home">首页</router-link>
    <router-link :to="'/about/'+id" replace>关于</router-link>

    <router-view />
    <!-- <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button>-->
  </div>
</template>

<style >
.active {
  color: white;
}
</style>
<script>
export default {
  mame: 'App',
  data () {
    return {
      id: 'l'
    }
  },
  methods: {
    homeclick () {
      console.log(this.$router)
      this.$router.replace('/home')
    },
    aboutclick () {
      this.$router.replace('/about')
    }
  }
}
</script>
