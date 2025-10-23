<script lang="ts" setup>
interface UiTitleProps {
  title: string;
  subtitle?: string;
  titlePosition?: 'left' | 'right' | 'center';
  subtitlePosition?: 'left' | 'right' | 'center';
}

withDefaults(defineProps<UiTitleProps>(), {
  titlePosition: 'center',
  subtitlePosition: 'center',
})
</script>

<template>
  <div class="ui-title">
    <div class="ui-title__title">{{ title }}</div>
    <div v-if="subtitle" class="ui-title__subtitle">{{ subtitle }}</div>
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