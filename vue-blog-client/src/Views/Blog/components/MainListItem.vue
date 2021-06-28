<template>
  <div class="item-container">
    <div class="title">
        <RouterLink to='/blog/detail'>{{ itemdata.title }}</RouterLink>
        
    </div>
    <div class="des">
      <div class="time"> <i class="el-icon-date"></i> 2020年12月1日</div>
      <div class="tag"><i class="el-icon-collection-tag"></i> JS</div>
      <div class="hot"><i class="el-icon-sunny"></i> 28</div>
      <div class="goof"><i class="el-icon-star-on"></i> 55</div>
    </div>
    <div class="artic-content">sasdadd</div>
  </div>
</template>

<script>
export default {
  props: {
    itemdata: { type: Object, require: true },
  },
};
</script>

<style lang="less" scoped>

.item-container {
  position: relative;
  width: 100%;
  min-height: 120px;
  box-shadow: 0px 0px 1px #797676;
  transition: transform 0.3s linear;
  color: #3a7788;
  font-size: 17px;
//   background-color: rgb(227, 233, 235);
  cursor: pointer;
   .title {
    position: relative;
    z-index: 66;
    text-align: left;
    padding: 8px;
    a {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 1.2;
      color: #333333;
    }
    box-sizing: border-box;
    padding-left: 10px;
    a:hover {
      color: #f80;
    }
  }

  .des {
    display: flex;
    padding-left: 10px;
    font-size: 15px;
    color: #201f1f;
    align-content: center;
    div {
      margin-right: 10px;
      height: 20px;
      line-height: 20px;
      vertical-align: bottom;
    }
  }
  .artic-content {
    margin: 5px auto;
    padding-left: 10px;
    color: #000;
    font-size: 20px;
    text-align: left;
    padding: 8px;
  }
}
.item-container::before,
.item-container::after {
  box-sizing: inherit;
  position: absolute;
  content: "";
  border: 2px solid transparent;

  width: 0;
  height: 0;
}

.item-container::after {
  bottom: 0px;
  right: 0px;
}

.item-container::before {
  top: 0px;
  left: 0px;
}

.item-container:hover::before,
.item-container:hover::after {
  width: 100%;
  height: 100%;
}

.item-container:hover::before {
  border-top-color: #333;
  border-right-color: #333;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

.item-container:hover::after {
  border-bottom-color: #333;
  border-left-color: #333;
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s,
    height 0.3s ease-out 1s;
}
</style>