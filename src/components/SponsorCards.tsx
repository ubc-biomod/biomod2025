'use client'
import StickyCard from "./reusable/StickyCard"

export default function SponsorCards() {
    return (
        <div>
            <div className="w-full text-center sticky top-15 py-4 -z-20">
                <h1 className="font-bold text-xl mb-2">
                    Many thanks to our sponsors!
                </h1>
                <p>
                    Our project wouldn't be possible without the generous support of our sponsors.
                </p>
            </div>
            <StickyCard title="Gold Tier" i={0} cardClass="bg-yellow-400 min-h-100 text-center">
                <div className="flex flex-col lg:flex-row justify-around gap-10 p-10">
                    <img src="/images/sponsors/SBME_UBC.png" alt="UBC SBME" className="h-30 object-contain" />
                    <img src="/images/sponsors/apsc.jpg" alt="UBC Applied Sciences" className="h-40 object-contain" />
                </div>
            </StickyCard>
            <StickyCard title="Bronze Tier" i={1} cardClass="bg-yellow-600 min-h-100 text-center">
                <div className="flex flex-col lg:flex-row justify-center gap-10 p-10">
                    <img src="/images/sponsors/lsi.jpg" alt="Life Science Institute" className="h-20 object-contain" />
                    <img src="/images/sponsors/New_England_Biolabs_logo.png" alt="New England Biolabs" className="h-20 object-contain" />
                    <img src="/images/sponsors/sino_biological.webp" alt="Sino Biological" className="h-20 object-contain" />
                </div>
            </StickyCard>
        </div>
    )
}