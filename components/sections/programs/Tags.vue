<script lang="ts" setup>
interface ProgramsTagsProps {
  tags: {
    id: number;
    name: string;
  }[]
}

defineProps<ProgramsTagsProps>()
</script>

<template>
  <div class="programs-tags">
    <div v-for="tag in tags" :key="tag.id" class="programs-tags__tag">{{ tag.name }}</div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/media' as media;

.programs-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  &__tag {
    text-align: center;
    padding: 20px 30px;
    border: 1px solid $border-color;
    border-radius: 20px;
    font-family: $font-family-secondary;
    font-weight: 600;
    font-size: 14px;

    @include media.max('sm') {
      align-items: center;
      padding: 10px 16px;
      font-size: 10px;
    }
  }
}
</style>