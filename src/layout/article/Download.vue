<template>
  <div class='download-body'>
    <div class='title'>
      <p>下载地址</p>
    </div>
    <div class='list'>
      <el-button type='primary' v-for='(item,index) in downloadList' @click='handleDownload(item.url)' :key='index'>{{ item.title }}<i
        class='el-icon-download el-icon--right'></i></el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['downloadList'],
  name: 'Download',
  data() {
    return {}
  },
  methods: {
    handleDownload(url) {
      window.open(url, '_blank');
    }
  },
  mounted() {
  },
  created() {
  },
}
</script>

<style lang='scss' scoped>
.download-body {
  width: 100%;
  height: auto;
  background: #fff;
  margin-top: 15px;
  .title {
    width: 100%;
    font-size: 18px;
    text-indent: 1em;
    height: 35px;
    line-height: 35px;
    box-shadow: 1px 1px 1px #efeaea;
    margin-bottom: 5px;
  }
  .list{
    width: 100%;
    height: 310px;
    .el-button {
      margin:20px;
    }
  }
}
</style>