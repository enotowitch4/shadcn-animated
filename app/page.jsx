"use client"

import { AnimatedButton } from "@/components/animated/AnimatedButton"
import { AnimatedCard } from "@/components/animated/AnimatedCard"
import { AnimatedDialog } from "@/components/animated/AnimatedDialog"
import { useEffect } from "react"
import gsap from "gsap"

export default function Home() {
  useEffect(() => {
    gsap.from(".stagger-fade-up", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 stagger-fade-up">Animated Components</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="stagger-fade-up">
          <AnimatedCard
            title="Animated Card"
            description="Hover to see the animation"
          >
            <p className="text-gray-600">This card animates on mount and hover!</p>
          </AnimatedCard>
        </div>

        <div className="stagger-fade-up">
          <AnimatedCard
            title="Interactive Elements"
            description="Try the button below"
          >
            <div className="space-y-4">
              <AnimatedButton>Click me!</AnimatedButton>
              <AnimatedButton variant="secondary">Secondary Button</AnimatedButton>
            </div>
          </AnimatedCard>
        </div>

        <div className="stagger-fade-up">
          <AnimatedCard
            title="Dialog Example"
            description="Click to open dialog"
          >
            <AnimatedDialog
              trigger={<AnimatedButton>Open Dialog</AnimatedButton>}
              title="Animated Dialog"
              description="This dialog animates when it opens"
            >
              <div className="p-4">
                <p>Dialog content goes here!</p>
              </div>
            </AnimatedDialog>
          </AnimatedCard>
        </div>
      </div>
    </div>
  )
}