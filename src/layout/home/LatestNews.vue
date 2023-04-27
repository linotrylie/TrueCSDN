<template>
  <div class='latest-news-content'>
    <div class='latest-news-content-title'>最热文章</div>
    <ul class='list-unstyled'>
      <li v-for='(item,index) in list'>
        <span>【<router-link :to="{name:'article-list',query: {cate:item.cate}}">{{item.cate}}</router-link>】</span>
        <router-link :to="{name:'article-info',params:{title:item.title,id:item.id}}">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LatestNews',
  data() {
    return {
      list:{}
    }
  },
  methods:{
    loadHotList() {
      this.$api.article.hotList().then(res=>{
        if(res.data.code) {
          this.list = res.data.data.list.data;
          console.log(this.list,res.data)
        }else{
          this.$notify.error(res.data.msg);
        }
      }).catch(err => {
        this.$notify.error('网络错误！');
      })
    }
  },
  created() {
    this.loadHotList()
  }
}
</script>

<style lang='scss' scoped>
.latest-news-content {
  margin-right: 0;
  max-width: 38%;
  background: #fff;
  text-indent: 1em;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .latest-news-content-title {
    height: 30px;
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-shadow: 1px 1px 1px #efeaea;
  }

  .list-unstyled {
    li {
      overflow: hidden;
      white-space: normal;
      word-break: break-word;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      margin-bottom: 6px;
    }

    li:last-child {
      margin-bottom: 10px;
    }

    li a:hover {
      color: #4e81f6;
    }
  }
}
</style>
