<script lang="ts" setup>
import { feedback } from '~/data/sections'
import { IconPosition } from '~/types'
</script>

<template>
  <section class="feedback">
    <UiTitle :title="feedback.title" :subtitle="feedback.subtitle" />
    <div class="feedback__content">
      <div class="feedback__reviews">
        <div v-for="review in feedback.reviews" :key="review.id" class="feedback__review">
          <div class="feedback__review-image">
            <img class="feedback__review-image-file" :src="review.img" alt="" />
            <div class="feedback__review-rate">
              <Icon
                class="feedback__review-rate-icon"
                v-for="(_star, i) in 5"
                :key="i"
                name="material-symbols:star-rounded"
                :size="12"
              />
            </div>
          </div>
          <div class="feedback__review-content">
            <div class="feedback__review-text">{{ review.text }}</div>
            <div class="feedback__review-author">{{ review.author }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="feedback__links">
      <UiButton
        v-for="link in feedback.links"
        :key="link.id"
        :link="link.link"
        :text="link.text"
        :icon="link.icon"
        :custom-icon="link.customIcon"
        :icon-position="IconPosition.Left"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/media' as media;

.feedback {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 130px;

  @include media.max('sm') {
    gap: 60px;
  }

  &__reviews {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @include media.max('lg') {
      grid-template-columns: 1fr;
    }
  }

  &__review {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    background: $gray-dark;

    min-height: 130px;
    border-radius: 8px;

    &-image {
      flex: 0 0 100px;
      width: 100px;
      height: 100px;
      background: rgba($accent, 0.4);
      border-radius: 0 50px 0 8px;
      position: relative;

      &-file {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        max-width: 100px;
      }
    }

    &-rate {
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);

      display: flex;

      background: $accent;
      border-radius: 2px;
      padding: 4px;

      &-icon {
        display: block;
        color: $black;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;

      height: 100%;
      padding: 14px;
      font-size: 12px;
    }

    &-text {
      font-size: 12px;
      line-height: 1.2;
      color: $gray-light;
    }

    &-author {
      color: $white;
      text-align: right;
      font-weight: 500;
    }
  }

  &__links {
    display: flex;
    gap: 20px;

    @include media.max('sm') {
      width: 100%;
      flex-direction: column;

      .ui-button {
        width: 100%;
      }
    }
  }
}
</style>
