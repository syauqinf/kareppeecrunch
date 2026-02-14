'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInit() {
  useEffect(() => {
    // Initialize AOS with performance optimizations
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      disable: 'mobile', // Disable on mobile for better performance
      anchorPlacement: 'top-bottom',
      startEvent: 'load',
      disableMutationObserver: false,
      throttleDelay: 99,
      debounceDelay: 50,
    })

    // Refresh AOS on route changes
    return () => {
      AOS.refresh()
    }
  }, [])

  return null
}
