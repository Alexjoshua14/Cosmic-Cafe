import { FC } from 'react'
import Image from 'next/image'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { cn } from '@/lib/utils'

interface recipeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  recipe: {
    title: string,
    subtitle: string,
    image: {
      link: string,
      alt: string
    },
    ingredients: string[],
  }
}

interface recipeIngredientProps {
  ingredient: string
}

const RecipeIngredient: FC<recipeIngredientProps> = ({ ingredient }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-[10px] h-[10px] aspect-square border-[1px] border-black" />
      <p>
        {ingredient}
      </p>
    </div>
  )
}


const RecipeCard: FC<recipeCardProps> = ({ recipe, className }) => {
  return (
    <div className={cn("p-4 flex flex-col gap-4 border-b-[1px] border-dark rounded-md hover:ring-1 ring-stone-950 hover:-translate-y-4 transition-all", className)}>
      <div className="w-full flex flex-col items-center">
        <p className="text-xl">
          {recipe.title}
        </p>
        <p>
          {recipe.subtitle}
        </p>
      </div>
      <div className="flex-1 relative flex items-end w-full">
        <Image src="/images/coffee-2.png" alt="White mocha" fill className="object-contain" />
      </div>

      <div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredient key={`${recipe.title}-${ingredient}`} ingredient={ingredient} />
        ))}
      </div>
      <div className="self-end flex items-center gap-1">
        <p>
          Order one now
        </p>
        <IoArrowForwardOutline />
      </div>
    </div>
  )
}

export default RecipeCard