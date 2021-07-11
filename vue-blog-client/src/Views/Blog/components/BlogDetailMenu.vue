<template>
  <div class="blog-detail-menu-container">
    <div class="article-des-box">
      <div class="artic-title"><i class="el-icon-pear"></i> 标题：{{this.$route.query.title}}</div>
      <div class="author"><i class="el-icon-user"></i> 作者：{{blogDetail.Bauthor}}</div>
      <div class="fire"><i class="el-icon-sunny"></i> 阅读量：{{blogDetail.Bview}}</div>
      <div class="good"><i class="el-icon-star-on"></i> 获得点赞：{{blogDetail.Blike}}</div>
    </div>
    <div class="menu-list-box">
      <h1>文章目录</h1>
      <ul class="list-box">
        <li v-for='(el) in MenuList' :key='el'>{{el}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
   props:{
      blogDetail:{tyep:Object,require:true}
    },
    methods:{
      getAList(){
         this.$nextTick(()=>{
           let data =  document.querySelectorAll('h1>a');
           console.log(data,'data')
        })
      },
      getList(str, fstr){
            if (!str) {
            return ['nothing'];
          }
          let dataArr= [];
          str.split('#').forEach(el => {
             el.split('\n').forEach(item => {
              if (item.includes(fstr)) {
                item = item.replace(fstr, '');
                dataArr.push(item?.trim());
              }
            });
          });

          if (!dataArr) {
            return [];
          }
          return dataArr;
              }
    },
    computed:{
      MenuList(){
        return this.getList(this.blogDetail.Bcontent,'~~')
      }
    },
    mounted(){
    //  this.getAList()
    
    
    }
     
};
</script>

<style lang='less' scoped>
.blog-detail-menu-container {
  width: 100%;
  height: 100%;
  .article-des-box {
    width: 70%;
    height: 120px;
    margin: 20px auto;
    text-align: left;
    color: #fff;
    div {
      margin: 10px;
    }
  }
  .menu-list-box {
    width: 100%;
    height: calc(100% - 200px);
    h1 {
      text-align: left;
      width: 250px;
      margin: 0 auto;
    }
    color: #fff;
    .list-box {
      width: 100%;
      height: 80%;
    //   list-style: none;
      padding: 0;
      overflow: auto;
      li {
          position: relative;
        width: 200px;
        margin: 0 auto;
        text-align: left;
        min-height: 30px;
        font-size: 20px;
        cursor: pointer;
        a {
        font-size: 18px;
        color: #fff;
        }
      }
      li::before{
          content: '';
        position: absolute;
        top: 0;
        left: -15px;
        bottom: 0;
        width: 2px;
        background-color: rgb(192, 211, 216);
        opacity: 0.5;
      }
        li:hover {
          color: rgb(0, 195, 255);

        }

    }
    
    .list-box::-webkit-scrollbar {
      width: 0px;
      height: 5px;
      background-color: #f5f5f5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    .list-box::-webkit-scrollbar-track {
      width: 0px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      background-color: #f5f5f5;
    }

    /*定义滑块 内阴影+圆角*/
    .list-box::-webkit-scrollbar-thumb {
      width:0px;
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #555;
    }
  }
  
}
</style>