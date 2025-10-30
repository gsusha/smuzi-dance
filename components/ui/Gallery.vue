<script lang="ts" setup>
import LightGallery from 'lightgallery/vue'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'

interface UiGalleryProps {
  images: string[]
}

defineProps<UiGalleryProps>()
</script>

<template>
  <LightGallery class="ui-gallery" :speed="500" :plugins="[lgZoom, lgThumbnail]">
    <a v-for="img in images" :key="img" :href="img">
      <NuxtImg
        class="ui-gallery__item"
        :src="img"
        width="200"
        height="200"
        format="webp"
        quality="60"
        loading="lazy"
      />
    </a>
  </LightGallery>
</template>

<style lang="scss" scoped>
.ui-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;

  &__item {
    width: 100%;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
}

</style>

<style>
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-zoom.css';
@import 'lightgallery/css/lg-thumbnail.css';
</style>
