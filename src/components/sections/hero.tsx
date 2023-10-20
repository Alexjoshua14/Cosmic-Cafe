import { FC } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdOutlineCoffee } from 'react-icons/md'
import DrinkShowcase from '../drinkShowcase'

interface heroProps {

}

/**
 * NOTE: Height is probably not as good as it could be.
 * 
 * 
 * @param param0 
 * @returns 
 */
const Hero: FC<heroProps> = ({ }) => {
  return (
    <section className="h-[90vh] w-full grid grid-cols-[1fr_2fr] grid-rows-[3fr_1fr]">
      <div className="w-full h-full flex flex-col items-center justify-center shadow-lg">
        <p className="text-7xl text-center">
          Time <br /> for <br /> a <br /> drink
        </p>
        <p className="font-light">
          Lets start your order
        </p>
      </div>
      <div className="z-[-2] absolute right-0 w-2/3 h-[150%]">
        <div className="sticky top-0 right-0 w-full h-1/2 flex items-center justify-around">
          <IoIosArrowBack size={60} />
          <div className="w-full h-full grid place-items-center relative">
            <DrinkShowcase />
          </div>
          <IoIosArrowForward size={60} />
        </div>
      </div>
      <div className='row-start-2 col-span-2 bg-accent relative'>
        <div className="absolute right-0 top-[0] shadow-2xl w-2/3 h-[4px]" hidden /> {/** Add shadow above using this, make sure to unhide */}

      </div>
    </section>
  )
}

export default Hero