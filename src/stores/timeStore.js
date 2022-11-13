import { defineStore } from 'pinia'

export default defineStore('timeStore', {
  state: () => ({
    dateline: []
  }),
  actions: {
    getTime () {
      const today = new Date()
      const days = [
        new Date('2022-10-13'),
        new Date('2022-10-31'),
        new Date('2022-10-31'),
        new Date('2022-11-3'),
        new Date('2022-12-5'),
        new Date('2022-12-5')
      ]
      days.forEach((item, index) => {
        if (today > item) {
          this.dateline[index] = true
        } else {
          this.dateline[index] = false
        }
      })
    }
  }
})
