import { defineStore } from 'pinia'

export const useSeason = defineStore('season', {
  state: () => {
    return { seasonNameText: '' }
  },
  actions: {
    setSeasonNameText(val: string) {
      this.seasonNameText = val
      console.log('hoge')
      console.dir(this.$nuxt.app.$deps.repository)
    },
  },
  getters: {
    seasonName: (state) => state.seasonNameText,
  },
})
