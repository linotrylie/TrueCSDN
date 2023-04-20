<template>
  <div class='article-list'>
    <div class='main'>
      <Article></Article>
    </div>
    <div class='left-content'>
      <Author></Author>
      <Recommend type='news'></Recommend>
      <Recommend type='download'></Recommend>
      <Ad></Ad>
    </div>
  </div>
</template>

<script>
import Article from '@/layout/article/Article.vue'
import Ad from '@/layout/home/Ad.vue'
import Recommend from '@/layout/home/Recommend.vue'
import Author from '@/layout/home/RecommendAuthor.vue'
export default {
  name: 'List',
  components: { Author, Ad, Article,Recommend },
  data() {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.article-list {
  width: 75%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  .main {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
  .left-content {
    width: 20%;
    margin-left:10px;
    height: auto;
  }
}
</style>
