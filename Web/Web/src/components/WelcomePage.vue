<template>
  <div id="app">
    <img src="../assets/logo.png"/>
    <h1>{{title}}</h1>
    <h3>{{msg}}</h3>
    <!-- <p>{{getContent()}}</p> -->
    <el-button type="primary" round @click="onclick">Click to Enter</el-button>
  </div>
</template>

<script type = "text/javascript">
export default{
  name: 'WelcomePage',
  data () {
    return {
      title: 'Cloud Function',
      msg: 'Welcome to use the Cloud Function',
      word: {}
    }
  },
  mounted: function () {
    this.$message('欢迎您')
  },
  methods: {
    onclick () {
      // this.$router.push({ path: '/MainPage' })
      // this.$message('哈哈哈')
      this.$axios.get('https://xauat.site/Farm/lsp').then(res => {
        alert('success:' + res.data)
      }).catch(err => {
        alert(err)
      })
    },
    getContent () {
      return this.data.word.data[0].content
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
