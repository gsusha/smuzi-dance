<script setup lang="ts">
interface ContactsCtaProps {
  title: string
  subtitle: string
  buttons: {
    id: number
    text: string
    link: string
    icon: string
  }[]
}

defineProps<ContactsCtaProps>()
</script>

<template>
  <div class="contacts-cta">
    <div class="contacts-cta__content">
      <div class="contacts-cta__title">{{ title }}</div>
      <div class="contacts-cta__subtitle">{{ subtitle }}</div>
      <div class="contacts-cta__actions">
        <UiButton
          v-for="button in buttons"
          :key="button.id"
          :text="button.text"
          :link="button.link"
          :icon="button.icon"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts-cta {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 400px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 20px;
  }

  &__title {
    font-family: $font-family-secondary;
    font-size: 48px;
  }

  &__actions {
    display: flex;
    gap: 10px;
  }
}
</style>