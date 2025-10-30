<script lang="ts" setup>
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from 'vue-yandex-maps'

import { shallowRef } from 'vue'
import type { YMap } from '@yandex/ymaps3-types'
import { address, coordinates, links } from '~/data/common'

const map = shallowRef<null | YMap>(null)
</script>

<template>
  <a class="contacts-map" :href="links.map" target="_blank">
    <YandexMap
      class="contacts-map__map"
      v-model="map"
      :settings="{
        location: {
          center: coordinates,
          zoom: 16,
        },
        theme: 'dark',
      }"
      width="100%"
      height="300px"
      :zIndex="-1"
    >
      <YandexMapDefaultSchemeLayer />
      <YandexMapDefaultFeaturesLayer />
      <YandexMapMarker :settings="{ coordinates: coordinates }">
        <a :href="links.map" target="_blank">
          <img src="/pin.svg" alt="" />
        </a>
      </YandexMapMarker>
    </YandexMap>
    <div class="contacts-map__hint">
      {{ address }}
    </div>
  </a>
</template>

<style lang="scss">
.contacts-map {
  display: block;
  position: relative;
  cursor: pointer;

  canvas {
    filter: grayscale(1) brightness(0.5);
    border-radius: 20px;
  }

  &__map {
    pointer-events: none;
  }

  &__hint {
    position: absolute;
    left: 20px;
    bottom: 20px;

    background: $bg-color;
    padding: 10px 16px;
    border-radius: 10px;

    font-size: 14px;
    font-weight: 500;

    background: $accent;
    color: $black;
    transition: 0.3s ease;
  }

  &:hover {
    .contacts-map__hint {
      box-shadow: 0 0 12px 4px rgba($accent, 0.6);
    }
  }
}
</style>
