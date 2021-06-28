<template>
  <div class="main-container">
      <MainListItem v-for="(el,i) in listarr" :key="i" :itemdata='el'/>
  </div>
</template>

<script>
import MainListItem from './MainListItem.vue'
export default {
    components:{
        MainListItem
    },
    data(){
        return{
            listarr:[
                {title:'myTS',
                 des:'凯撒的连接数量的空间里'
                },
                 {title:'myJS',
                 des:'凯撒的连接数量的空间里'
                },
                {title:'myJS',
                 des:'凯撒的连接数量的空间里'
                },
                {title:'myJS',
                 des:'凯撒的连接数量的空间里'
                },
                {title:'myJS',
                 des:'凯撒的连接数量的空间里'
                },
                {title:'myJS',
                 des:'凯撒的连接数量的空间里'
                },
                {title:'myJS',
                 des:'凯撒的连接数量的空间里'
                },
                {title:'myJS',
                 des:'凯撒的连接数量的空间里'
                }
            ]
        }
    }
}
</script>

<style>

</style>