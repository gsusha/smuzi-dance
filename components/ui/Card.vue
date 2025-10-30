<script lang="ts" setup>
interface UiCardProps {
  icon: string
  title: string
  subtitle: string
}

defineProps<UiCardProps>()
</script>

<template>
  <div class="ui-card">
    <div class="ui-card__icon">
      <img :src="icon" alt="" />
    </div>
    <div class="ui-card__content">
      <div class="ui-card__title">
        {{ title }}
      </div>
      <div class="ui-card__subtitle">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/media' as media;

.ui-card {
  padding: 20px 30px;
  background: $gray;
  border-radius: 20px;

  display: flex;
  align-items: center;
  gap: 20px;

  @include media.max('xs') {
    padding: 20px;
  }

  &__icon {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    background: $white;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-family: $font-family-secondary;
    line-height: 1.3;

    @include media.max('sm') {
      font-size: 14px;
    }

    @include media.max('xs') {
      font-size: 12px;
    }
  }

  &__subtitle {
    font-size: 14px;
    line-height: 1.2;
    opacity: 0.5;

    @include media.max('sm') {
      font-size: 12px;
    }

    @include media.max('xs') {
      font-size: 10px;
    }
  }
}
</style>
