<template>
  <div id="app">
    <img src="../assets/logo.png"/>
    <h1>{{title}}</h1>
    <h3>{{msg}}</h3>
    <el-button type="primary" round @click="onclick">进入</el-button>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  data () {
    return {
      title: 'Cloud Functiom',
      msg: 'Welcome to use the simple Cloud Function'
    }
  },
  methods: {
    onclick () {
      this.$router.push({ path: '/MainPage' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
