<script lang="ts" setup>
import { contacts } from '~/data/sections'
import { HorizontalPosition } from '~/types'
</script>

<template>
  <section class="contacts">
    <UiTitle
      :title="contacts.title"
      :subtitle="contacts.subtitle"
      :title-position="HorizontalPosition.Right"
      :subtitle-position="HorizontalPosition.Right"
    />
    <SectionsContactsCta v-bind="contacts.cta" />
    <div class="contacts__note">{{ contacts.note }}</div>
    <SectionsContactsMap />
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  gap: 100px;

  &__note {
    font-family: $font-family-secondary;
    text-align: center;
  }
}
</style>
