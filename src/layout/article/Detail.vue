<template>
  <div>
    <div class='main'>
      <div class='article'>
        <div class='header'>
          <div class='avatar'>
            <el-avatar src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'></el-avatar>
          </div>
          <div class='left'>
            <div class='author-info'>
              <p>
                <router-link to='/home'>Linotrylie1234123412341324</router-link>
              </p>
              <el-tag v-for='item in tags' :color='item.color' :type='item.type'>{{ item.name }}</el-tag>
            </div>
            <div class='article-info'>
              <p>2023-4-16 20:05:30&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;阅读 {{ readCount }}</p>
            </div>
          </div>
          <div class='mid'></div>
          <div class='right'>
            <div class='follow'>
              <el-button v-show='!IsFollow' :loading='true' type='primary'>关注</el-button>
              <el-button v-show='IsFollow' disabled>已关注</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class='markdown-content'>
          <mymarked :dompurify="false" :markedOptions="{ breaks: true }" :tocNav="true" :initialValue="html"></mymarked>
        </div>
      <div class='left-content'>
        <div class='nav'>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Post } from '@/api/index.js'
import mymarked from './Markdown.vue';
export default {
  name: 'Detail',
  components: {
    mymarked
  },
  props: ['id'],
  data() {
    return {
      PostId: 1,
      tags: [
        { name: 'V5', type: 'success', color: '#fff' },
        { name: '会员', type: 'success', color: '#fff' },
        { name: '大师', type: 'success', color: '#fff' },
        { name: 'Coder', type: 'success', color: '#fff' },
      ],
      readCount: 1238,
      IsFollow: true,
      html: '',//文章内容
    }
  },
  mounted() {
  },
  methods: {
    LoadArticle() {
      let url = 'https://www.code-nav.cn/api/post/list/page/vo'
      let postData = {
        current: 1,
        reviewStatus: 1,
        sortField: 'createTime',
        sortOrder: 'descend',
      }
      Post(url, postData).then(res => {
        this.html = res.data.records[4].content

      }).catch(err => {
        console.log(err)
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning',
        })
      })

    }
  },
  created() {
    this.PostId = this.$route.params.id
    this.LoadArticle()
  },
  computed: {

  }
}
</script>

<style lang='scss' scoped>
.main {
  width: 70%;
  height: auto;
  margin: 0 auto;
  .article {
    width: 80%;
    height: auto;
    margin-top: 20px;
    background: #fff;
    .header {
      width: 100%;
      height: 70px;
      box-shadow: 1px 1px 1px #efeaea;
      display: flex;
      flex-direction: row;
      .avatar {
        width: 5%;
        margin-left: 15px;
        margin-top: 15px;
      }
      .left {
        width: 55%;
        height: 70px;
        margin-left: 15px;
        .author-info {
          width: 100%;
          height: 40px;
          display: flex;
          flex-direction: row;
          padding: 10px;
          p {
            width: 25%;
            height: 30px;
            overflow: hidden;
            white-space: normal;
            word-break: break-word;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            padding: 5px;
          }

          .el-tag {
            margin-left: 10px;
          }
        }

        .article-info {
          width: 100%;
          height: 30px;

          p {
            font-size: 10px;
            color: #66696c;
            line-height: 30px;
            margin-left: 15px;
          }
        }
      }
      .right {
        .follow {
          padding: 15px;
        }
      }
    }
  }
  .markdown-content{
    margin-top: 10px;
    width: 80%;
    height: auto;
    background: #fff;
  }
  .left-content {
    width: 30%;
    height: auto;
    margin-top: 20px;
    margin-left: 10px;
    position: relative;
  }


}
</style>