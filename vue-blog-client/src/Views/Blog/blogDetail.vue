<template>
  <div class="blog-detail-container">
    <BlogDetailMain />
    <BlogDetailMenu />
  </div>
</template>

<script>
import BlogDetailMain from "./components/BlogDetailMain.vue";
import BlogDetailMenu from "./components/BlogDetailMenu.vue";
export default {
  components: {
    BlogDetailMain,
    BlogDetailMenu,
  },
};
</script>

<style lang='less' scoped>
.blog-detail-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .blog-detail-main-container {
    width: calc(100% - 300px);
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #ccc;
  }
  .blog-detail-main-container::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #f5f5f5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  .blog-detail-main-container::-webkit-scrollbar-track {
    width: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #f5f5f5;
  }

  /*定义滑块 内阴影+圆角*/
  .blog-detail-main-container::-webkit-scrollbar-thumb {
    width: 2px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
  .blog-detail-menu-container {
    width: 300px;
    height: 100%;
    background: #202020;
  }
}
</style>