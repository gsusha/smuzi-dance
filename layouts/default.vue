<script lang="ts" setup></script>

<template>
  <div class="layouts-default">
    <BaseHeader />
    <slot/>
    <BaseFooter />
  </div>
</template>

<style lang="scss">
.layouts-default {
  max-width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>