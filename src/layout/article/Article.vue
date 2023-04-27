<template>
  <div class='article'>
    <div class='tag'>
      <el-tabs v-model='ActiveName' @tab-click='handleClick' tab-position='bottom'>
        <el-tab-pane v-for='item in Tabitems' :label='item.name' :name='item.name' :key='item.id'>
        </el-tab-pane>
      </el-tabs>
      <div class='filter'>
        <span>筛选：</span>
        <el-radio-group v-model="radio" @change='changeRadio'>
          <el-radio :label="3">点赞数</el-radio>
          <el-radio :label="6">收藏数</el-radio>
          <el-radio :label="9">评论数</el-radio>
          <el-radio :label="12">下载数</el-radio>
        </el-radio-group>
      </div>
      <div class='article-content'>
        <div v-for='item in ArticleList' class='article-content-item'>
          <div v-if="item.cover_img === ''" class='article-content-item-image'>
            <el-image></el-image>
          </div>
          <div v-else class='article-content-item-image'>
            <el-image :src='item.cover_img'></el-image>
          </div>
          <div class='item-left'>
            <div class='title'>
              <router-link :to="{name:'article-info',params:{title:item.title,id:item.id}}">
                {{item.title}}
              </router-link>
            </div>
            <div class='content'>
              {{item.desc}}
            </div>
            <div class='thumb'>
              <el-row :gutter='4'>
                <el-col :span='6'>
                  <div class='like'>
                    <div class='like-svg' v-show='!is_like'>
                      <svg aria-hidden='true' data-icon='like' fill='currentColor' focusable='false' height='1em'
                           viewBox='64 64 896 896' width='1em'>
                        <path
                          d='M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z'></path>
                      </svg>
                    </div>
                    <span>&nbsp;{{ item.like }}</span>
                  </div>
                </el-col>
                <el-col :span='6'>
                  <div class='comment' >
                    <div class='comment-svg'>
                      <svg aria-hidden='true' data-icon='message' fill='currentColor' focusable='false' height='1em'
                           viewBox='64 64 896 896' width='1em'>
                        <path
                          d='M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z'></path>
                      </svg>
                    </div>
                    <span>&nbsp;{{item.comment_num}}</span>
                  </div>
                </el-col>
                <el-col :span='6'>
                  <div class='collect'>
                    <div class='collect-svg'>
                      <svg aria-hidden='true' data-icon='star' fill='currentColor' focusable='false' height='1em'
                           viewBox='64 64 896 896' width='1em'>
                        <path
                          d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z'></path>
                      </svg>
                    </div>
                    <span>&nbsp;{{item.collect}}</span>
                  </div>
                </el-col>
                <el-col :span='6'>
                  <div class='author'>
                    <p>{{ item.user.nickname }}</p>
                  </div>
                </el-col>
              </el-row>


            </div>
          </div>
          <div v-show='item % 2 > 0' class='tag'>
            <span class='tag-text'>精选</span>
            <div class='tag-corner'></div>
          </div>
        </div>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        v-model:currentPage="currentPage"
        :page-sizes="[5,10, 15, 20]"
        :page-size="PageSize"
        layout="total,sizes, prev, pager, next"
        :total="totalCount"
        class="paging"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { checkLogin } from '@/utils/auth.js'

