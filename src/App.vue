<template>
  <div class="bg-full">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/all.scss";
body {
  overflow-x: hidden;
  cursor: url(./assets/images/sym761.ani);
}
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    --webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 6px;
}

::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #38241B;
    --webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
    background: #f8f8f8;
}
</style>
