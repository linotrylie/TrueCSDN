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
        <div class='mid' v-highlight id='highlight'>
          <VueMarkdown  :source='Content' class='markdown-body'></VueMarkdown>
        </div>
      </div>
      <div class='left-content'>
        <div class='nav'>
          <el-card class='mx-auto mt-2 link_cover'>
            <div class='py-4 links'>
              <h3 class='pl-3 pb-3'>目录</h3>
              <ul>
                <li
                  v-for='(nav, index) in navList'
                  :key='index'
                  :class='{ on: activeIndex === index }'
                  @click='currentClick(index)'
                >
                  <a href='javascript:' @click='pageJump(nav.index,nav.title)'>●{{ nav.title }}</a>
                  <div
                    v-if='nav.children.length > 0'
                    class='menu-children-list'
                  >
                    <ul class='nael-list'>
                      <li
                        v-for='(item, idx) in nav.children'
                        :key='idx'
                        :class='{ on: childrenActiveIndex === idx }'
                        @click.stop='childrenCurrentClick(idx)'
                      >
                        <a href='javascript:' @click='pageJump(item.index)'>
                          - {{ item.title }}</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'github-markdown-css/github-markdown.css'
import { Post } from '@/api/index.js'
import VueMarkdown from 'vue-markdown'
import { marked } from 'marked'
let rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
})
export default {
  name: 'Detail',
  components: {
    VueMarkdown,
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
      Content: '',
      article: [],
      html: '',//文章内容
      navList: [],
      activeIndex: 0,
      docsFirstLevels: [],
      docsSecondLevels: [],
      childrenActiveIndex: 0,
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
        this.Content = res.data.records[0].content
        this.html = this.Content
        document.getElementsByTagName(
          'title',
        )[0].innerText = this.article.title
        this.navList = this.handleNavTree(this.html)

        this.getDocsFirstLevels(0)
      }).catch(err => {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning',
        })
      })
      //文章内容获取后渲染目录，避免目录无法及时获取内容
    },
    childrenCurrentClick(index) {
      this.childrenActiveIndex = index
    },
    getDocsFirstLevels(times) {
      // 解决图片加载会影响高度问题
      setTimeout(() => {
        let firstLevels = []
        Array.from(document.querySelectorAll('h3'), (element) => {
          firstLevels.push(element.offsetTop - 60)
        })
        this.docsFirstLevels = firstLevels

        if (times < 8) {
          this.getDocsFirstLevels(times + 1)
        }
      }, 500)
    },
    getDocsSecondLevels(parentActiveIndex) {
      let idx = parentActiveIndex
      let secondLevels = []
      let navChildren = this.navList[idx].children

      if (navChildren.length > 0) {
        secondLevels = navChildren.map((item) => {
          return this.$el.querySelector(`#data-${item.index}`).offsetTop - 60
        })
        this.docsSecondLevels = secondLevels
      }
    },
    getLevelActiveIndex(scrollTop, docsLevels) {
      let currentIdx = null
      let nowActive = docsLevels.some((currentValue, index) => {
        if (currentValue >= scrollTop) {
          currentIdx = index
          return true
        }
      })

      currentIdx = currentIdx - 1

      if (nowActive && currentIdx === -1) {
        currentIdx = 0
      } else if (!nowActive && currentIdx === -1) {
        currentIdx = docsLevels.length - 1
      }
      return currentIdx
    },
    pageJump(id,title) {
      this.titleClickScroll = true
      //这里我与原作者的不太一样，发现原作者的scrollTop一直为0，所以使用了Vuetify自带的goTo事件
      // this.$vuetify.goTo(this.$el.querySelector(`#data-${id}`).offsetTop - 40)
      this.reloadMarkDown()
      const text = this.$el.querySelectorAll(`h5`);
      console.log(text)
      // console.log("text",text)
      // if(text.innerHTML.indexOf(title) > 0) {
      //   text.scrollIntoView({ block: 'start', behavior: 'smooth' })
      // }
      //
      setTimeout(() => (this.titleClickScroll = false), 100)
    },
    currentClick(index) {
      this.activeIndex = index
      this.getDocsSecondLevels(index)
    },
    getTitle(content) {
      let nav = []
      let tempArr = []
      content.replace(/(#+)[^#][^\n]*?(?:\n)/g, function(match, m1) {
        let title = match.replace('\n', '')
        let level = m1.length
        tempArr.push({
          title: title.replace(/^#+/, '').replace(/\([^)]*?\)/, ''),
          level: level,
          children: [],
        })
      })

      // 只处理二级到四级标题，以及添加与id对应的index值，这里还是有点bug,因为某些code里面的注释可能有多个井号
      nav = tempArr.filter((item) => item.level >= 2 && item.level <= 4)


      let index = 0
      return (nav = nav.map((item) => {
        item.index = index++
        return item
      }))
    },
    // 将一级二级标题数据处理成树结构
    handleNavTree() {
      let navs = this.getTitle(this.html)
      let navLevel = [1, 2, 3, 4, 5, 6]
      let retNavs = []
      let toAppendNavList

      navLevel.forEach((level) => {
        // 遍历一级二级标题，将同一级的标题组成新数组
        toAppendNavList = this.find(navs, {
          level: level,
        })

        if (retNavs.length === 0) {
          // 处理一级标题
          retNavs = retNavs.concat(toAppendNavList)
        } else {
          // 处理二级标题，并将二级标题添加到对应的父级标题的children中
          toAppendNavList.forEach((item) => {
            item = Object.assign(item)
            let parentNavIndex = this.getParentIndex(navs, item.index)
            return this.appendToParentNav(retNavs, parentNavIndex, item)
          })
        }
      })
      return retNavs
    },
    find(arr, condition) {
      return arr.filter((item) => {
        for (let key in condition) {
          if (condition.hasOwnProperty(key) && condition[key] !== item[key]) {
            return false
          }
        }
        return true
      })
    },
    getParentIndex(nav, endIndex) {
      for (var i = endIndex - 1; i >= 0; i--) {
        if (nav[endIndex].level > nav[i].level) {
          return nav[i].index
        }
      }
    },
    appendToParentNav(nav, parentIndex, newNav) {
      let index = this.findIndex(nav, {
        index: parentIndex,
      })
      nav[index].children = nav[index].children.concat(newNav)
    },
    findIndex(arr, condition) {
      let ret = -1
      arr.forEach((item, index) => {
        for (var key in condition) {
          if (condition.hasOwnProperty(key) && condition[key] !== item[key]) {
            return false
          }
        }
        ret = index
      })
      return ret
    },
    compiledMarkdown() {
      let index = 0
      console.log()
      let cont = document.getElementsByClassName('markdown-body')[0].innerHTML
      console.log(cont)
      rendererMD.heading = function(text, level) {
        //我比较习惯三级和四级目录，这里看你喜欢
        if (level <= 4) {
          return `<h${level} id='data-${index++}' ref='234'>${text}</h${level}>`
        } else {
          return `<h${level}>${text}</h${level}>`
        }
      }
      return marked(this.content)
    },
    reloadMarkDown() {
      let htmlNav = [];
      let title = ['h1','h2','h3','h4','h5','h6'];
      title.forEach(item => {
        let hn = document.querySelectorAll('#mid > ' + item);
        console.log(hn)
        for (let i = 0; i < hn.length; i++) {
          let level = hn[i].localName
          console.log("tete",level)
          if ( level <= 4) {
            return `<h${level} id='data-${i}'>${text}</h${level}>`
          } else {
            return `<h${level}>${text}</h${level}>`
          }
        }
      })
    }
  },
  created() {
    this.PostId = this.$route.params.id
    this.LoadArticle()

  },
  computed: {
    content() {
      return this.html
    },
  },
}
</script>