export default {
  name: 'Article',
  data() {
    return {
      Tabitems: [],
      ActiveName: '全部',
      ArticleList:[],
      PerPage:[],
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      src1: '1',
      radio:0,
      is_like:false,
      is_collect:false,
      // 默认显示第一页
      currentPage: 1,
      // 总的数据条数
      totalCount: 0,
      // 默认每页显示的条数（可修改）
      PageSize: 10,
    }
  },
  methods: {
    handleClick(tab,event) {
      this.loadArticle();
    },
    loadArticle() {
      console.log(this.ActiveName);
      let params = {
        cate_name:this.ActiveName,
        radio:this.radio,
        page:this.currentPage,
        per_page:this.PageSize
      }
      this.$api.article.articleList(params).then(res => {
        if(res.data !== "" && res.data.code) {
          this.ArticleList = res.data.data.data
          this.totalCount = res.data.data.total
        }else{
          this.$notify.error(res.data.msg);
        }
      }).catch(err => {
        console.log(err);
        this.$notify.error('网络错误！');
      })
    },
    changeRadio(val) {
      this.radio = val
      this.loadArticle();
    },
    loadTag() {
      this.$api.article.tagList().then(res=>{
        if(res.data.code) {
          this.Tabitems = res.data.data;
          // this.ActiveName = this.Tabitems[0].name
        }else{
          this.$notify.error(res.data.msg);
        }
      }).catch(err => {
        this.$notify.error('网络错误！');
      })
    },
    // 修改每页显示的条数
    handleSizeChange(side) {
      // 改变每页显示的条数
      this.PageSize = side;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1;
      this.loadArticle();
    },
    // 显示第几页
    handleCurrentChange(pageNumber) {
      // 改变默认的页数
      this.currentPage = pageNumber;
      this.loadArticle();
    },
    handleInteraction(id,val, num) {
      if(checkLogin()){
        this.$router.push('/login');
        return;
      }
      let params = {
        id: id,
        type: val,
        num: num,
      }
      this.$api.interaction.postInteraction(params).then(res => {
        if (res.data.code === 0) {
          this.$notify.error(res.data.msg)
          return
        }
        if (val === 1) {
          this.is_like = num > 0;
        } else {
          this.is_collect = num > 0;
        }
      }).catch(err => {
        console.log(err)
        this.$notify.error('网络错误！')
      })
    },
  },
  created() {
    this.ActiveName = this.$route.query.cate
    this.loadTag();
    this.loadArticle();
  },
  beforeCreate() {

  },
  mounted() {
  }
}
</script>

<style lang='scss' scoped>
.article {
  display: flex;
  justify-content: space-between;
  min-height: 45px;
  margin-bottom: 5px;

  p {
    font-size: 18px;
    text-indent: 1em;
    width: 90px;
    height: 30px;
    line-height: 30px;
    margin-top: 8px;
  }

  .tag {
    width: 100%;
    .el-tabs {
      background: #fff;
      width: 100%;
      ::v-deep .el-tabs__content {
        padding: 0 !important;
      }
      ::v-deep .el-tabs__header {
        margin-top: 0 !important;
      }
    }
    .filter {
      width: 100%;
      height: auto;
      //margin-top: 5px;
    }
  }

  .article-content {
    margin-top: 15px;
    width: 100%;

    .article-content-item {
      width: 100%;
      height: 183px;
      background: #fff;
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      .article-content-item-image {
        width: 25%;
        height: 183px;
        margin-left: 15px;

        .el-image {
          width: 100%;
          height: 150px;
          margin-top: 15px;
        }
      }

      .item-left {
        width: 67%;
        height: 183px;

        .title {
          font-size: 18px;
          font-weight: 700;
          color: #222226;
          overflow: hidden;
          white-space: normal;
          word-break: break-word;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          line-height: 25px;
          height: 25px;
          width: 100%;
          text-indent: 1em;
          margin-top: 15px;
        }

        .title a:hover {
          color: #4e81f6;
        }

        .content {
          font-size: 14px;
          height: 60px;
          color: #4c576b;
          overflow: hidden;
          white-space: normal;
          text-indent: 1em;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          word-break: break-word;
          display: -webkit-box;
          margin-left: 10px;
          margin-top: 10px;
        }

        .thumb {
          width: 75%;
          height: 20px;
          margin-top: 30px;
          display: flex;
          margin-left: 10%;
          flex-direction: row;
          justify-content: space-around;
          //background: #4e81f6;
          .like, .comment, .collect, .author {
            display: flex;
            flex-direction: row;
            width: 90px;
            height: 20px;
            margin-top: 5px;

            .like-svg, .comment-svg, .collect-svg {
              width: 20px;
              height: 20px;
              margin-top: 1px;
              margin-left: 28px;
            }

            span {
              display: inline-block;
              font-size: 14px;
              font-weight: 300;
              width: 70px;
              height: 20px;
              line-height: 20px;
              margin-top: 1px;
            }

            p {
              font-size: 14px;
              font-weight: 300;
              width: 70px;
              height: 20px;
              line-height: 20px;
              margin-top: 1px;
            }
          }

          .like:hover, .comment:hover, .collect:hover {
            box-shadow: 2px 2px 2px #f5f2f2;
          }
        }
      }

      .tag {
        box-sizing: border-box;
        margin: 0;
        width: 5%;
        color: rgba(0, 0, 0, .85);
        font-size: 14px;
        font-variant: tabular-nums;
        list-style: none;
        font-feature-settings: "tnum", "tnum";
        top: 8px;
        height: 22px;
        padding: 0 8px;
        color: #fff;
        background-color: #1890ff;
        line-height: 22px;
        white-space: nowrap;
        border-radius: 2px;
      }

    }
  }
}
</style>
