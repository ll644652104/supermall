<template>
    <div class="tab-bar-item" @click="tabBarItemClick">
      <!-- 通过if判断是否显示 -->
      <slot name="item-icon" v-if="!isActive"></slot>
      <slot name="item-icon-active" v-else></slot>
      <!-- 动态绑定style属性 -->
      <div :style="activeColorStyle">
        <slot name="item-name" ></slot>
      </div>

    </div>
</template>

<script>

  export default {
    name: "TabBarItem",
    // 父组件传递过来的值
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "#d4237a"
      }
    },
    // 计算属性
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      },
      activeColorStyle(){
        return this.isActive ? "color: "+this.activeColor : {}
      }
    },
    methods: {
      tabBarItemClick(){
        // 点击后就提交连接
        return this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    color:black;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 4px 0 2px 0;
  }
</style>
