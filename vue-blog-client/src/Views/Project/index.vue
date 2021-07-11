<template>
  <div class="drawer-conteiner">
    <div class="drawer-box">
    <DrawerItem v-for="(el,i) in listarr" :key="i" :imgData='el'/>

    </div>
  </div>
</template>

<script>
import DrawerItem from './components/drawerItem.vue'
import pl from '../../assets/4.jpg'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
export default {
  components:{
    DrawerItem
  },
  data(){
    return{
      listarr:[{
        src:pl
      },{
        src:img1
      },
      {
        src:img2
      },{
        src:img3
      },{
        src:pl
      },{
        src:img1
      },
      {
        src:img2
      },{
        src:img3
      },{
        src:pl
      },{
        src:img1
      },
      {
        src:img2
      },{
        src:img3
      },{
        src:pl
      },{
        src:img1
      },
      {
        src:img2
      },{
        src:img3
      },{
        src:pl
      },{
        src:img1
      },
      {
        src:img2
      },{
        src:img3
      }]
    }
  }
}
</script>

<style lang='less' scoped>
  .drawer-conteiner{
    width: 100%;
    height: 100%;
    text-align: left;
    background-color: #f4f4f4;
    overflow: auto;
    .drawer-box{
      min-width: 1150px;
      margin: 0 auto;
      padding-left:40px
    }
  }
</style>