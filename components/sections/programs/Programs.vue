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
    <div class="programs__timeline">
      <div v-for="point in programs.timeline" :key="point.id" class="programs__timeline-point">
        <div class="programs__timeline-circle" />
        <div class="programs__timeline-content">
          <div class="programs__timeline-age">{{ point.age }}</div>
          <div class="programs__timeline-title">{{ point.title }}</div>
          <div class="programs__timeline-description">{{ point.description }}</div>
        </div>
      </div>
    </div>
    <div class="programs__schedule">
      <UiSubtitle>{{ programs.schedule.title }}</UiSubtitle>
      <div class="programs__schedule-table">
      <SectionsProgramsTable :table="programs.schedule.table" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.programs {
  display: flex;
  flex-direction: column;
  gap: 130px;

  &__timeline {
    display: flex;
    flex-direction: column;

    &-point {
      display: flex;
      gap: 60px;
      position: relative;
      padding-bottom: 100px;

      &::before {
        content: '';
        position: absolute;
        left: 10px;
        top: 36px;
        bottom: 16px;
        display: block;
        width: 1px;
        background: $border-color;
      }

      &:last-child {
        padding: 0;

        &::before {
          display: none;
        }
      }
    }

    &-circle {
      width: 21px;
      height: 21px;
      border-radius: 50%;
      background: $accent;
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    &-age {
      color: $accent;
      font-family: $font-family-secondary;
    }

    &-title {
      font-size: 20px;
      font-family: $font-family-secondary;
    }

    &-description {
      font-size: 14px;
    }
  }

  &__schedule, &__disciplines {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
}
</style>
