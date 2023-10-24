import { FC } from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { Input } from './ui/input'

interface subscribeProps {

}

const Subscribe: FC<subscribeProps> = ({ }) => {
  return (
    <div className="w-full flex justify-between items-center my-4 border-b-[1px] px-4 
                    text-left border-black text-tertiary text-opacity-50 font-extralight 
                    transition-colors focus-within:ring-1 ring-stone-950 rounded-md">
      <Input type="email" placeholder='enter your email address' className="border-0 focus-visible:ring-0" />
      <IoArrowForwardOutline size={22} />
    </div>
  )
}

export default Subscribe