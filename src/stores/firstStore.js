import { defineStore } from 'pinia'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineStore('firstStore', {
  actions: {
    bannerAnimation () {
      gsap.registerPlugin(ScrollTrigger)
      const scrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: '#banner',
          pin: true,
          markers: true,
          scrub: true
        }
      }) // global animation
      scrollTL.to('.scrollDown1', {
        opacity: 0
      })
      scrollTL.to('.scroll', {
        opacity: 0
      })
      scrollTL.to('.newspaper-up', {
        yPercent: '-100'
      })
      scrollTL.to('.newspaper-right', {
        yPercent: '100'
      }, '<')
      scrollTL.to('.newspaper-left', {
        yPercent: '100'
      }, '<')
      scrollTL.to('.v', {
        yPercent: '-35'
      })
      scrollTL.to('.task', {
        opacity: 1
      })
      scrollTL.to('.scrollDown2', {
        opacity: 1
      })
    }
  }
})
