<template>
  <div class='interaction'>
    <div class='like'>
      <el-button
        icon='el-icon-sunrise-1'
        size='medium'
        style='font-size: 16px;padding: 4px 8px;'
        title='点赞'
        @click='likeArticle()'></el-button>
    </div>
    <div class='collect'>
      <el-button
        icon='el-icon-folder-checked'
        size='medium'
        style='font-size: 16px;padding: 4px 8px;'
        title='收藏'
        @click='collectArticle()'></el-button>
    </div>
    <div class='share'>
      <el-button
        icon='el-icon-share'
        size='medium'
        style='font-size: 16px;padding: 4px 8px;'
        title='共享'
        @click='shareArticle()'></el-button>
    </div>
    <div class='report'>
      <el-dropdown @command="handleDropdown">
        <el-button>
          更多<i class='el-icon-arrow-down el-icon--right'></i>
        </el-button>
        <el-dropdown-menu slot='dropdown'>
          <el-dropdown-item  command='repo'>举报</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog title="举报" :visible.sync="dialogFormVisible">
      <el-form :model="repo">
        <el-form-item label="举报内容" >
          <el-input v-model="repo.content" autocomplete="off" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="举报类型">
          <el-select v-model="repo.type" placeholder="请选择举报类型">
            <el-option label="色情暴力" value="色情暴力"></el-option>
            <el-option label="版权侵害" value="版权侵害"></el-option>
            <el-option label="质量极差" value="质量极差"></el-option>
            <el-option label="违规推广未知广告" value="违规推广未知广告"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmitRepo">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { CONSTANT } from '@/config/constant.js'
import { Notification } from 'element-ui'

export default {
  name: 'Interaction',
  props:['type','id','title'],
  data() {
    return {
      dialogFormVisible:false,
      repo:{
        content:'',
        type:''
      },
    }
  },
  methods: {
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
      if(command === 'repo') {
        this.dialogFormVisible = true;
      }
    },
    handleSubmitRepo() {
      console.log(this.repo);
      this.dialogFormVisible =false;
    }
  },
  mounted() {
  },
  created() {
  }
}
</script>

<style lang='scss' scoped>
.interaction {
  width: 100%;
  height: 100px;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-direction: row;

.share,.like,.report,.collect {
  width: 25%;
  height: 100px;
  position: relative;
  margin: 0 auto;
  display: flex;
.el-button {
  margin: auto;
}
.el-dropdown {
  margin: auto;
}
}
}
</style>