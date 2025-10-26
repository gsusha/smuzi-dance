<script lang="ts" setup>
import { main } from '~/data/sections'
</script>

<template>
  <div class="main">
    <div class="main__video">
      <video autoplay muted loop playsinline preload="none" poster="/poster.webp">
        <source src="/background.webm" type="video/webm" />
      </video>
    </div>

    <div class="main__content">
      <h1 class="main__content-title">
        {{ main.title }}
      </h1>
      <UiButton :text="main.button.text" :icon="main.button.icon" :link="main.button.link" />
    </div>

    <div class="main__bottom" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  &__video {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: $black;
      opacity: 0.3;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    &-title {
      font-family: $font-family-secondary;
      font-size: 48px;
      text-align: center;
      line-height: 1.2;
      max-width: 70%;
    }
  }

  &__bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 170px;
    width: 100%;
    pointer-events: none;

    z-index: -1;

    background: linear-gradient(rgba($bg-color, 0) 0%, $bg-color 100%);
  }
}
</style>
