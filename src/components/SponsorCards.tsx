'use client'
import StickyCard from "./reusable/StickyCard"
import { useEffect, useRef } from "react"
import { motion, useScroll } from "framer-motion"
import Lenis from '@studio-freight/lenis'

export default function SponsorCards() {
    // Remove the target so it listens to the viewport scroll.
    const { scrollYProgress } = useScroll()

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            console.log(latest)
        })
        return unsubscribe
    }, [scrollYProgress])

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1,
        })

        function raf(time: number): void {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div>
            <StickyCard title="Platinum" i={0} cardClass="bg-indigo-100 min-h-100 text-center">
                <p>
                    Platinum sponsors are the best of the best!
                </p>
            </StickyCard>
            <StickyCard title="Gold" i={1} cardClass="bg-yellow-400 min-h-100 text-center">
                <p>
                    Gold sponsors are the second best!
                </p>  
            </StickyCard>
            <StickyCard title="Bronze" i={2} cardClass="bg-yellow-600 min-h-100 text-center">
                <p>
                    Bronze sponsors are the third best!
                </p>  
            </StickyCard>
        </div>
    )
}