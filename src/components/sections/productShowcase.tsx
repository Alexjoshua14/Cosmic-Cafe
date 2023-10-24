import { FC } from 'react'
import Image from 'next/image'
import { Separator } from '../ui/separator'

interface productShowcaseProps {

}

const showcaseContent = [
  {
    title: "Beans",
    image: {
      src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=60&w=1600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZSUyMGJlYW5zfGVufDB8fDB8fHww",
      alt: "Coffee"
    }
  },
  {
    title: "Grapes",
    image: {
      src: "https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&q=60&w=1600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2luZSUyMGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Wine"
    }
  },
  {
    title: "Drinkware",
    image: {
      src: "https://images.unsplash.com/photo-1549723392-cf65fcbc3972?auto=format&fit=crop&q=60&w=1600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNwcmVzc28lMjBzaG90JTIwbXVnfGVufDB8fDB8fHww",
      alt: "Array of espresso mugs"
    }
  }
]

const ProductShowcase: FC<productShowcaseProps> = ({ }) => {
  return (
    <section className="z-10 h-fit md:h-[80vh] w-full bg-primary">
      <div className="h-full w-full flex flex-col gap-14 md:gap-8 md:flex-row items-center justify-center py-24 px-10">
        {showcaseContent.map((content, index) => (
          <>
            <div key={`showcase-${content.title}`} className="h-[75vh] md:h-96 w-full  md:w-1/4 flex flex-col items-center justify-center py-4 gap-4 hover:ring-1 ring-stone-950 rounded-md border-b-dark hover:border-b-[1px] transition-all">
              <h3 className="text-4xl">
                {content.title}
              </h3>
              <div className="relative w-full h-full flex items-center justify-center ">
                <Image
                  src={content.image.src} alt={content.image.alt}
                  fill sizes="33vw" quality={100}
                  className="object-contain"
                />
              </div>
            </div>
            {index < showcaseContent.length - 1 && <Separator orientation='vertical' className="bg-dark" />}
          </>
        ))}


      </div>
    </section>
  )
}

export default ProductShowcase