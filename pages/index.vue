<script lang="ts" setup>
</script>

<template>
  <SectionsMain class="section-main" />
  <div class="content">
    <SectionsWhy />
    <SectionsPrograms />
    <SectionsFeedback />
  </div>
</template>

<style lang="scss" scoped>
.section-main {
  margin-bottom: 100px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 200px;
}
</style>