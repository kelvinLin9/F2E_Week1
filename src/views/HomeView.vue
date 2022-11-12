<template class="">
  <!-- 包整個banner再看有沒有需要 -->
  <section class="">
    <!-- navbar -->
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

    <div class="banner bg-banner test" id="banner">
      <!-- 主題 -->
      <div class="position-relative vh-100 overflow-hidden">
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
          <!-- 滑鼠，還需要研究 -->
          <div class="mouse scroll absolute"></div>
          <div class="scroll absolute" id="swipe-animation"></div>
        </div>
      </div>
    </div>
  </section>
  <section class="" id="">
    <div class="mt-5 d-flex flex-column align-items-center">
      <img src="../assets/images/hexschool.png" alt="">
      <h2 class="Noto-Sans-TC my-4">年度最強合作，三大關卡來襲</h2>
      <div class="border-top border-bottom border-primary border-3 two-line"></div>
    </div>
    <!-- 三版塊 -->
    <div class=" mt-5 d-flex flex-column align-items-center">
      <div class="cooperation bg-primary mb-5">
        <div class="d-flex justify-content-between align-items-center py-2 px-3">
          <div class="name text-white Noto-Sans-TC">
            <p>視差滾動 Parallax Scrolling</p>
          </div>
          <div>
            <img src="../assets/images/blockstudio.png" alt="">
          </div>
        </div>
        <div class="bg-section d-flex justify-content-around align-items-center">
          <div class="p-5">
            <img src="../assets/images/F2Edesign.png" alt="">
          </div>
          <div class="m-5" style="max-width: 600px">
            <h3 class="p-3 Noto-Serif-TC">
              The F2E 活動網站設計
            </h3>
            <p class="px-3 Noto-Sans-TC">
              請參考本屆官網的首頁視差滾動技巧，並請您重新 redesign 本頁面來設計。
            </p>
            <div class="px-3 py-5">
              <button class="btn btn-outline-dark rounded-pill me-3">
                關卡攻略
              </button>
              <button class="btn btn-danger rounded-pill">
                &emsp;投稿&emsp;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="cooperation bg-primary mb-5">
        <div class="d-flex justify-content-between align-items-center py-2 px-3">
          <div class="name text-white Noto-Sans-TC">
            <p>線上簽署 Canvas</p>
          </div>
          <div>
            <img src="../assets/images/kdan.png" alt="">
          </div>
        </div>
        <div class="bg-section d-flex justify-content-around align-items-center">
          <div class="p-5">
            <img src="../assets/images/pdf.png" alt="">
          </div>
          <div class="m-5" style="max-width: 600px">
            <h3 class="p-3 Noto-Serif-TC">
              今晚，我想來點點簽
            </h3>
            <p class="px-3 Noto-Sans-TC">
              每次要 PDF 簽名都要列印出來再掃描好麻煩，自幹一個 Web 版本的簽名服務吧！
            </p>
            <div class="px-3 py-5">
              <button class="btn btn-outline-dark rounded-pill me-3">
                關卡攻略
              </button>
              <button class="btn btn-danger rounded-pill">
                &emsp;投稿&emsp;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="cooperation bg-primary mb-5">
        <div class="d-flex justify-content-between align-items-center py-2 px-3">
          <div class="name text-white Noto-Sans-TC">
            <p>Scrum JS draggable</p>
          </div>
          <div>
            <img src="../assets/images/titan.png" alt="">
          </div>
        </div>
        <div class="bg-section d-flex justify-content-around align-items-center">
          <div class="p-5">
            <img src="../assets/images/scrum.png" alt="">
          </div>
          <div class="m-5" style="max-width: 600px">
            <h3 class="p-3 Noto-Serif-TC">
              Scrum 新手村
            </h3>
            <p class="px-3 Noto-Sans-TC">
              設計關卡內容與網頁互動效果，透過頁面關卡來呈現知識點，讓挑戰者藉由你設計的內容更了解 Scrum
            </p>
            <div class="px-3 py-5">
              <button class="btn btn-outline-dark rounded-pill me-3">
                關卡攻略
              </button>
              <button class="btn btn-danger rounded-pill">
                &emsp;投稿&emsp;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="" id="">
    <div class="Noto-Serif-TC text-center bg-primary text-white py-5 ">
      <h2>
        賽程時間
      </h2>
    </div>
    <!-- swiper -->
    <div class="">
      <!-- swiper-wrapper -->
      <div class="d-flex justify-content-center test my-5">
        <div class="timeline"></div>
        <div class="d-flex flex-column justify-content-around align-items-center mx-5 Noto Sans TC test">
          <h3>開始報名</h3>
          <div class="bg-primary diamond my-3 mx-3"></div>
          <p class="">10/13(四) 早上 11:00<br>至 11/6(日) 晚上 23:59</p>
        </div>
        <div class="d-flex flex-column justify-content-around align-items-center mx-5 test">
          <h3>開賽</h3>
          <div class="bg-primary diamond my-3"></div>
          <p class="">UI組、團體組開賽 10/31<br>前端組開賽 11 /7</p>
        </div>
        <div class="d-flex flex-column justify-content-around align-items-center mx-5 test">
          <h3>登陸作品</h3>
          <div class="bg-primary diamond my-3"></div>
          <p class="">10/31(一) 中午 12:00<br>至11/28(一) 中午 12:00</p>
        </div>
        <div class="d-flex flex-column justify-content-around align-items-center mx-5 test">
          <h3>線上直播</h3>
          <div class="bg-primary diamond my-3"></div>
          <p class="">11/3 至 11/24(每週四)<br>...</p>
        </div>
      </div>
      <div class="d-flex justify-content-center test my-5">
        <div class="timeline"></div>
        <div class="d-flex flex-column justify-content-around align-items-center mx-5 Noto Sans TC test">
          <h3>初選</h3>
          <div class="bg-primary diamond my-3 mx-3"></div>
          <p class="">12/05(五)</p>
        </div>
        <div class="d-flex flex-column justify-content-around align-items-center mx-5 test">
          <h3>決選</h3>
          <div class="bg-primary diamond my-3"></div>
          <p class="">12/05(五)</p>
        </div>
      </div>
    </div>
    <div>
      <p class="fs-24">
        初選：將由六角學院前端、UI 評審進行第一波篩選，並於 12/5（五）公布初選佳作名單。<br>決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於 12/23（五）公布企業得獎名單。
      </p>
    </div>
    <div class="Noto-Serif-TC text-center bg-primary text-white py-5 ">
      <h2>
        獎項
      </h2>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col position-relative">
          <img src="../assets/images/group_award.png" alt="group_award">
          <div class="position-absolute bg-danger rounded-2 text-white bonus text-center pt-2">$10,000(3名)</div>
          <p class="text-center">每個關卡各一組</p>
        </div>
        <div class="col position-relative">
          <img src="../assets/images/shortlisted_award.png" alt="">
          <div class="position-absolute bg-danger rounded-2 text-white bonus text-center pt-2">$3,000(6名)</div>
          <p class="text-center">每個關卡各2名，<br>設計一名，前端一名</p>
        </div>
        <div class="col position-relative">
          <img src="../assets/images/person_award.png" alt="">
          <div class="position-absolute bg-danger rounded-2 text-white bonus text-center pt-2">數位獎狀(60名)</div>
          <p class="text-center">每個關卡個人組十位，<br>團體組十組</p>
        </div>
      </div>

    </div>
  </section>

  <section class="my-5" id="">
    <div class="Noto-Serif-TC text-center">
      <h2 class="text-primary">意想不到的好康</h2>
      <h2 class="text-danger">請點擊</h2>
    </div>
    <div class="Noto-Serif-TC text-center bg-primary text-white py-5 ">
      <h2>
        各界大神直播分享
      </h2>
    </div>
    <div class="container my-5">
      <div class="row">
        <div class="col-6 bg-teacher1 text-center m-5">
          <a href="https://www.youtube.com/watch?v=9gzDFKTIFB4">
            <h2>
              網站的動態趨勢
            </h2>
            <p>
              李明<br>版塊設計創辦人兼總監
            </p>
            <p>
              11/13(四)20:00 ~ 21:30
            </p>
          </a>
        </div>
        <div class="col-6 bg-teacher2 text-center m-5">
          <a href="https://www.youtube.com/watch?v=9gzDFKTIFB4">
            <h2>
              jQuery也可以做到的互動效果
            </h2>
            <p>
              Leo<br>Angular Taiwan 傳教士
            </p>
            <p>
              11/10(四)20:00 ~ 21:30
            </p>
          </a>
        </div>
        <div class="col-6 bg-teacher3 text-center m-5">
          <a href="https://www.youtube.com/watch?v=9gzDFKTIFB4">
            <h2>
              網頁可以拖拖拉拉draggable.js 介紹
            </h2>
            <p>
              邱繼緯<br>前端工程師
            </p>
            <p>
              11/17(四)20:00 ~ 21:30
            </p>
          </a>
        </div>
        <div class="col-6 bg-teacher4 text-center m-5">
          <a href="https://www.youtube.com/watch?v=9gzDFKTIFB4">
            <h2>
              互動式網頁設計工程師該具備哪些技能？
            </h2>
            <p>
              吳哲宇<br>墨雨互動設計 創辦人
            </p>
            <p>
              11/24(四)20:00 ~ 21:30
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div>
      <div class="bg-white d-flex justify-content-around py-3">
        <img src="../assets/images/jira.png" alt="">
        <img src="../assets/images/confluence.png" alt="">
        <img src="../assets/images/miro.png" alt="">
        <img src="../assets/images/dotted.png" alt="">
      </div>
      <div class="bg-primary">
        <h2 class="Noto-Serif-TC text-white text-center pt-5">贊助單位</h2>
        <div class="d-flex justify-content-around py-5">
          <img src="../assets/images/blockstudio.png" alt="">
          <img src="../assets/images/kdan.png" alt="">
          <img src="../assets/images/titan.png" alt="">
        </div>
      </div>
    </div>
  </footer>
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
// 第二部分
.two-line {
  width: 1200px;
  height: 9px;
}
.cooperation {
  width: 1200px;
  height: 528px;
}
.name {
  font-size: 44px;
}
// 第三部分
.diamond {
  width: 50px;
  height: 50px;
  transform: rotate(45deg)
}
.timeline {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 800px;
    height: 5px;
    top: 150px;
    left: 100px;
    background-color:#38241B;
  }
}
.bonus {
  width: 232px;
  height: 62px;
  font-size: 30px;
  left: 90px;
  top: 300px;
}
</style>
