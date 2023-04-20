<template>
  <div class='author-body'>
    <div class='title'>
      推荐用户
    </div>
    <div class='content'>
      <template v-for='(item,index) in list'>
        <div class='itemList'>
          <div class='left' v-if="item.avatar !==''">
            <el-image :lazy=true :src='item.avatar'></el-image>
          </div>
          <div class='left' v-else>
            <el-image></el-image>
          </div>
          <div class='right'>
            <router-link :to="{path:'/user-center',query:{id:item.id}}"><p>{{ item.name }}</p></router-link>
            <p class='info'>粉丝数：{{ item.fans }} | 文章数：{{ item.articleNums }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type'],
  name: 'Author',
  data() {
    return {
      list: [
        {
          avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/aRneVaen8XSWOILibfkW5SHicYZia2oDxA8zKUtnzLRVFbwiclEK8f80QMRk3kviawzL8gTWk4MgA0P0VeF1r0O0upg/132',
          name: 'SnailRun',
          id:1,
          fans: 10,
          articleNums: 20,
        },
        {
          avatar: '',
          name: 'SnailRun',
          fans: 10,
          id:1,
          articleNums: 20,
        },
        {
          avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/aRneVaen8XSWOILibfkW5SHicYZia2oDxA8zKUtnzLRVFbwiclEK8f80QMRk3kviawzL8gTWk4MgA0P0VeF1r0O0upg/132',
          name: 'SnailRun',
          fans: 10,
          id:1,
          articleNums: 20,
        },
        {
          avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/aRneVaen8XSWOILibfkW5SHicYZia2oDxA8zKUtnzLRVFbwiclEK8f80QMRk3kviawzL8gTWk4MgA0P0VeF1r0O0upg/132',
          name: 'SnailRun',
          fans: 10,
          id:1,
          articleNums: 20,
        },
        {
          avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/aRneVaen8XSWOILibfkW5SHicYZia2oDxA8zKUtnzLRVFbwiclEK8f80QMRk3kviawzL8gTWk4MgA0P0VeF1r0O0upg/132',
          name: 'SnailRun',
          fans: 10,
          id:1,
          articleNums: 20,
        },
        {
          avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/aRneVaen8XSWOILibfkW5SHicYZia2oDxA8zKUtnzLRVFbwiclEK8f80QMRk3kviawzL8gTWk4MgA0P0VeF1r0O0upg/132',
          name: 'SnailRun',
          fans: 10,
          id:1,
          articleNums: 20,
        },
      ],
    }
  },
  methods: {},
  mounted() {

  },
  created() {

  },

}
</script>

<style lang='scss' scoped>
.author-body {
  width: 100%;
  height: auto;
  background: #fff;
  margin-top: 15px;

  .title {
    font-size: 18px;
    height: 35px;
    line-height: 35px;
    text-indent: 1em;
    box-shadow: 1px 1px 1px #efeaea;
    margin-bottom: 5px;
  }

  .content {
    width: 100%;
    height: auto;
    .itemList {
      height: 80px;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #99a9bf;
      .left {
        margin-left: 10px;
        margin-top: 16px;
        .el-image {
          width: 50px;
          height: 50px;
          border-radius: 50px;
        }
      }
      .right {
        margin-top: 16px;
        margin-left: 10px;
        .info {
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>