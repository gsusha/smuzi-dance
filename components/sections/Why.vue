<script lang="ts" setup>
import { why } from '~/data/sections'

const sentences = why.note
  .split('.')
  .map((s) => s.trim())
  .filter(Boolean)
</script>

<template>
  <section class="why">
    <UiTitle :title="why.title" :subtitle="why.subtitle" />
    <div class="why__cards">
      <UiCard
        v-for="card in why.cards"
        :icon="card.icon"
        :title="card.title"
        :subtitle="card.subtitle"
      />
    </div>
    <div class="why__note">
      <span v-for="(s, i) in sentences" :key="i">
        {{ s }}.
        <br />
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  &__note {
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    max-width: 80%;
  }
}
</style>
