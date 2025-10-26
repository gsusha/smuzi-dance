<script lang="ts" setup>
interface UiButtonProps {
  text?: string
  iconLeft?: string
  iconRight?: string
  link?: string
}

defineProps<UiButtonProps>()
</script>

<template>
  <component :is="link ? 'a' : 'button'" :href="link" class="ui-button">
    <span v-if="iconLeft" class="ui-button__icon ui-button__icon--left">
      <Icon :name="iconLeft" :size="24" />
    </span>

    <span v-if="text" class="ui-button__text">
      {{ text }}
    </span>

    <span v-if="iconRight" class="ui-button__icon ui-button__icon--right">
      <Icon :name="iconRight" :size="24" />
    </span>
  </component>
</template>

<style lang="scss" scoped>
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

  &__icon {
    display: flex;
    align-items: center;
  }
}
</style>
