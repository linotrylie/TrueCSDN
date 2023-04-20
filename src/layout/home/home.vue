<template>
  <div class='main-content'>
    <div class='header-main-content'>
      <Banner></Banner>
      <LatestNews></LatestNews>
    </div>
    <div class='mid-main-content'>
      <div class='left-main-content'>
        <Article></Article>
      </div>
      <div class='right-main-content'>
        <Notice></Notice>
        <Ad></Ad>
        <Recommend type='news'></Recommend>
        <Recommend type='download'></Recommend>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/layout/home/Banner.vue'
import LatestNews from '@/layout/home/LatestNews.vue'
import Article from '@/layout/article/Article.vue'
import Notice from '@/layout/home/Notice.vue'
import Ad from '@/layout/home/Ad.vue'
import Recommend from '@/layout/home/Recommend.vue'

export default {
  components: {
    Recommend,
    Ad,
    Notice,
    Banner,
    LatestNews,
    Article,
  },
  name: 'home',
  data() {
    return {

    }
  },
  mounted() {

  },
  created() {
  }
}
</script>

<style lang='scss' scoped>
.main-content {
  width: 60%;
  height: auto;
  margin: 0 auto;

  .header-main-content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
  }

  .mid-main-content {
    width: 100%;
    height: auto;
    margin-top: 18px;
    display: flex;
    flex-direction: row;

    .left-main-content {
      width: 70%;
      height: auto;
      margin-right: 2%;
    }

    .right-main-content {
      width: 28%;
      height: auto;
      //background: #fff;
    }
  }

}
</style>
