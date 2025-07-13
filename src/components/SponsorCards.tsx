'use client'
import StickyCard from "./reusable/StickyCard"
import { useEffect, useRef } from "react"

export default function SponsorCards() {
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