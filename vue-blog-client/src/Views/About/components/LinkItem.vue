<template>
 <div
      class="link-item-box"
      :style="{
          width: 200,
          height: 500,
          backgroundColor: color,
      }"
    >
      <div class="link-title">
        <img :src='"https://favicon.link/"+data.Linkurl' alt="" />
        <a :href='data.Linkurl' target="black">
          {{data.Linkname}}
        </a>
      </div>
      <div class="link-des">{{data.Webdesc}}</div>
    </div>
</template>

<script>
export default {
    props:{
        data:{type:Object,require:true},
        color:{type:String,require:true}
    }
}
</script>

<style lang='less' scoped>
.link-item-box {
  display: inline-block;
//   position: absolute;
  width: 200px;
  height: 180px;
//   border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  transition: all 0.4s linear;
  box-shadow: 0px 0px 14px #000;
  vertical-align: top;
  .link-title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 1px 1px 1px #000, -1px -1px 0px #fff;
    a {
      color: #f80;
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 5px;
    }
  }
  .link-des {
    margin: 20px auto;
    color: #000;
    text-align: center;
    font-family: '宋体';
    font-size: 17px;
  }
}
.link-item-box:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.575);
}

</style>