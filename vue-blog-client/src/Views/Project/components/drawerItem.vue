<template>
  <div class="drawer-item-container">
      <div class="img-box">
          <el-image 
            class="jj"
            :src="imgData.src" 
            :preview-src-list="[imgData.src]">
        </el-image>
      </div>
      <div class="des-box">
          <div class="title"><b>标题:</b> 插画item</div>
          <div class="author"><b>画师:</b> 墙下一朵花</div>
          <div class="description"> <b>描述:</b> 卡卡卡刷卡机卡卡卡刷卡机卡卡卡刷卡机卡卡卡刷卡机卡卡卡刷卡机卡卡卡刷卡机卡卡卡刷卡机卡卡卡刷卡机</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        imgData:{
            require:true,
            type:Object
        }
    }
}
</script>

<style lang='less' scoped>
    .drawer-item-container{
        width: 260px;
        min-height: 310px;
        // background-color: red;
        display: inline-block;
        margin: 0 25px 25px 0;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        .img-box{
            position: relative;
            width: 100%;
            height: 208px;
            overflow: hidden;
            img{
                width: 100%;
                height: auto;
            }
        }
      
        .des-box{
            width: 100%;
            height: calc(100% - 208px);
            border-top: 1px solid #ccc;
            text-align: left;
            div{
                margin: 10px 5px;
                font-size: 14px;
                
            }
            .description{
                color: #bbb;
            }
            b{
                color: #000;
            }
        }
    }
</style>