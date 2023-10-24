import { FC } from 'react'
import Image from 'next/image'
import { Separator } from '../ui/separator'

interface productShowcaseProps {

}

const ProductShowcase: FC<productShowcaseProps> = ({ }) => {
  return (
    <section className="z-10 h-fit md:h-[80vh] w-full bg-primary">
      <div className="h-full w-full flex flex-col gap-20 md:gap-8 md:flex-row items-center justify-center py-24 px-10">
        <div className="h-96 w-full md:w-1/4 flex flex-col items-center justify-center px-4 gap-4">
          <h3 className="text-4xl">
            Beans
          </h3>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=60&w=1600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZSUyMGJlYW5zfGVufDB8fDB8fHww" alt="Coffee"
              fill sizes="33vw" quality={100}
              className="object-contain"
            />
          </div>
        </div>
        <Separator orientation='vertical' className='hidden md:flex bg-dark' />
        <div className="h-96 w-full md:w-1/4 flex flex-col items-center justify-center px-4 gap-4">
          <h3 className="text-4xl">
            Grapes
          </h3>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image src="https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&q=60&w=1600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2luZSUyMGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Wine" fill sizes="33vw" quality={100} className="object-contain" />
          </div>
        </div>
        <Separator orientation='vertical' className='hidden md:flex bg-dark' />
        <div className="h-96 w-full md:w-1/4 flex flex-col items-center justify-center px-4 gap-4">
          <h3 className="text-4xl">
            Drinkware
          </h3>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image src="https://images.unsplash.com/photo-1549723392-cf65fcbc3972?auto=format&fit=crop&q=60&w=1600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNwcmVzc28lMjBzaG90JTIwbXVnfGVufDB8fDB8fHww"
              alt="Mug" fill sizes="33vw" quality={100} className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase