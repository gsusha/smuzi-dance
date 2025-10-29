<script lang="ts" setup></script>

<template>
  <div class="layouts-default">
    <BaseHeader />
    <slot/>
    <BaseFooter />
  </div>
  <BaseMenu class="layouts-default__menu" />
</template>

<style lang="scss">
.layouts-default {
  max-width: $container-width;
  padding: 0 20px;
  margin: 0 auto;

  &__menu {
    position: fixed;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
  }
}
</style>