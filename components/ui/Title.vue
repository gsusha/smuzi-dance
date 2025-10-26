<script lang="ts" setup>
interface UiTitleProps {
  title: string
  subtitle?: string
  titlePosition?: 'left' | 'right' | 'center'
  subtitlePosition?: 'left' | 'right' | 'center'
}

withDefaults(defineProps<UiTitleProps>(), {
  titlePosition: 'center',
  subtitlePosition: 'center',
})
</script>

<template>
  <div class="ui-title">
    <h2 class="ui-title__title">{{ title }}</h2>
    <h3 v-if="subtitle" class="ui-title__subtitle">{{ subtitle }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.ui-title {
  display: flex;
  flex-direction: column;
  gap: 26px;

  &__title {
    font-family: $font-family-secondary;
    font-size: 126px;
    font-weight: 800;
    text-align: v-bind(titlePosition);
  }

  &__subtitle {
    text-align: v-bind(subtitlePosition);
  }
}
</style>
