<script setup lang="ts">
interface ProgramsTableHeader {
  key: string
  value: string
}

interface ProgramsTableRow {
  id: number
  age: string
  frequency: string
  duration?: string
}

interface ProgramsTableProps {
  table: {
    header: ProgramsTableHeader[]
    rows: ProgramsTableRow[]
  }
}

defineProps<ProgramsTableProps>()
</script>

<template>
  <div class="programs-table">
    <div class="programs-table__header">
      <div
        v-for="item in table.header"
        :key="item.key"
        class="programs-table__cell programs-table__cell--header"
      >
        {{ item.value }}
      </div>
    </div>

    <div v-for="row in table.rows" :key="row.id" class="programs-table__row">
      <div class="programs-table__cell">{{ row.age }}</div>

      <div class="programs-table__cell" :style="!row.duration ? 'grid-column: span 2;' : ''">
        {{ row.frequency }}
      </div>

      <div v-if="row.duration" class="programs-table__cell">{{ row.duration }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.programs-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 14px;

  &__header,
  &__row {
    display: contents;
  }

  &__cell {
    padding: 10px 12px;
    border-right: 1px solid $border-color;
    border-bottom: 1px solid $border-color;

    &:last-child {
      border-right: none;
    }

    &--header {
      color: $accent;
      border-bottom: 1px solid $border-color;
      font-weight: 600;
    }
  }

  &__row {
    &:last-child {
      .programs-table__cell {
        border-bottom: none;
      }
    }
  }
}
</style>
