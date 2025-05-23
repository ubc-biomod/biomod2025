'use client'
import Card from './Card'

const StickyCard = ({ title, className, children, i}: { title?: string; className?: string; children?: React.ReactNode; i: number; }) => {
    return (
        <div className="sticky top-0 flex justify-center items-center h-[100vh]">
            <div className="relative w-full" style={{top:`calc(${i * 25}px)`}}>
                <Card title={title} className={className}>
                    {children}
                </Card>
            </div>
        </div>
    )
}

export default StickyCard