<template>
  <div class="blog-contaienr">
    <MainContainer />
    <WidthChildList />
  </div>
</template>

<script>
import WidthChildList from "./components/WidthChildList.vue";
import MainContainer from "./components/MainList.vue";
export default {
  components: {
    WidthChildList,
    MainContainer,
  },
  mounted() {
    // console.log(this.$route);
  },
};
</script>

<style lang="less" scoped>
.blog-contaienr {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .child-list-container {
    width: 300px;
    height: 100%;
  }
  .main-container {
    width: calc(100% - 300px);
    height: 100%;
    border-right: 1px solid #ccc;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .main-container::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #f5f5f5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  .main-container::-webkit-scrollbar-track {
    width: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #f5f5f5;
  }

  /*定义滑块 内阴影+圆角*/
  .main-container::-webkit-scrollbar-thumb {
    width: 2px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
}
</style>