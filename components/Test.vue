<template>
  <v-container>
    {{ season.seasonName }}
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.name"
        @click="season.setSeasonNameText(item.name)"
      >
        {{ item.name }}
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import { useSeason } from '@/store/season'

export default defineComponent({
  setup() {
    const season = useSeason()

    return {
      season,
    }
  },
  data: () => {
    return {
      items: [
        { name: 'Spring' },
        { name: 'Summer' },
        { name: 'Autom' },
        { name: 'Winter' },
      ],
    }
  },
})
</script>
