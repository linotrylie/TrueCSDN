<template>
  <div class="video-category">
    <ul>
      <li v-for="category in categories" :key="category.id">
        <a :href="'/category/' + category.id">{{ category.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VideoCategory',
  data() {
    return {
      categories: [
        { id: 1, name: '电影' },
        { id: 2, name: '电视剧' },
        { id: 3, name: '纪录片' },
        // 添加更多分类...
      ]
    }
  }
}
</script>

<style lang="scss">
$theme-color: #fff;
.video-category {
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      a {
        display: block;
        padding: 10px 0;
        font-size: 14px;
        color: #333;

        &:hover {
          color: $theme-color;
        }
      }
    }
  }
}
</style>
