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
.ui-card {
  padding: 20px 30px;
  background: $gray;
  border-radius: 20px;

  display: flex;
  align-items: center;
  gap: 20px;

  &__icon {
    flex: 0 0 50px;
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
  }

  &__subtitle {
    font-size: 14px;
    line-height: 1.2;
    opacity: 0.5;
  }
}
</style>
