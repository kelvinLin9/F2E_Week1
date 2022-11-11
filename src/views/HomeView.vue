<template>
  <div class="container">
    <!-- <header class="header fixed z-[100] w-full opacity-0">
      <nav class="bg-secondary" id="nav">
        <div class="container flex justify-between items-center px-10">
          <img src="./assets/images/menu.svg" alt="menu" class="menu w-[50px] h-[50px] my-[5px] md:hidden">
          <div class="logo hidden md:block py-[13.5px]">
            <a href="#"><img src="./assets/images/hex-logo.png" alt="logo"></a>
          </div>
          <ul class="nav-links flex justify-between items-center">
            <li class="hidden md:inline"><a href="#challenge"
                class="text-white text-lg mr-9 hover:opacity-50 transition">關卡任務</a></li>
            <li class="hidden md:inline"><a href="#eventTime"
                class="text-white text-lg mr-[15px] hover:opacity-50 transition">競賽說明</a></li>
            <li><a href="https://2022.thef2e.com/users"
                class="bg-third text-white text-xl font-medium rounded-[40px] px-[25px] py-[5.63px] drop-shadow-button transition duration-475 hover:bg-primary hover:text-black">立即報名</a>
            </li>
          </ul>
        </div>
        <div
          class="mobile-nav-links bg-secondary w-full absolute left-0 top-0 z-10 transition duration-475 ease-in-out transform -translate-x-full md:hidden"
          id="mobile-nav-links">
          <ul>
            <a href="#" class="my-[8.08px]"><img src="./assets/images/close.svg" alt="close"
                class="close p-[10px] md:hidden"></a>
            <li class="text-center mb-6"><a href="#challenge" class="text-white text-lg w-full ">關卡任務</a></li>
            <li class="text-center mb-10"><a href="#eventTime" class="text-white text-lg w-full ">競賽說明</a></li>
          </ul>
        </div>
      </nav>
    </header> -->
  </div>
  <!-- navbar可能要寫在裡面 -->
  <div class="banner bg-banner test" id="banner">
    <!-- 主題 -->
    <section class="position-relative vh-100 overflow-hidden">
      <div class="w-100 position-absolute newspaper-up">
        <img src="../assets/images/newspaper_up.png" alt="" class="w-100 ">
      </div>
      <div class="w-100 position-absolute newspaper-left">
        <img src="../assets/images/newspaper_left.png" alt="" class="w-75">
      </div>
      <div class="w-100 position-absolute newspaper-right">
        <img src="../assets/images/newspaper_right.png" alt="" class="w-75">
      </div>
      <!-- banner -->
      <div class="container bg-banner-inner position-relative">
        <!-- 1 -->
        <div class="pt-3 ms-2">
          <h1 class="EB-Garamond text-primary my-3">
            The F2E
            <span class="Roboto text-white bg-danger px-3 rounded-3">
              4th
            </span>
          </h1>
        </div>
        <!-- 2 -->
        <div class="container">
          <div class="row justify-content-between">
            <div class="col">
              <h2 class="Noto-Serif-TC text-primary">
                前端工程師和介面設計師，攜手合作拿獎金
              </h2>
            </div>
            <div class="col text-end sign-up-num me-5">
              <div class="Noto-Serif-TC">
                報名總人數
                <span class="EB-Garamond">1158</span>人
              </div>
              <div class="Noto-Serif-TC">
                報名總人數
                <span class="EB-Garamond">1052</span>人
              </div>
              <div class="Noto-Serif-TC">
                報名總人數
                <span class="EB-Garamond">41</span>人
              </div>
            </div>
          </div>
        </div>
        <!-- 3 -->
        <div class="ms-5">
          <p class="Noto-Serif-TC text-primary">
            羨慕別人的酷酷網頁動畫？滿足不了同事的許願？動畫技能樹太雜無從下手？
          </p>
        </div>
        <!-- 右上懸賞小圖 -->
        <div class="task position-absolute">
          <img src="../assets/images/wanted.png" alt="">
        </div>
        <!-- 怪客圖 -->
        <div class="v position-absolute position-relative">
          <img src="../assets/images/v.png" alt="">
          <p class="position-absolute text-white w-100">
            個人獎
            <span class="text-danger">
              $13,000
            </span>
            團體獎
            <span class="text-danger">
              $110,000
            </span>
          </p>
        </div>
        <div class="mouse scroll absolute"></div>

        <div class="scroll absolute" id="swipe-animation"></div>
      </div>
    </section>
  </div>
  <br><br><br><br><br><br><br><br><br><br><br>
</template>

<script>
import { mapActions } from 'pinia'
import firstStore from '@/stores/firstStore'
export default {
  methods: {
    ...mapActions(firstStore, ['bannerAnimation']),
    ok () {
      // console.log(12345)
      // gsap.to('.newspaper-up', { opacity: 0, duration: 1, repeat: -1 })
    }
  },
  mounted () {
    this.bannerAnimation()
    this.ok()
  }
}
</script>

<style lang="scss" scoped>
.newspaper-up {
  top: -150px;
  z-index: 20;
}
.newspaper-left {
  left: -250px;
  top: 290px;
  z-index: 30;
}
.newspaper-right {
  right: -750px;
  top: 300px;
  z-index: 10;
}
.sign-up-num{
  font-size: 28px;
  span {
    font-size: 50px;
  }
}
.bg-banner {
  background-image: url(../assets/images/banner.png);
}
.bg-banner-inner {
  background-image: url(../assets/images/banner_inner.png);
  width: 1213px;
  height: 597px;
  margin-top: 101px;
  h1 {
    width: 320px;
    height: 104px;
    font-size: 61px;
    margin-left: 22px;
    span {
      font-size: 32px;
    }
  }
  h2 {
    width: 343px;
    height: 180px;
    font-size: 42px;
    margin-left: 22px;
  }
  p {
    width: 280px;
    height: 140px;
    font-size: 24px;
    line-height: 35px;
  }
  ul {
    font-size: 28px;
  }
}
.task {
  top: -50px;
  right: -50px;
  opacity: 0
}
.v {
  top: 250px;
  right: 250px;
  p {
    bottom: -80px;
    left: 30px;
    font-size: 20px;
    font-size: 28px;
    span {
      font-size: 46px;
    }
  }
}
.bg-banner-mobile{
  background-image: url(../assets/images/banner_mobile.png);
}
.bg-block-mobile{
  background-image: url(../assets/images/section_background_mobile.png);
}
</style>
