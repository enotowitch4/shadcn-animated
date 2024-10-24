"use client"

import { useEffect, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import gsap from 'gsap'

export function AnimatedCard({ title, description, children, footer }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      })
    })

    return () => ctx.revert()
  }, [])

  const handleHover = () => {
    gsap.to(cardRef.current, {
      y: -5,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleHoverOut = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      duration: 0.3,
      ease: "power2.out"
    })
  }

  return (
    <Card
      ref={cardRef}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      className="transition-shadow"
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}