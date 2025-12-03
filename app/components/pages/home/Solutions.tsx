'use client'

import type React from 'react'

import { useCallback, useRef, useState } from 'react'
import { cn } from '~/lib/utils'

interface BeforeAfterSliderProps {
    beforeImage: string
    afterImage: string
    label: string
    order: number
}

export function BeforeAfterSlider({
    beforeImage,
    afterImage,
    label,
    order,
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
        setSliderPosition(percent)
    }, [])

    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = () => setIsDragging(false)
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return
        handleMove(e.clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX)
    }

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full max-h-screen aspect-3/4 rounded-2xl overflow-hidden cursor-ew-resize select-none", order % 2 === 0 ? 'rounded-br-none' : 'rounded-tr-none lg:mt-16')}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
        >
            <img
                src={afterImage || '/placeholder.svg'}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
            />
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage || '/placeholder.svg'}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                />
            </div>
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `calc(${sliderPosition}% - 2px)` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* Slider Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex gap-0.5">
                        <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
                        <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Label */}
            <div className={cn("absolute w-full bg-[#2d5a27] text-golden px-4 py-1 text-center text-md font-medium shadow-lg",order % 2 === 0 && 'bottom-0')}>
                {label}
            </div>

            {/* Before/After Labels */}
            <div className={cn("absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs",order % 2 === 0 && 'top-4 bottom-auto')}>
                Преди
            </div>
            <div className={cn("absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs",order % 2 === 0 && 'top-4 bottom-auto')}>
                След
            </div>
        </div>
    )
}

const solutions = [
    {
        id: 1,
        label: 'Епоксидни настилки',
        beforeImage: '/images/solutions/before1.jpg',
        afterImage: '/images/solutions/after1.jpg',
    },
    {
        id: 2,
        label: 'Хидроизолация',
        beforeImage: '/images/solutions/before2.jpg',
        afterImage: '/images/solutions/after2.jpg',
    },
    {
        id: 3,
        label: 'Интериорно боядисване',
        beforeImage: '/images/solutions/before3.jpg',
        afterImage: '/images/solutions/after3.jpg',
    },
]

export function SolutionsSection() {
    return (
        <section className="py-16 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                    Разгледайте нашите премиум решения
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {solutions.map((solution) => (
                        <BeforeAfterSlider
                            key={solution.id}
                            beforeImage={solution.beforeImage}
                            afterImage={solution.afterImage}
                            label={solution.label}
                            order={solution.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
