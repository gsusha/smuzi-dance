<script lang="ts" setup>
import { gallery } from '~/data/sections'
import { HorizontalPosition } from '~/types'
</script>

<template>
  <section class="gallery">
    <UiTitle
      :title="gallery.title"
      :subtitle="gallery.subtitle"
      :title-position="HorizontalPosition.Left"
      :subtitle-position="HorizontalPosition.Left"
    />
    <UiGallery :images="gallery.images" />
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/media' as media;

.gallery {
  display: flex;
  flex-direction: column;
  gap: 130px;

  @include media.max('sm') {
    gap: 60px;
  }
}
</style>
