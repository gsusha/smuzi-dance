<script lang="ts" setup>
import LogoImage from '~/assets/images/logo.svg'
import { phoneNumber } from '~/data/common'
</script>

<template>
  <header class="header">
    <LogoImage class="header__logo" />
    <a class="header__phone" :href="`tel:${phoneNumber}`" target="_blank">{{ phoneNumber }}</a>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: $container-width;
  padding: 30px 0;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  &__phone {
    display: block;
    background: $accent;
    color: $text-color-secondary;
    font-family: $font-family-secondary;
    padding: 4px;
    border-radius: 2px;
  }
}
</style>
