<template>
  <div class="friend-link-container">
    <LinkItem
      :data="el"
      v-for="(el, i) in linkarr"
      :key="i"
      :color="`rgba(${getRandom(150, 220)},${getRandom(150, 220)},${getRandom(
        150,
        220
      )},0.5)`"
    />
    <div class="add-friend-link">
      <header class="des">
        <h3>友链申请</h3>
        <div class="friend-wran">
          <i class="el-icon-info"></i> 听小黎说：
        </div>
        <p>在申请本站友链之前请确保已将本站加入友链。</p>
        <p>
          本站优先录入同类原创、技术生活类博客。任何包含违法国家法律或不健康内容站点均不录入。
        </p>
        <p>百度、搜狗等搜索引擎权重无要求，但是要求时常更新网站内容。</p>
        <p>本站会不定期互相走访友链，发现单方取消友链便拉入黑名单。</p>
        <p>
          特别提醒:
          若无意外，在申请友链后24小时内完成审核并录入站点，如超时还未审核完成，请留言或者私信给我。
        </p>
      </header>
      <footer class="input">
        <SubmitLink></SubmitLink>
      </footer>
    </div>
  </div>
</template>

<script>
import LinkItem from "./components/LinkItem.vue";
import SubmitLink from './components/SubmitLink.vue'
import { getRandom } from "../../utils/index.js";
export default {
  data() {
    return {
      linkarr: [
        { linkTitle: "kkkkksss", des: "sdasdda" },
        { linkTitle: "洒洒水", des: "滴滴答答" },
        { linkTitle: "上上上", des: "啊阿萨大多数" },
        { linkTitle: "kkkkksss", des: "sdasdda" },
        { linkTitle: "洒洒水", des: "滴滴答答" },
        { linkTitle: "上上上", des: "啊阿萨大多数" },
      ],
    };
  },
  components: {
    LinkItem,
    SubmitLink
  },
  methods: {
    getRandom,
  },
};
</script>

<style lang='less' scoped>
.friend-link-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  .add-friend-link {
    width: 100%;
    margin: 30px auto;
    text-align: left;
    color: #000;
    -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.479);
    .des {
      width: 90%;
      margin: 0 auto;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      font-size: 18px;
      font-family: "宋体";
    }
  }
  .input {
    width: 90%;
    margin: 0px auto;
    padding: 30px 0;
    input {
      border-radius: 5px;
    }
    textarea {
      border-radius: 5px;
    }
  }
}
</style>