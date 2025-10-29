<script lang="ts" setup>
</script>

<template>
  <SectionsMain id="main" class="section-main" />
  <div class="content">
    <SectionsWhy id="why" />
    <SectionsPrograms id="programs" />
    <SectionsFeedback id="feedback" />
    <SectionsContacts id="contacts" />
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