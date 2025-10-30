<script lang="ts" setup>
const images = [
  '/gallery/1.jpeg',
  '/gallery/2.jpeg',
  '/gallery/3.jpeg',
  '/gallery/4.jpeg',
  '/gallery/5.jpeg',
  '/gallery/6.jpeg',
  '/gallery/7.jpeg',
  '/gallery/8.jpeg',
  '/gallery/9.jpeg',
  '/gallery/10.jpeg',
  '/gallery/11.jpeg',
  '/gallery/12.jpeg',
  '/gallery/13.jpeg',
  '/gallery/14.jpeg',
  '/gallery/15.jpeg',
]
</script>

<template>
  <section class="gallery">
    <UiGallery :images="images" />
  </section>
</template>

<style lang="scss" scoped></style>
