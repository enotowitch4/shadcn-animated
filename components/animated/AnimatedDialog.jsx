"use client"

import { useEffect, useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import gsap from 'gsap'

export function AnimatedDialog({ trigger, title, description, children }) {
  const dialogRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out"
      })
    }, dialogRef)

    return () => ctx.revert()
  }, [])

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent ref={dialogRef}>
        <div ref={contentRef}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}