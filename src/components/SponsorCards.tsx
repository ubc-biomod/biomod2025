'use client'
import StickyCard from "./reusable/StickyCard"
import { useEffect, useRef } from "react"

export default function SponsorCards() {
    return (
        <div>
            <StickyCard title="Gold" i={0} cardClass="bg-yellow-400 min-h-100 text-center">
                <p>
                    Gold sponsors!
                    UBC School of Biomedical Engineering, UBC Engineering
                </p>  
            </StickyCard>
            <StickyCard title="Bronze" i={1} cardClass="bg-yellow-600 min-h-100 text-center">
                <p>
                    Bronze sponsors!
                    UBC Life Science Institute, Sino Biological, and New England Biolabs
                </p>  
            </StickyCard>
        </div>
    )
}