<style lang='scss' scoped>
.main {
  width: 60%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: relative;

  .article {
    width: 80%;
    height: 1000px;
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

      .mid {
        width: 20%;
      }

      .right {

        .follow {
          padding: 15px;
        }

      }
    }

    .mid {
      .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 100%;
        margin: 0 auto;
        padding-left: 20px;
        padding-right: 15px;
        padding-top: 40px;
        padding-bottom: 45px;
        margin-bottom: 100px
      }

      //这个要配合移动端 不是很理解
      @media (max-width: 767px) {
        .markdown-body {
          padding: 15px;
        }
      }
    }
  }

  .left-content {
    width: 30%;
    height: auto;
    margin-top: 20px;
    margin-left: 10px;
    position: relative;

    .nav {
      width: 20%;
      height: auto;
      position: fixed;
      ul {

          font-size: 14px;
          font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue","Helvetica","Arial","PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
          width: 100%;
          overflow-x: hidden;
          overflow-y: hidden;
          scrollbar-width: 0;
          max-height: 500px;
          scroll-behavior: smooth;
        list-style-type: none;
        padding: 2px 6px;
      }
      li {
        list-style-type: none;
        margin: 8px 6px;
        display: block;
        color: #bbb;
        transition: all .2s;
        padding-top: 4px;
        padding-bottom: 4px;
        line-height: 2em;
        padding-right: 1.8em;
        cursor: pointer;
      }

      a {
        color: #000;
        text-decoration: none;
      }

      a:hover {
        color: dodgerblue;
      }
      .on {
        color: dodgerblue;
      }

      @media screen and (min-width: 960px) {
        .link {
          padding-top: 100px;
          position: fixed;
          right: 25px;
          top: 100px;
        }
        .link_cover {
          max-height: 400px;
          overflow: scroll;
          overflow-x: hidden;
          overflow-y: visible;
        }
      }
      @media screen and (min-width: 1060px) {
        .link {
          padding-top: 100px;
          position: fixed;
          right: 50px;
          top: 100px;
        }
        .link_cover {
          max-height: 400px;
          overflow: scroll;
          overflow-x: hidden;
          overflow-y: visible;
        }
      }
    }
  }


}

</style>