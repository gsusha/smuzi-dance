<script lang="ts" setup>
import { programs } from '~/data/sections'
import { HorizontalPosition } from '~/types'
</script>

<template>
  <div class="programs">
    <UiTitle
      :title="programs.title"
      :subtitle="programs.subtitle"
      :title-position="HorizontalPosition.Left"
      :subtitle-position="HorizontalPosition.Right"
    />
  </div>
</template>

<style lang="scss" scoped>
.programs {
  display: flex;
  flex-direction: column;
  gap: 130px;
}
</style>
