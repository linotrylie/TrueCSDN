<template>
  <div class='article'>
    <div class='tag'>
      <el-tabs v-model='ActiveName' type='border-card' @tab-click='handleClick'>
        <el-tab-pane v-for='(item,index) in Tabitems' :label='item.label' :name='item.name' :key='index'>
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
      <div v-infinite-scroll='load' class='article-content'>
        <div v-for='item in count' class='article-content-item'>
          <div v-if="src1 === ''" class='article-content-item-image'>
            <el-image></el-image>
          </div>
          <div v-else class='article-content-item-image'>
            <el-image :src='src'></el-image>
          </div>
          <div class='item-left'>
            <div class='title'>
              <router-link to='/article/detail/1'>AIGC技术周报｜图灵测试不是AGI的智力标准；SegGPT：在上下文中分割一切；ChatGPT能玩好文字游戏吗？
              </router-link>
            </div>
            <div class='content'>
              AIGC通过借鉴现有的、人类创造的内容来快速完成内容创作。ChatGPT、Bard等AI聊天机器人以及Dall·E 2、Stable
              Diffusion等文生图模型都属于AIGC的典型案例。「AIGC技术周报」将为你带来最新的paper、博客等前瞻性研究。
            </div>
            <div class='thumb'>
              <el-row :gutter='4'>
                <el-col :span='6'>
                  <div class='like'>
                    <div class='like-svg'>
                      <svg aria-hidden='true' data-icon='like' fill='currentColor' focusable='false' height='1em'
                           viewBox='64 64 896 896' width='1em'>
                        <path
                          d='M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z'></path>
                      </svg>
                    </div>
                    <span>100</span>
                  </div>
                </el-col>
                <el-col :span='6'>
                  <div class='comment'>
                    <div class='comment-svg'>
                      <svg aria-hidden='true' data-icon='message' fill='currentColor' focusable='false' height='1em'
                           viewBox='64 64 896 896' width='1em'>
                        <path
                          d='M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z'></path>
                      </svg>
                    </div>
                    <span>100</span>
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
                    <span>100</span>
                  </div>
                </el-col>
                <el-col :span='6'>
                  <div class='author'>
                    <p>Linotrylie</p>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      Tabitems: [
        {
          label: '最热',
          name: '最热',
        },
        {
          label: '精选',
          name: '精选',
        },
        {
          label: '资源',
          name: '资源',
        },
        {
          label: '面试题',
          name: '面试题',
        },
        {
          label: '前端',
          name: '前端',
        },
        {
          label: '后端',
          name: '后端',
        },
        {
          label: '工具',
          name: '工具',
        },
        {
          label: '书籍',
          name: '书籍',
        },
        {
          label: '网页',
          name: '网页',
        },
        {
          label: 'GitHub',
          name: 'GitHub',
        },
        {
          label: 'Golang',
          name: 'Golang',
        },
        {
          label: 'Java',
          name: 'Java',
        },
      ],
      ActiveName: '',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      src1: '1',
      count: 10,
      radio:1
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event, tab.name)
    },
    load() {
      this.count += 1
    },
    changeRadio(val) {
      console.log(val)
    }
  },
  created() {
    console.log(this.Tabitems[0].name)
    this.ActiveName = this.Tabitems[0].name
  },
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
      width: 100%;

      ::v-deep .el-tabs__content {
        padding: 0 !important;
      }
    }

    .filter {
      width: 100%;
      height: auto;
      margin-top: 5px;
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

        .title:hover {
          color: #4e81f6;
        }

        .content {
          font-size: 14px;
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