<template>
  <div v-if="isLoading">
    <section class="bg-full loading Noto-Sans-TC position-fixed">
      <Vue3Lottie :animationData="loading" class="loading-icon"/>
      <p class="loading-text1 fs-23">努力加載中...</p>
      <p class="loading-text2 fs-20">網站中收集
        <span class="text-danger">五顆</span>散落的柏蒂豆，即可獲得驚喜唷。
      </p>
    </section>
  </div>
  <div>
    <section>
      <!-- navbar -->
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand ps-5" href="#">
            <img src="../assets/images/hex-logo.png" alt="hex-logo">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
              <li class="nav-item">
                <a class="nav-link fs-18 text-white" href="#"
                @click.prevent="moveToChallenge()"
                >
                  關卡任務
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-18 text-white" href="#"
                @click.prevent="moveToInstructions()"
                >
                  競賽說明
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-18 text-white bg-danger rounded-pill px-5" href="https://2022.thef2e.com/users">立即報名</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="banner bg-banner" id="banner">
        <Vue3Lottie :animationData="scrollDown" class="scrollDown1"/>
        <Vue3Lottie :animationData="scrollDown" class="scrollDown2"/>
        <!-- 主題 -->
        <div class="position-relative vh-100 overflow-hidden">
          <div class="w-100 position-absolute newspaper-up">
            <img src="../assets/images/newspaper_up.png" alt="newspaper_up" class="w-100 ">
          </div>
          <div class="w-100 position-absolute newspaper-left">
            <img src="../assets/images/newspaper_left.png" alt="newspaper_left" class="w-75">
          </div>
          <div class="w-100 position-absolute newspaper-right">
            <img src="../assets/images/newspaper_right.png" alt="newspaper_right" class="w-75">
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
              <img src="../assets/images/wanted.png" alt="wanted">
            </div>
            <!-- 怪客圖 -->
            <div class="v position-absolute position-relative">
              <img src="../assets/images/v.png" alt="v怪客">
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
          </div>
        </div>
      </div>
    </section>

    <section id="challenge">
      <div class="mt-5 d-flex flex-column align-items-center">
        <img src="../assets/images/hexschool.png" alt="hexschool-logo">
        <h2 class="Noto-Sans-TC my-4">年度最強合作，三大關卡來襲</h2>
        <div class="border-top border-bottom border-primary border-3 two-line"></div>
      </div>
      <!-- 三版塊 -->
      <div class=" mt-5 d-flex flex-column align-items-center">
        <div class="cooperation bg-primary mb-5" id="blockStudio">
          <div class="d-flex justify-content-between align-items-center py-2 px-3">
            <div class="name text-white Noto-Sans-TC">
              <p>視差滾動 Parallax Scrolling</p>
            </div>
            <div>
              <img src="../assets/images/blockstudio.png" alt="blockstudio-logo" >
            </div>
          </div>
          <div class="bg-section d-flex justify-content-around align-items-center">
            <div class="p-5 position-relative">
              <img src="../assets/images/F2Edesign.png" alt="F2Edesign">
              <Vue3Lottie :animationData="scrollDown" class="scrollDown3 text-white"/>
            </div>
            <div class="m-5" style="max-width: 600px">
              <h3 class="p-3 Noto-Serif-TC">
                The F2E 活動網站設計
              </h3>
              <p class="px-3 Noto-Sans-TC">
                請參考本屆官網的首頁視差滾動技巧，並請您重新 redesign 本頁面來設計。
              </p>
              <div class="px-3 py-5">
                <button class="btn btn-outline-dark rounded-pill me-3" type="button">
                  關卡攻略
                </button>
                <button class="btn btn-danger rounded-pill" type="button">
                  &emsp;投稿&emsp;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="cooperation bg-primary mb-5" id="kdan">
          <div class="d-flex justify-content-between align-items-center py-2 px-3">
            <div class="name text-white Noto-Sans-TC">
              <p>線上簽署 Canvas</p>
            </div>
            <div>
              <img src="../assets/images/kdan.png" alt="kdan-logo">
            </div>
          </div>
          <div class="bg-section d-flex justify-content-around align-items-center">
            <div class="p-5">
              <img src="../assets/images/pdf.png" alt="pdf">
            </div>
            <div class="m-5" style="max-width: 600px">
              <h3 class="p-3 Noto-Serif-TC">
                今晚，我想來點點簽
              </h3>
              <p class="px-3 Noto-Sans-TC">
                每次要 PDF 簽名都要列印出來再掃描好麻煩，自幹一個 Web 版本的簽名服務吧！
              </p>
              <div class="px-3 py-5">
                <button class="btn btn-outline-dark rounded-pill me-3" type="button">
                  關卡攻略
                </button>
                <button class="btn btn-danger rounded-pill" type="button">
                  &emsp;投稿&emsp;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="cooperation bg-primary mb-5" id="titan">
          <div class="d-flex justify-content-between align-items-center py-2 px-3">
            <div class="name text-white Noto-Sans-TC">
              <p>Scrum JS draggable</p>
            </div>
            <div>
              <img src="../assets/images/titan.png" alt="titan-logo">
            </div>
          </div>
          <div class="bg-section d-flex justify-content-around align-items-center">
            <div class="p-5">
              <img src="../assets/images/scrum.png" alt="scrum">
            </div>
            <div class="m-5" style="max-width: 600px">
              <h3 class="p-3 Noto-Serif-TC">
                Scrum 新手村
              </h3>
              <p class="px-3 Noto-Sans-TC">
                設計關卡內容與網頁互動效果，透過頁面關卡來呈現知識點，讓挑戰者藉由你設計的內容更了解 Scrum
              </p>
              <div class="px-3 py-5">
                <button class="btn btn-outline-dark rounded-pill me-3" type="button">
                  關卡攻略
                </button>
                <button class="btn btn-danger rounded-pill" type="button">
                  &emsp;投稿&emsp;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-5">
      <h2 class="Noto-Serif-TC fs-60 text-center bg-primary text-white py-5">
        賽程時間
      </h2>
      <div>
        <div class="d-flex justify-content-center my-5">
          <div class="timeline1"></div>
          <div class="d-flex flex-column justify-content-around align-items-center mx-5 Noto-Sans-TC schedule">
            <h3 class="fs-30">開始報名</h3>
            <div class="bg-primary diamond my-3 mx-3"
                :class="{'bg-danger': dateline[0]}"
            >
            </div>
            <p class="">10/13(四) 早上 11:00<br>至 11/6(日) 晚上 23:59</p>
          </div>
          <div class="d-flex flex-column justify-content-around align-items-center mx-5 Noto-Sans-TC schedule">
            <h3 class="fs-30">開賽</h3>
            <div class="bg-primary diamond my-3"
                :class="{'bg-danger': dateline[1]}"
            >
            </div>
            <p class="">UI組、團體組開賽 10/31<br>前端組開賽 11 /7</p>
          </div>
          <div class="d-flex flex-column justify-content-around align-items-center mx-5 Noto-Sans-TC schedule">
            <h3 class="fs-30">登陸作品</h3>
            <div class="bg-primary diamond my-3"
                :class="{'bg-danger': dateline[2]}"
            >
            </div>
            <p class="">10/31(一) 中午 12:00<br>至11/28(一) 中午 12:00</p>
          </div>
          <div class="d-flex flex-column justify-content-around align-items-center mx-5 Noto-Sans-TC schedule">
            <h3 class="fs-30">線上直播</h3>
            <div class="bg-primary diamond my-3"
                :class="{'bg-danger': dateline[3]}"
            >
            </div>
            <p class="">11/3 至 11/24(每週四)<br>&emsp;</p>
          </div>
        </div>
        <div class="d-flex justify-content-center my-5">
          <div class="timeline2"></div>
          <div class="d-flex flex-column justify-content-around align-items-center mx-5 Noto-Sans-TC schedule">
            <h3 class="fs-30">初選</h3>
            <div class="bg-primary diamond my-3 mx-3"
                :class="{'bg-danger': dateline[4]}"
            >
            </div>
            <p class="">12/05(五)<br>&emsp;</p>
          </div>
          <div class="d-flex flex-column justify-content-around align-items-center mx-5 Noto-Sans-TC schedule">
            <h3 class="fs-30">決選</h3>
            <div class="bg-primary diamond my-3"
                :class="{'bg-danger': dateline[5]}"
            >
            </div>
            <p class="">12/05(五)<br>&emsp;</p>
          </div>
        </div>
      </div>
      <div class="fs-28 Noto-Sans-TC text-center mb-5">
        <p>
          初選：將由六角學院前端、UI 評審進行第一波篩選，並於 12/5（五）公布初選佳作名單。
        </p>
        <p>
          決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於 12/23（五）公布企業得獎名單。
        </p>
      </div>
      <h2 class="Noto-Serif-TC fs-60 text-center bg-primary text-white py-5">
        獎項
      </h2>
      <div class="container my-5" id="awards">
        <div class="row" id="qq">
          <div class="col position-relative">
            <img src="../assets/images/group_award.png" alt="group_award">
            <div class="position-absolute bg-danger rounded-2 text-white bonus text-center pt-2">$10,000(3名)</div>
            <p class="text-center fs-26 Noto-Sans-TC">每個關卡各1組</p>
          </div>
          <div class="col position-relative">
            <img src="../assets/images/shortlisted_award.png" alt="shortlisted_award">
            <div class="position-absolute bg-danger rounded-2 text-white bonus text-center pt-2">$3,000(6名)</div>
            <p class="text-center fs-26 Noto-Sans-TC">每個關卡各2名，<br>設計一名，前端一名</p>
          </div>
          <div class="col position-relative">
            <img src="../assets/images/person_award.png" alt="person_award">
            <div class="position-absolute bg-danger rounded-2 text-white bonus text-center pt-2">數位獎狀(60名)</div>
            <p class="text-center fs-26 Noto-Sans-TC">每個關卡個人組十位，<br>團體組十組</p>
          </div>
        </div>
        <p class="Noto-Sans-TC fs-36 text-center mt-5">以上皆提供完賽數位獎狀</p>
      </div>
    </section>

    <section class="my-5">
      <div class="Noto-Serif-TC text-center py-5 position-relative"
          v-if="!freeGoodies"
      >
        <h2 class="text-primary fs-72">意想不到的好康</h2>
        <a href="#" class="text-danger fs-72 text-decoration-none"
          @click.prevent="freeGoodies = true"
        >
        請點擊
        </a>
        <Vue3Lottie :animationData="loading" class="loading-icon2"/>
      </div>
      <div v-if="freeGoodies">
      <h2 class="Noto-Serif-TC fs-60 text-center bg-primary text-white py-5">
        各界大神直播分享
      </h2>
        <div class="container my-5">
          <div class="row">
            <div class="col-6 bg-teacher1 position-relative text-center m-5">
              <a href="https://www.youtube.com/watch?v=9gzDFKTIFB4" class="text-decoration-none">
                <h2 class="pt-5 fs-57 Noto-Serif-TC">
                  網站的動態趨勢
                </h2>
                <p class="fs-20 speaker Noto-Serif-TC text-white px-4 py-2 test">
                  李明<br>版塊設計創辦人兼總監
                </p>
                <p class="fs-35 speaker-time Noto-Serif-TC">
                  11/13(四)20:00 ~ 21:30
                </p>
              </a>
            </div>
            <div class="col-6 bg-teacher2 position-relative text-center m-5">
              <a href="https://www.youtube.com/watch?v=9gzDFKTIFB4" class="text-decoration-none">
                <h2 class="pt-4 fs-49 Noto-Serif-TC">
                  jQuery也可以做到的互動效果
                </h2>
                <p class="fs-20 speaker Noto-Serif-TC text-white px-4 py-2 test">
                  Leo<br>Angular Taiwan 傳教士
                </p>
                <p class="fs-35 speaker-time Noto-Serif-TC">
                  11/10(四)20:00 ~ 21:30
                </p>
              </a>
            </div>
            <div class="col-6 bg-teacher3 position-relative text-center m-5">
              <a href="https://www.youtube.com/watch?v=9gzDFKTIFB4" class="text-decoration-none">
                <h2 class="pt-4 fs-46 Noto-Serif-TC">
                  網頁可以拖拖拉拉draggable.js 介紹
                </h2>
                <p class="fs-20 speaker Noto-Serif-TC text-white px-4 py-2 test">
                  邱繼緯<br>前端工程師
                </p>
                <p class="fs-35 speaker-time Noto-Serif-TC">
                  11/17(四)20:00 ~ 21:30
                </p>
              </a>
            </div>
            <div class="col-6 bg-teacher4 position-relative text-center m-5">
              <a href="https://www.youtube.com/watch?v=9gzDFKTIFB4" class="text-decoration-none">
                <h2 class="pt-4 fs-44 Noto-Serif-TC">
                  互動式網頁設計工程師該具備哪些技能？
                </h2>
                <p class="fs-20 speaker Noto-Serif-TC text-white px-4 py-2 test">
                  吳哲宇<br>墨雨互動設計 創辦人
                </p>
                <p class="fs-35 speaker-time Noto-Serif-TC">
                  11/24(四)20:00 ~ 21:30
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="bg-white d-flex justify-content-center py-3">
        <a href="https://titansoft.com/tw/go_jira">
          <img src="../assets/images/jira.png" alt="jira-logo" class="px-5">
        </a>
        <a href="https://www.atlassian.com/software/confluence">
          <img src="../assets/images/confluence.png" alt="confluence-logo" class="px-5">
        </a>
        <a href="https://titansoft.com/tw/get_miro">
          <img src="../assets/images/miro.png" alt="miro-logo" class="px-5">
        </a>
        <a href="https://www.dottedsign.com/zh-tw?utm_source_k=PR&utm_campaign_k=PR_Hexschool_SponsorEvent_2022&utm_medium_k=Hexschool">
          <img src="../assets/images/dotted.png" alt="dotted-logo" class="px-5">
        </a>
      </div>
      <div class="bg-primary">
        <h2 class="Noto-Serif-TC text-white text-center pt-5">贊助單位</h2>
        <div class="d-flex justify-content-around py-5">
          <a href="https://blockstudio.tw/">
            <img src="../assets/images/blockstudio.png" alt="blockstudio-logo">
          </a>
          <a href="https://www.kdanmobile.com/zh-tw">
            <img src="../assets/images/kdan.png" alt="kdan-logo">
          </a>
          <a href="https://titansoft.com/tw">
            <img src="../assets/images/titan.png" alt="titan-logo">
          </a>
        </div>
        <div class="text-white text-center Noto-Serif-TC pb-3">
          六角日報 © Code: <a href="https://github.com/kelvinLin9" class="text-danger text-decoration-none">Kelvin Lin</a>   /  Design: <a href="https://www.behance.net/KT_Designer" class="text-danger text-decoration-none">KT</a>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
