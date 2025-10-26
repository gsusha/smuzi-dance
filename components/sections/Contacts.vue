<script lang="ts" setup>
import { contacts } from '~/data/sections'
import { HorizontalPosition } from '~/types'
</script>

<template>
  <div class="contacts">
    <UiTitle
      :title="contacts.title"
      :subtitle="contacts.subtitle"
      :title-position="HorizontalPosition.Right"
      :subtitle-position="HorizontalPosition.Right"
    />
    <div class="contacts__cta">
      <div class="contacts__cta-content">
        <div class="contacts__cta-title">{{ contacts.cta.title }}</div>
        <div class="contacts__cta-subtitle">{{ contacts.cta.subtitle }}</div>
        <div class="contacts__cta-actions">
          <UiButton
            v-for="button in contacts.cta.buttons"
            :key="button.id"
            :text="button.text"
            :link="button.link"
            :icon="button.icon"
          />
        </div>
      </div>
    </div>
    <div class="contacts__note">{{ contacts.note }}</div>
    <div class="contacts__map"></div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  gap: 100px;

  &__cta {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 400px;

    &-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 20px;
    }

    &-title {
      font-family: $font-family-secondary;
      font-size: 48px;
    }

    &-actions {
      display: flex;
      gap: 10px;
    }
  }

  &__note {
    font-family: $font-family-secondary;
    text-align: center;
  }
}
</style>
