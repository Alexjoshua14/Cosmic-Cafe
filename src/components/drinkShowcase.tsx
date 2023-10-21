'use client'

import { FC, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MdOutlineCoffee } from 'react-icons/md'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { cn } from '@/lib/utils'
import next from 'next'
import useAutoIndexManager from '@/lib/hooks/useAutoIndexManager'


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

const DRINK_DURATION = 5_000 // ms

const DrinkShowcase: FC<drinkShowcaseProps> = ({ className }) => {
  // Should perhaps use a reducer?
  const [selectedDrink, next, previous, pause, resume] = useAutoIndexManager(DRINK_DURATION, drinks.length)

  return (
    <div className={cn(`h-full flex items-center justify-between`, className)}>
      <button onClick={previous}>
        <IoIosArrowBack size={60} />
      </button>

      <div className="h-2/3 w-full flex flex-col items-center justify-between overflow-hidden"
        onMouseEnter={pause} onTouchStart={pause} onMouseLeave={resume} onTouchEnd={resume}
      >
        <div className="flex-1">
          {drinks.map((drink) => (
            <div key={drink.id}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[240px] 
                          ${drinks[selectedDrink].name == drink.name ? "grid" : "hidden"} 
                          place-content-center`}
            >
              <Image src={drink.src} alt={drink.name} width={200} height={200} />
            </div>
          ))}
        </div>
        <p className="font-light text-4xl">
          {`${drinks[selectedDrink].name}!`}
        </p>
      </div>
      <button onClick={next}>
        <IoIosArrowForward size={60} />
      </button>
    </div>
  )
}

export default DrinkShowcase