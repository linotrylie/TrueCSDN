<template>
  <div>
    <div class='recommend'>
      <div class='title'>
        <p>{{ title }}</p>
        <router-link :to="{name:'article-list'}" v-if="this.type==='news'">
          查看更多
        </router-link>
        <router-link :to="{name:'software'}" v-else>
          查看更多
        </router-link>
      </div>
      <ul class='list-unstyled' v-if="this.type==='news'">
        <li v-for='(item,index) in list'>
          <span>【<router-link :to="{name:'article-list',query: {cate:item.cate}}">{{item.cate}}</router-link>】</span>
          <router-link :to="{name:'article-info',params:{title:item.title,id:item.id}}">
            {{item.title}}
          </router-link>
        </li>
      </ul>
      <ul class='list-unstyled' v-else>
        <li v-for='(item,index) in list'>
          <span>【<router-link :to="{name:'software',query: {cate:item.cate}}">{{item.cate}}</router-link>】</span>
          <router-link :to="{name:'software-info',params:{title:item.title,id:item.id}}">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type'],
  name: 'Recommend',
  data() {
    return {
      title: '',
      list:{}
    }
  },
  mounted() {

  },
  methods: {
    loadRecommand() {
      var t = 0;
      if (this.type === 'news') {
        this.title = '最新推荐'
        t = 1999;
      } else if (this.type === 'download') {
        this.title = '下载榜单'
        t = 2001
      }
      let params = {
        type:t
      }
      this.$api.article.recommendList(params).then(res=>{
        if(res.data.code) {
          this.list = res.data.data.list.data;
        }else{
          this.$notify.error(res.data.msg);
        }
      }).catch(err => {
        this.$notify.error('网络错误！');
      })
    },
  },
  created() {
    this.loadRecommand()
  },
}
</script>

<style lang='scss' scoped>
.recommend {
  width: 100%;
  height: 310px;
  background: #fff;
  margin-top: 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .title {
    font-size: 18px;
    height: 35px;
    line-height: 35px;
    box-shadow: 1px 1px 1px #efeaea;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;

    p {
      width: 50%;
    }

    a {
      font-size: 10px;
      display: inline-block;
    }

    a:hover {
      color: #4e81f6;
    }
  }

  .list-unstyled {
    li {
      text-indent: .5em;
      overflow: hidden;
      white-space: normal;
      word-break: break-word;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      margin-bottom: 6px;
    }

    li:last-child {
      margin-bottom: 0;
    }

    li a:hover {
      color: #4e81f6;
    }
  }
}
</style>
