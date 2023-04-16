<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>
<script>
import Layout from '@/layout/index.vue'
export default {
  name: 'App',
  components: { Layout },
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
  *{
    padding: 0;
    margin: 0;
  }
  #app {
    background: #f5f2f2;
  }
</style>
