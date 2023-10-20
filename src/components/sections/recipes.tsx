import { FC } from 'react'
import Image from 'next/image'
import { IoArrowForwardOutline } from 'react-icons/io5'
import RecipeCard from '../recipe/recipeCard'

interface recipesProps {

}

// title: string,
//   subtitle: string,
//     image: {
//   link: string,
//     alt: string
// },
// ingredients: string[],

const recipes = [
  {
    title: "White Mocha",
    subtitle: "Chocolatey Espresso",
    image: {
      link: "/images/coffee-2.png",
      alt: "White Mocha"
    },
    ingredients: [
      "2oz Espresso",
      "1.5oz White Chocolate Syrup",
      "9oz Steamed Milik"
    ]
  }
]

const Recipes: FC<recipesProps> = ({ }) => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center overflow-x-clip">
      <h2 className="text-4xl font-serif pb-24">
        Recipes
      </h2>
      <div className="relative w-full h-[500px] max-w-[1300px] overflow-y-clip">
        <div className="z-[0] absolute left-[15%] -bottom-52 -translate-x-1/2  h-[450px] w-[300px] -rotate-45 bg-stone-300">
        </div>
        <div className="z-[2] absolute left-[30%] -bottom-20 -translate-x-1/2 h-[450px] w-[300px] -rotate-12 bg-stone-200">
        </div>
        <RecipeCard
          recipe={recipes[0]}
          className="z-[3] absolute left-1/2 bottom-10 -translate-x-1/2 h-[450px] w-[300px] bg-stone-100"

        />
        <div className="z-[2] absolute  right-[30%] translate-x-1/2 -bottom-20 h-[450px] w-[300px] rotate-12 bg-stone-200">
        </div>
        <div className="z-[0] absolute right-[15%] translate-x-1/2 -bottom-52 h-[450px] w-[300px] rotate-45 bg-stone-300">
        </div>
      </div>
    </section >
  )
}

export default Recipes