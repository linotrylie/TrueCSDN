<template>
  <div>
    <div class='title'>
      <p>公告</p>
      <div class='content' v-html='content'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  data() {
    return {
      content: '',
    }
  },
  created() {
    this.content = '会员享有本站所有内容。 已加入<a href="https://yupi.icu" target="_blank" rel="noreferrer"> 编程导航知识星球 </a>的朋友可以<a href="/vip_code_apply"> 点此免费获取一年会员！</a>'
  },
}
</script>

<style lang='scss' scoped>
.title {
  min-height: 200px;
  background:#fff;
  p {
    font-size: 18px;
    font-weight: 500;
    box-shadow: 1px 1px 1px #efeaea;
    text-align: center;
    height: 30px;
  }
  .content {
    margin-top:5px;
    height:auto;
    text-indent:1em;
    ::v-deep a {
      color: #4e81f6;
    }
    ::v-deep a:hover {
      color: #4670de;
    }
  }
}
</style>