<script lang="ts" setup>
import { HorizontalPosition } from '~/types'

interface UiTitleProps {
  title: string
  subtitle?: string
  titlePosition?: HorizontalPosition
  subtitlePosition?: HorizontalPosition
}

withDefaults(defineProps<UiTitleProps>(), {
  titlePosition: HorizontalPosition.Center,
  subtitlePosition: HorizontalPosition.Center,
})
</script>

<template>
  <div class="ui-title">
    <h2 class="ui-title__title" :style="{ textAlign: titlePosition }">{{ title }}</h2>
    <h4 v-if="subtitle" class="ui-title__subtitle" :style="{ textAlign: subtitlePosition }">
      {{ subtitle }}
    </h4>
  </div>
</template>

<style lang="scss" scoped>
.ui-title {
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;

  &__title {
    font-family: $font-family-secondary;
    font-size: 126px;
    font-weight: 800;
  }

  &__subtitle {
    line-height: 1.2;
  }
}
</style>
