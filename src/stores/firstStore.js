import { defineStore } from 'pinia'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineStore('firstStore', {
  actions: {
    bannerAnimation () {
      gsap.registerPlugin(ScrollTrigger)
      const scrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: '.banner',
          pin: true,
          markers: true,
          scrub: true
        }
      }) // global animation
      scrollTL.to('.newspaper-up', {
        yPercent: '-100'
      })
      scrollTL.to('.newspaper-right', {
        yPercent: '100'
      }, '<')
      scrollTL.to('.newspaper-left', {
        yPercent: '100'
      }, '<')
    }
  }
})
