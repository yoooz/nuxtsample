<template>
  <v-container>
    {{ seasonName }}
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
import { defineComponent, SetupContext, computed } from '@vue/composition-api'
import { useSeason } from '@/store/season'
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup(props) {
    console.dir(props)
    const season = useSeason()

    const seasonName = computed(() => hoge(season.seasonName))
    
    function hoge(item: string): string {
      return item + 'hoge'
    }

    function fuga(): string {
      return ''
    }

    return {
      season,
      seasonName,
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
