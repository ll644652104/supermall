<template>
  <tabbar>
    <tabbaritem path="/home">
      <!-- 插槽的一种写法 -->
      <!--<template v-slot:item-icon>-->
      <!--  <img src="~assets/img/home.svg" alt="">-->
      <!--</template>-->
      <!--<template v-slot:item-name>-->
      <!--  <p>首页</p>-->
      <!--</template>-->
      <!-- 第二种写法 -->
      <img slot="item-icon" src="~assets/img/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/home-active.svg" alt="">
      <div slot="item-name">首页</div>
    </tabbaritem>

    <tabbaritem  path="/category">
      <img slot="item-icon" src="~assets/img/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/category-active.svg" alt="">
      <div slot="item-name">分类</div>
    </tabbaritem>

    <tabbaritem  path="/shopcar">
      <img slot="item-icon" src="~assets/img/shopcar.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/shopcar-active.svg" alt="">
      <div slot="item-name">购物车</div>
    </tabbaritem>

    <tabbaritem  path="/my">
      <img slot="item-icon" src="~assets/img/my.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/my-active.svg" alt="">
      <div slot="item-name">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
  import tabbar from "components/common/tabbar/TabBar"
  import tabbaritem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      tabbar,
      tabbaritem
    }
  }
</script>

<style scoped>

</style>
