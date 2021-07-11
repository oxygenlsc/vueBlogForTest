<template>
  <div class="blog-detail-main-container">
    <mavon-editor
      class="mad-show"
      v-model="value"
      :editable="false"
      :toolbarsFlag="false"
      :subfield="false"
      defaultOpen="preview"
      fontSize='20px'
      ishljs
    />
  </div>
</template>

<script>
export default {
  props:{
      blogDetail:{tyep:Object,require:true}
    },
  data() {
    return {
      value: '',
    };
  },
  watch:{
    blogDetail(){
       this.value = this.blogDetail.Bcontent
    }
  },
};
</script>

<style lang='less'>
.blog-detail-main-container {
  .v-note-wrapper .v-note-panel .v-note-show .v-show-content,
  .v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
    background-image: linear-gradient(
        90deg,
        rgba(50, 0, 0, 0.1) 3%,
        transparent 0
      ),
      linear-gradient(1turn, rgba(50, 0, 0, 0.1) 3%, transparent 0);
    background-size: 20px 20px;
    background-position: 50%;
  }
}
</style>