import { mapState, mapActions } from 'pinia'
import gsapStore from '@/stores/gsapStore'
import timeStore from '@/stores/timeStore'
import AOS from 'aos'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import swipeUp from '@/assets/json/swipe_up.json'
import loading from '@/assets/json/loading.json'
import scrollDown from '@/assets/json/scroll_down.json'
export default {
  components: {
    Vue3Lottie
  },
  data () {
    return {
      swipeUp,
      loading,
      scrollDown,
      isLoading: true,
      freeGoodies: false
    }
  },
  computed: {
    ...mapState(timeStore, ['dateline'])
  },
  methods: {
    ...mapActions(gsapStore, ['bannerAnimation', 'ChallengeAnimation', 'awardsAnimation', 'loadingAnimation']),
    ...mapActions(timeStore, ['getTime']),
    moveToChallenge () {
      window.scrollTo({
        top: 1780,
        behavior: 'smooth' // smooth(平滑滚动),instant(瞬间滚动),默认值 auto
      })
    },
    moveToInstructions () {
      window.scrollTo({
        top: 3880,
        behavior: 'smooth'
      })
    },
    scrollStop () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', mo, false)
    },
    scrollMove () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = ''
      document.removeEventListener('touchmove', mo, false)
    }
  },
  mounted () {
    this.loadingAnimation()
    this.bannerAnimation()
    this.ChallengeAnimation()
    this.awardsAnimation()
    this.getTime()
    this.scrollStop()
    setTimeout(() => {
      this.scrollMove()
      this.isLoading = false
    }, 5000)
    AOS.init()
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  // width: calc(100vw - 17px);
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  .loading-icon {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .loading-text1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  .loading-text2 {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.scrollDown1 {
  width: 60px;
  height: 88px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index:1000
}
.scrollDown2 {
  width: 60px;
  height: 88px;
  position: absolute;
  top: 60%;
  left: 70%;
  z-index:1000;
  opacity: 0;
}
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
#challenge {
  overflow: hidden;
}
.scrollDown3 {
  width: 60px;
  height: 88px;
  position: absolute;
  top: 43%;
  left: 43%;
  z-index:1000;
}
.cooperation {
  width: 1200px;
  height: 528px;
}
.name {
  font-size: 44px;
}
// 第三部分
.schedule {
  width: 238px;
  height: 238px;
}
.diamond {
  width: 50px;
  height: 50px;
  transform: rotate(45deg)
}
.timeline1 {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 1000px;
    height: 5px;
    top: 106px;
    left: 180px;
    background-color:#38241B;
  }
}
.timeline2 {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 5px;
    top: 106px;
    left: 180px;
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
// 第四部份
.loading-icon2 {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 70%;
    left: 57%;
    transform: translate(-50%, -50%);
  }
.speaker {
  background-image: url(../assets/images/teacher_name_bg.png);
  width: 259px;
  height: 76px;
  position: absolute;
  top: 580px;
  left: 134px;
}
.speaker-time {
position: absolute;
top: 660px;
left: 63px;
}
</style>
