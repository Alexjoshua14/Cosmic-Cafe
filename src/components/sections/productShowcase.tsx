import { FC } from 'react'
import Image from 'next/image'

interface productShowcaseProps {

}

const ProductShowcase: FC<productShowcaseProps> = ({ }) => {
  return (
    <section className="h-[80vh] w-full bg-primary">
      <div className="h-full w-full  grid grid-cols-3 py-24 px-10">
        <div className="h-full flex flex-col items-center border-r-[1px] border-black border-opacity-30">
          <h3>
            Beans
          </h3>
          <div className="relative w-full h-full">
            <Image src="/images/coffee.png" alt="Coffee" fill sizes="33vw" quality={100} className="object-contain" />
          </div>
        </div>
        <div className="h-full flex flex-col items-center border-r-[1px] border-black border-opacity-30">
          <h3>
            Grapes
          </h3>
          <div className="relative w-full h-full">
            <Image src="/images/wine.png" alt="Wine" fill sizes="33vw" quality={100} className="object-contain" />
          </div>
        </div>
        <div className="h-full flex flex-col items-center">
          <h3>
            Drinkware
          </h3>
          <div className="relative w-full h-full">
            <Image src="/images/mug.png" alt="Mug" fill sizes="33vw" quality={100} className="object-contain scale-150" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase