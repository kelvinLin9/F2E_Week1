<template>
  <div class="container">
    <div class="bg_menuSide"></div>
    <div class="btn_burger_open"></div>
    <div class="start"></div>
    <div class="warp">
      <div class="road"></div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .container {
    width: 1920px;
    height: 1430px;
    background: #FFC37D;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .bg_menuSide {
    width: 20px;
    height: 1080px;
    position: absolute;
    background-image: url('../assets/images/bg/bg_menuSide.png');
    background-size: cover;
    right: 99%;
  }
  .btn_burger_open {
    width: 60px;
    height: 66.67px;
    position: absolute;
    background-image: url('../assets/images/btn/btn_burger_open.png');
    background-size: cover;
    bottom:50%;
    right: 96%;
  }
  .warp {
    width: 1430px;
    height: 1080px;
    position: relative;
    outline: solid 1px red;
    background-image:  url('../assets/images/main/start.png');
    background-size: cover;
  }
  .road {
    width: 1175px;
    height: 135.5px;
    position: absolute;
    background-image:  url('../assets/images/main/road.png');
    background-size: cover;
    left: 10%;
    bottom: 0%;
  }

</style>
