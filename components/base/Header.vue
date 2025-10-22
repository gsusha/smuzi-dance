<script lang="ts" setup>
import LogoImage from '~/assets/images/logo.svg'
</script>

<template>
  <header class="header">
    <LogoImage class="header__logo" />
    <div class="header__phone">+79167359116</div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0;

  &__phone {
    background: $accent;
    color: $text-color-secondary;
    font-family: $font-family-secondary;
    padding: 4px;
    border-radius: 2px;
  }
}
</style>