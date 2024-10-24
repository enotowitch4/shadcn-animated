"use client"

import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import gsap from 'gsap'

export function AnimatedButton({ children, variant, size, ...props }) {
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      })
    })

    return () => ctx.revert()
  }, [])

  const handleHover = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out"
    })
  }

  const handleHoverOut = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    })
  }

  return (
    <Button
      ref={buttonRef}
      variant={variant}
      size={size}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      {...props}
    >
      {children}
    </Button>
  )
}