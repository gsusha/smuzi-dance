<script lang="ts" setup>
import { CTA_BUTTON, MENU_ITEMS } from '~/data/common'
import { useIntersectionObserver } from '@vueuse/core'

const activeSection = ref<string | null>(null)

onMounted(() => {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[id]'))

  sections.forEach(section => {
    useIntersectionObserver(
      section,
      ([entry]) => {
        console.log(entry)
        if (entry?.isIntersecting) activeSection.value = entry.target.id
      },
      {
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0.1,
      }
    )
  })
})
</script>

<template>
  <nav class="menu">
    <ul class="menu__items">
      <li v-for="item in MENU_ITEMS" :key="item.id">
        <a :class="['menu__item', { 'menu__item--active': item.id === activeSection }]" :href="item.slug">{{ item.name }}</a>
      </li>
      <li>
        <a class="menu__item menu__item--cta" :href="CTA_BUTTON.link" target="_blank">
          {{ CTA_BUTTON.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/media' as media;

.menu {
  border-radius: 8px;
  border: 1px solid $border-menu-color;

  background: rgba($bg-color, 0.15);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  overflow: hidden;

  &__items {
    display: flex;
    gap: 8px;
    padding: 6px;
    border-radius: 8px;
  }

  &__item {
    display: block;
    padding: 6px 20px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    color: $white;
    white-space: nowrap;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    @include media.max('sm') {
      padding: 4px 10px;
      font-size: 10px;
    }

    @include media.max('xs') {
      padding: 4px 10px;
      font-size: 8px;
    }

    &:hover {
      background: $white;
      color: $black;
    }

    &--active {
      color: $black;
      background: $accent;
    }

    &--cta {
      color: $accent;

      &:hover {
        background: $accent;
        color: $black;
        box-shadow: 0 0 12px 4px rgba($accent, 0.6);
      }
    }
  }
}
</style>
