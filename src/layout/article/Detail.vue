<template>
  <div class='body'>
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
              <el-tag v-for='(item,index) in tags' :key='index' :color='item.color' :type='item.type'>{{ item.name }}
              </el-tag>
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

      <mymarked :dompurify='false' :initialValue='html' :markedOptions='{ breaks: true }' :tocNav='true'></mymarked>
      <div class='interaction-layout'>
        <Interaction :id='PostId' :title='title' type='article'></Interaction>
      </div>
      <div ref='comment' :style='wrapStyle' class='comment-wrap'>
        <Comment
          v-model='data'
          :before-delete='deleteComment'
          :before-like='like'
          :before-submit='submit'
          :props='commentData'
          :upload-img='uploadImg'
          :user='currentUser'
        />
      </div>
    </div>
    <div class='left-content'>
      <Download v-show='downloadList.length > 0' :downloadList='downloadList'></Download>
      <Recommend type='news'></Recommend>
      <Recommend type='download'></Recommend>
      <Ad></Ad>
    </div>
  </div>
</template>
<script>
import { Post } from '@/api/index.js'
import mymarked from './Markdown.vue'
import Ad from '@/layout/home/Ad.vue'
import Recommend from '@/layout/home/Recommend.vue'
import Download from '@/layout/article/Download.vue'
import Comment from '@/layout/comment/index.vue'
import { EXAMPLE_DATA } from '../comment/data.js'
import { Notification } from 'element-ui'
import { CONSTANT } from '@/config/constant.js'
import Interaction from '@/layout/interaction/Index.vue'

export default {
  name: 'Detail',
  components: {
    Interaction,
    Download,
    Comment,
    Recommend,
    Ad,
    mymarked,
  },
  props: ['id'],
  data() {
    const users = [
      {
        name: 'Up&Up',
        avatar: '',
        author: false,
      },
      {
        name: '我叫白云',
        avatar: '',
      },
      {
        name: '我叫黑土',
        avatar: '',
      },
      {
        name: 'NARUTO',
        avatar: '',
      },
    ]
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
      IsFollowed: false,
      html: '',//文章内容
      title: '',//文章标题
      data: [],
      commentData: {
        id: '_id',
        content: 'content',
        imgSrc: 'imgSrc',
        children: 'childrenComments',
        likes: 'likes',
        liked: 'liked',
        reply: 'reply',
        createAt: 'createAt',
        user: 'visitor',
      },
      currentUser: users[0],
      users,
      wrapStyle: '',
      downloadList: [
        {
          url: 'https://pan.baidu.com/s/1ENVo2fsAL2yz_8hi4dU3xw?pwd=t899',
          title: '百度网盘',
        },
        {
          url: 'https://pan.baidu.com/s/1ENVo2fsAL2yz_8hi4dU3xw?pwd=t899',
          title: '本地下载',
        },
        {
          url: 'https://pan.baidu.com/s/1ENVo2fsAL2yz_8hi4dU3xw?pwd=t899',
          title: '阿里云盘',
        },
        {
          url: 'https://pan.baidu.com/s/1ENVo2fsAL2yz_8hi4dU3xw?pwd=t899',
          title: '江苏电信',
        },
      ],
    }
  },
  mounted() {
    // const header = this.$refs.header
    // this.wrapStyle = `height: calc(100vh - ${header.clientHeight + 20}px)`
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
        this.html = res.data.records[5].content
        if (res.data.records[5].title === null) {
          this.title = res.data.records[5].tags.join('')
        } else {
          this.title = res.data.records[5].title
        }

      }).catch(err => {
        console.log(err)
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning',
        })
      })

    },
    async submit(newComment, parent, add) {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ newComment, parent })
        }, 300)
      })
      add(Object.assign(res.newComment, { _id: new Date().getTime() }))
      console.log('addComment: ', res)
    },
    async like(comment) {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(comment)
        }, 0)
      })
      console.log('likeComment: ', res)
    },
    async uploadImg({ file, callback }) {
      const res = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          resolve(reader.result)
        }
        reader.onerror = () => {
          reject(reader.error)
        }
      })
      callback(res)
      console.log('uploadImg： ', res)
    },
    async deleteComment(comment, parent) {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ comment, parent })
        }, 300)
      })
      console.log('deleteComment: ', res)
    },
    addData(times) {
      setTimeout(() => {
        this.data = new Array(times).fill(EXAMPLE_DATA).flat(Infinity)
      }, 0)
    },
    shareArticle(val) {
      let that = this
      let message = '我在' + CONSTANT.APPNAME + '发现了『 ' + that.title + ' 』💎 快来看看 ' + window.location.href
      this.$copyText(message).then(function(e) {
        Notification.success({
          title: '复制成功，快去分享吧',
          message: '复制成功，快去分享吧',
        })
      }).catch(err => {
        Notification.error({
          title: '浏览器不支持该功能',
          message: '请使用最新浏览器',
        })
      })
    },
    likeArticle() {

    },
    collectArticle() {

    },
    handleDropdown(command) {
      if (command === 'repo') {
        this.dialogFormVisible = true
      }
    },
    handleSubmitRepo() {
      console.log(this.repo)
      this.dialogFormVisible = false
    },
  },
  created() {
    this.PostId = this.$route.params.id
    this.LoadArticle()
    this.addData(1)
  },
  computed: {},
}
</script>

<style lang='scss' scoped>
.body {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
}

.main {
  width: 70%;
  height: auto;

  .article {
    width: 75%;
    height: auto;
    margin: 0 10px 10px 300px;
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

      .mid {
        width: 20%;
      }

      .right {
        .follow {
          padding: 15px;
        }
      }
    }
  }

  .interaction-layout {
    width: 75%;
    margin: 0 10px 10px 300px;
  }

  .comment-wrap {
    width: 75%;
    height: auto;
    margin: 0 10px 10px 300px;
    background: #fff;
  }
}

.left-content {
  width: 18% !important;
  height: auto;
}
</style>