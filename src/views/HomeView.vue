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
  <div class="banner bg-banner">
    <section class="position-relative vh-100 test overflow-hidden ">
      <div class="w-100 position-absolute newspaper-up">
        <img src="../assets/images/newspaper_up.png" alt="" class="w-100 ">
      </div>
      <div class="w-100 position-absolute newspaper-left">
        <img src="../assets/images/newspaper_left.png" alt="" class="w-75">
      </div>
      <div class="w-100 position-absolute newspaper-right">
        <img src="../assets/images/newspaper_right.png" alt="" class="w-75">
      </div>
      <div class="container bg-banner-inner test">
        <div>
          <h1 class="test EB-Garamond text-primary">
            The F2E
            <span class="Roboto text-white bg-danger px-3 rounded-3">4th</span>
          </h1>
          <h2 class="Noto-Serif-TC text-primary">
            前端工程師和介面設計師，攜手合作拿獎金
          </h2>
          <p>
            羨慕別人的酷酷網頁動畫？滿足不了同事的許願？動畫技能樹太雜無從下手？
          </p>
        </div>
        <div>
          <img src="../assets/images/wanted.png" alt="">
        </div>
        <div>
          <img src="../assets/images/v.png" alt="">
          <p>
            個人獎
            <span class="">
              $13,000
            </span>
            團體獎
            <span class="">
              $110,000
            </span>
          </p>
        </div>
        <div>
          <h2>
            前端工程師和介面設計師，攜手合作拿獎金
          </h2>
          <p>
            羨慕別人的酷酷網頁動畫？滿足不了同事的許願？動畫技能樹太雜無從下手？
          </p>
        </div>
        <ul class="">
          <li class="">報名總人數 1158人</li>
          <li class="">報名總人數 1052人</li>
          <li>報名總人數 41人</li>
        </ul>
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
    width: 320px;
    height: 104px;
    font-size: 42px;
    margin-left: 22px;
    p {
      font-size: 24px;
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
