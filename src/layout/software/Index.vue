<template>
  <div class='software-body'>
    <div class='software-category'>
      <el-radio-group v-model="category" @change='changeCategoryRadio' size='small' :border='true'>
        <el-radio-button :label="0">全部</el-radio-button>
        <el-radio-button :label="2001">PHP</el-radio-button>
        <el-radio-button :label="2002">GO</el-radio-button>
        <el-radio-button :label="2003">JAVA</el-radio-button>
        <el-radio-button :label="1004">VUE</el-radio-button>
        <el-radio-button :label="1005">HTML</el-radio-button>
        <el-radio-button :label="1006">CSS</el-radio-button>
        <el-radio-button :label="1007">JavaScript</el-radio-button>
      </el-radio-group>
    </div>
    <div class='software-filter'>
      <span>筛选：</span>
      <el-radio-group v-model="filter" @change='changeFilterRadio'>
        <el-radio :label="3">点赞数</el-radio>
        <el-radio :label="6">收藏数</el-radio>
        <el-radio :label="9">评论数</el-radio>
        <el-radio :label="12">下载</el-radio>
      </el-radio-group>
    </div>
    <div class='software-list'>
      <template v-for='index in 25'>
        <div class='item' @click='gosoftwareInfo(index,softwareTitle)'>
          <div class='img'>
            <el-image src='https://img.php.cn/upload/course/000/000/015/61500a97859e7795.jpg' style=""></el-image>
          </div>
          <div class='title'>通用后台管理系统实战开发</div>
          <div class='software-author'>
            <svg-icon name='person-outline' width='16' height='16'></svg-icon>
            <span title='上传者'>Linotrylie</span>
          </div>
          <div class='software-item-info'>
            <svg-icon name='download-outline' width='16' height='16'></svg-icon>
            <span title='总下载数'>124322</span>
            &nbsp;&nbsp;&nbsp;
            <svg-icon name='time-outline' width='16' height='16'></svg-icon>
            <span title='上传时间'>2023年4月21日 11点04分</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name:'software',
  data(){
    return {
      direction:'全部',
      category:'全部',
      filter:3,
      softwareTitle:'通用后台管理系统'
    }
  },
  methods:{
    changeDirectionRadio(){
      console.log(this.direction)
    },
    changeCategoryRadio(){
      console.log(this.category)
    },
    changeFilterRadio(){

    },
    gosoftwareInfo(vid,vtitle) {
      this.$router.push({
        path:'/software/'+vtitle+'/'+vid,
        params:{
          id:vid,
          title:vtitle
        }
      })
    }
  },
  created() {

  },
  mounted() {
  }
}
</script>
<style lang='scss' scoped>
$radio-item-height:auto;
$radio-item-width:100%;
$background:#fff;
.software-body {
  width: 70%;
  margin: 0 auto;
  .software-category {
    width: $radio-item-width;
    height: $radio-item-height;
    margin-bottom: 10px;
    background: $background;
    .el-radio-button:first-child {
      margin-left: 0;
    }
  }
  .el-radio-button {
    margin-left: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
  }
  .software-list {
    width: $radio-item-width;
    height: $radio-item-height;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .item {
      width: 23%;
      height: auto;
      margin-left: 10px;
      margin-top: 20px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 30px;
      .img {
        width: auto;
        height: auto;
        .el-image {
          width: 60%;
          height: 150px;
          border-radius: 30px;
          margin-left:19%;
        }
        .el-image:hover{
          transition: all .3s ease-in-out;
          -webkit-transition: all .3s ease-in-out;
        }
      }
      .title {
        overflow: hidden;
        white-space: normal;
        word-break: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-indent: 0.5em;
      }
      .software-author{
        font-size: 14px;
        padding-top: 5px;
        text-indent: 0.5em;
      }
      .software-item-info{
        font-size: 12px;
        padding-top: 5px;
        padding-bottom: 5px;
        text-indent: 0.5em;
      }
    }
    .item:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
    }
  }

}
</style>
