<template>
  <div id="home">
    <NavBar class="nav-bar-home">
      <div slot="middle">
        <p>购物街</p>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getCarouselData} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data(){
      return {
        carouselData: null
      }

    },
    // 生命周期函数，一生成就调用
    created() {
      getCarouselData().then(res => {
        console.log(res)
        this.carouselData = res
      })
    }
  }
</script>

<style scoped>
  .nav-bar-home {
    background-color: #ff8198;
  }
  .nav-bar-home div p {
    color: #fff;
    font-size: 20px;
  }
</style>
