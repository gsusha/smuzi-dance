<script lang="ts" setup>
</script>

<template>
  <div class="layouts-default">
    <div class="layouts-default__wrapper">
      <BaseHeader />
      <slot/>
      <BaseFooter />
    </div>
    <BaseMenu class="layouts-default__menu" />
  </div>
</template>

<style lang="scss">
.layouts-default {
  &__wrapper {
    max-width: $container-width;
    padding: 0 40px;
    margin: 0 auto;
  }

  position: relative;

  &__menu {
    position: fixed;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.90' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
    pointer-events: none;
  }
}
</style>