<template>
  <div class="child-list-container tag">
      <span :style="{color: `rgb(${getRandom(0, 255)},${getRandom(
              0,
              255,
            )},${getRandom(0, 255)})`, fontSize: `${getRandom(20, 30)}px` }"
     v-for="(item,i) in mockList" :key="i">{{item.Tag}}</span>

  </div>
</template>

<script>
import {getRandom} from '../../../utils/index'
import blog from '../../../api/blog'
export default {
    data(){
        return {
            mockList:[]
        }
    },
    methods:{
        getRandom
    },
    async created(){
        const {getTagList} = blog
        const {data} = await getTagList();
        this.mockList = data;
    }
}
</script>
  
<style lang="less" scoped>
.child-list-container{
        background-color: #1b0909;
        min-height: 200px;
        width: 100%;
        display: inline-block;
        padding: 10px;
        box-sizing: border-box;
        overflow: auto;
        text-align: left;
        span{
            margin: 3px;
            display: inline-block;
            font-weight: bold;
            padding: 0 3px;
            background-color: rgba(202, 5, 5, 0.575);
            box-shadow:1px 2px 3px rgb(253, 250, 249),1px 2px 6px rgb(252, 234, 247);
            border-radius: 3px;
            cursor: pointer;
            transition: all 0.2s linear;
        }
        span:hover{
            transform: scale(1.05);
        }
    
}
</style>