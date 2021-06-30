export default function(defaultDataValue = null){
   return  {
            data(){
                return{
                    isLoading:true,
                    banners:defaultDataValue
                }
            },
            async created(){
                this.banners = await this.fetchData();
                this.isLoading = false
            }
    }
}