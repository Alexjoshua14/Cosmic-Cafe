'use client'

import { FC, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { cn } from '@/lib/utils'
import useAutoIndexManager from '@/lib/hooks/useAutoIndexManager'
import { motion, useAnimationFrame } from 'framer-motion'
import { Progress } from '@/components/ui/progress'


interface drinkShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {

}

const drinks = [
  {
    id: "clnz5z6d0000008jx1tbpgzhz",
    name: "Ristretto",
    src: "/svgs/Ristretto.svg",
    description: "Description here",
  },
  {
    id: "clnz5zn4n000108jx0v6abnwx",
    name: "Espresso",
    src: "/svgs/Espresso.svg",
    description: "Description here",
  },
  {
    id: "clnz5zr3q000208jxee3dhggt",
    name: "Macchiato",
    src: "/svgs/Macchiato.svg",
    description: "Description here",
  },
]

const DRINK_DURATION = 7_000 // ms

const DrinkShowcase: FC<drinkShowcaseProps> = ({ className }) => {
  // Should perhaps use a reducer?
  const { selectedIndex, next, previous, pause, resume, status, progress } = useAutoIndexManager(DRINK_DURATION, drinks.length)
  const [isIntersecting, setIsIntersecting] = useState(true)
  const drinkCarouselRef = useRef<HTMLDivElement | null>(null)

  const intersectionObserver = new IntersectionObserver((entries) => {

    const isCurrentlyIntersecting = entries[0].isIntersecting

    if (isIntersecting != isCurrentlyIntersecting) {
      setIsIntersecting(isCurrentlyIntersecting)
      if (isCurrentlyIntersecting) {
        if (status == "paused") {
          resume()
        }
      } else {
        if (status == "playing") {
          pause()
        }
      }
    }
  })

  useEffect(() => {
    if (drinkCarouselRef.current)
      intersectionObserver.observe(drinkCarouselRef.current)

    const drinkCarouselRefCopy = drinkCarouselRef.current

    return () => {
      if (drinkCarouselRefCopy)
        intersectionObserver.observe(drinkCarouselRefCopy)
    }
  })

  return (
    <div className={cn(`h-full flex items-center justify-between px-4`, className)}>
      <button onClick={previous} className="pop-dark button">
        <IoIosArrowBack size={60} />
      </button>

      <div ref={drinkCarouselRef} className="h-2/3 w-full flex flex-col items-center justify-between overflow-hidden"
        onMouseEnter={pause} onTouchStart={pause} onMouseLeave={resume} onTouchEnd={resume}
      >
        <div className="flex-1">
          {drinks.map((drink) => (
            <div key={drink.id}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[240px] 
                          ${drinks[selectedIndex].name == drink.name ? "grid" : "hidden"} 
                          place-content-center`}
            >
              <Image src={drink.src} alt={drink.name} width={200} height={200} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-[50px] h-[20px]">
          <Progress value={+progress.toFixed(4) * 102} />
        </div>
        <p className="font-light text-4xl">
          {`${drinks[selectedIndex].name}!`}
        </p>
      </div>
      <button onClick={next} className="pop-dark button">
        <IoIosArrowForward size={60} />
      </button>
    </div>
  )
}

export default DrinkShowcase