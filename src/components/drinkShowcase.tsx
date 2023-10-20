import { FC } from 'react'
import Image from 'next/image'
import { MdOutlineCoffee } from 'react-icons/md'


interface drinkShowcaseProps {

}

const DrinkShowcase: FC<drinkShowcaseProps> = ({ }) => {
  return (
    <div className="h-2/3 w-full flex flex-col items-center justify-end gap-x-40 overflow-auto relative">
      <div className="h-[240px] w-full flex flex-col items-center justify-between absolute">
        <Image src="/svgs/Ristretto.svg" alt="Espresso" width={200} height={200} />
      </div>
      <div className="h-[240px] w-full flex flex-col items-center justify-between absolute">
        <Image src="/svgs/Espresso.svg" alt="Espresso" width={200} height={200} />
      </div>
      <div className="h-[240px] w-full flex flex-col items-center justify-between absolute">
        <Image src="/svgs/Macchiato.svg" alt="Espresso" width={200} height={200} />
      </div>
      <p className="font-light text-4xl">
        Ristretto!
      </p>
    </div>
  )
}

export default DrinkShowcase