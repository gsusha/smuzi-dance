<script lang="ts" setup>
import LogoImage from '~/assets/images/logo.svg'
import { phoneNumber } from '~/data/common'
</script>

<template>
  <header class="header">
    <a class="header__logo" href="#"><LogoImage class="header__logo" /></a>
    <a class="header__phone" :href="`tel:${phoneNumber}`" target="_blank">{{ phoneNumber }}</a>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/media' as media;

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: $container-width;
  padding: 30px 40px;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @include media.max('sm') {
    padding: 20px;
  }

  &__phone {
    display: block;
    background: $accent;
    color: $black;
    font-family: $font-family-secondary;
    padding: 4px 8px;
    border-radius: 2px;
    transition: 0.3s ease;

    &:hover {
      box-shadow: 0 0 12px 4px rgba($accent, 0.6);
    }

    @include media.max('sm') {
      font-size: 14px;
    }
  }
}
</style>
