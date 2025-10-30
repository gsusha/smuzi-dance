<script lang="ts" setup>
</script>

<template>
  <SectionsMain id="main" class="section-main" />
  <div class="content container">
    <SectionsWhy id="why" />
    <SectionsPrograms id="programs" />
    <SectionsFeedback id="feedback" />
    <SectionsContacts id="contacts" />
    <SectionsGallery />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/media' as media;

.section-main {
  margin-bottom: 100px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 200px;

  @include media.max('sm') {
    gap: 100px;
  }
}
</style>