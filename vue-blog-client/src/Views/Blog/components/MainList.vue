<template>
  <div class="main-container" @scroll="handleScroll"  v-loading='isLoading'>
      <MainListItem  v-for="(el,i) in blogList" :key="i" :itemdata='el'/>
  </div>
</template>

<script>
import blog from '../../../api/blog'
import MainListItem from './MainListItem.vue'
export default {
    components:{
        MainListItem
    },
    data(){
        return{
            blogList:[],
            page:1,
            limit:10,
            islastPage:false,
            isLoading:false,
            
        }
    },
    methods:{
        async fetchData(){
            this.isLoading = true
            const {getBlogList} = blog
            const {data} = await getBlogList(this.pageData)
            if(data.length==0){
                this.islastPage=true
            }
            const newData = [...data ,...this.blogList];
            this.blogList = newData
            this.isLoading = false
        },
        handleScroll(e){
            const ST = e.target.scrollTop;
            const CH = e.target.clientHeight;
            const SH = e.target.scrollHeight
           if(ST+CH>SH-80&&!this.isLoading&&!this.islastPage){
              this.page++;
              this.fetchData(this.pageData)
           }
        }
    },
    computed:{
        pageData(){
            return {
                limit:this.limit,
                page:this.page
            }
        }
    },
    async created(){
      this.fetchData();
    }
}
</script>

<style>

</style>