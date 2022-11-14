import { defineStore } from 'pinia'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineStore('gsapStore', {
  actions: {
    loadingAnimation () {
      gsap.to('.loading', {
        opacity: 0,
        delay: 5
      })
    },
    bannerAnimation () {
      gsap.registerPlugin(ScrollTrigger)
      const scrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: '#banner',
          pin: true, // 釘選
          // markers: true,
          scrub: true // 決定動畫播放是否依賴視窗滾動
        }
      })
      scrollTL.to('.scrollDown1', {
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
    },
    ChallengeAnimation () {
      gsap.registerPlugin(ScrollTrigger)
      const scrollCha = gsap.timeline({
        scrollTrigger: {
          trigger: '#blockStudio',
          start: 'top 75%',
          end: 'top -30%',
          // markers: true,
          scrub: true
        }
      })
      scrollCha.from('#blockStudio', {
        xPercent: '-150',
        opacity: 0
      })
      scrollCha.from('#kdan', {
        xPercent: '150',
        opacity: 0
      })
      scrollCha.from('#titan', {
        xPercent: '-150',
        opacity: 0
      })
    },
    awardsAnimation () {
      gsap.registerPlugin(ScrollTrigger)
      const scrollCha = gsap.timeline({
        scrollTrigger: {
          trigger: '#awards',
          start: 'top 100%',
          end: 'top 80%',
          // markers: true,
          scrub: true
        }
      })
      scrollCha.from('#awards', {
        yPercent: '100',
        opacity: 0
      })
    }
  }
})
