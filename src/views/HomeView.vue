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
  <div class="">
    <section class="position-relative vh-100 test overflow-hidden">
      <div class="w-100 position-absolute newspaper-up">
        <img src="../assets/images/newspaper_up.png" alt="" class="w-100 ">
      </div>
      <div class="w-100 position-absolute newspaper-left">
        <img src="../assets/images/newspaper_left.png" alt="" class="w-75">
      </div>
      <div class="w-100 position-absolute newspaper-right">
        <img src="../assets/images/newspaper_right.png" alt="" class="w-75">
      </div>
    </section>
  </div>
  7788995
</template>

<script>

</script>

<style scoped>
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
</style>
