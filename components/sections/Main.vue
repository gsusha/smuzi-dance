<script lang="ts" setup>
</script>

<template>
  <div class="main">
    <video
        class="main__video"
        autoplay
        muted
        loop
        playsinline
        preload="none"
        poster="/poster.webp"
    >
      <source src="/background.webm" type="video/webm"/>
    </video>
    <div class="main__bottom" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 100vh;

  &__video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    max-width: 100vw;
    min-height: 100vh;
    object-fit: cover;
  }

  &__bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 170px;
    width: 100%;

    background: linear-gradient(#1b1b1b00 0%, #1B1B1B 100%);
  }
}
</style>