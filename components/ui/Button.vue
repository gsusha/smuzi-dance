<script lang="ts" setup>
import { IconPosition } from '~/types'

interface UiButtonProps {
  text?: string
  link?: string
  icon?: string
  customIcon?: Component
  iconPosition?: IconPosition
}

withDefaults(defineProps<UiButtonProps>(), {
  iconPosition: IconPosition.Right,
})
</script>

<template>
  <component :is="link ? 'a' : 'button'" :href="link" target="_blank" class="ui-button">
    <span v-if="iconPosition === IconPosition.Left" class="ui-button__icon ui-button__icon--left">
      <Icon v-if="icon" :name="icon" :size="24" />
      <component v-else-if="customIcon" :is="customIcon" class="w-6 h-6" />
    </span>

    <span v-if="text" class="ui-button__text">
      {{ text }}
    </span>

    <span v-if="iconPosition === IconPosition.Right" class="ui-button__icon ui-button__icon--right">
      <Icon v-if="icon" :name="icon" :size="24" />
      <component v-else-if="customIcon" :is="customIcon" class="w-6 h-6" />
    </span>
  </component>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/media' as media;

.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  gap: 10px;

  padding: 10px 22px;
  background: $accent;
  color: $black;

  border-radius: 6px;

  font-family: $font-family-secondary;
  font-weight: 700;
  font-size: 16px;

  width: fit-content;

  @include media.max('md') {
    font-size: 14px;
  }

  @include media.max('sm') {
    font-size: 12px;
  }

  &__icon {
    display: flex;
    align-items: center;
  }

  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 12px 4px rgba($accent, 0.6);
  }
}
</style>
