import { FC } from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { Separator } from './ui/separator'

interface footerProps {

}

const Footer: FC<footerProps> = ({ }) => {
  return (
    <div className="h-96 w-full flex flex-col md:flex-row items-center justify-between px-14 pt-4 pb-24 gap-8">
      <div className="flex flex-col gap-2 max-w-[350px] text-center">
        <p className="text-2xl">
          {`Refer a friend, Get $7`}
        </p>
        <Separator className="bg-dark bg-opacity-40" />
        <div>
          <p className="text-lg">
            {`Subscribe and stay in the know`}
          </p>
          <p className="text-sm leading-snug">
            {`
            Join our email newsletter to unlock exclusive offers, 
            cafe updates, upcoming events, and early access to our 
            most exciting menu additions. Become a part of the 
            Cosmic Cafe community and be the first to savor the 
            celestial flavors.
            `}
          </p>
          <div className="w-full flex justify-between my-4 border-b-[1px] text-left border-black text-tertiary text-opacity-50 font-extralight">
            <p>
              enter your email address
            </p>
            <IoArrowForwardOutline size={22} />
          </div>
        </div>
      </div>
      <div className="flex justify-around gap-8">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-lg">
            Contact
          </p>
          <ul className="flex flex-col gap-2 font-light">
            <li>
              Words here
            </li>
            <li>
              Words here
            </li>
            <li>
              Words here
            </li>
            <li>
              Words here
            </li>
            <li>
              Words here
            </li>
            <li>
              Words here
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-lg">
            Company
          </p>
          <ul className="flex flex-col gap-2 font-light">
            <li>
              Words here
            </li>
            <li>
              Words here
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-lg">
            Learn
          </p>
          <ul className="flex flex-col gap-2 font-light">
            <li>
              Words here
            </li>
            <li>
              Words here
            </li>
            <li>
              Words here
            </li>
            <li>
              Words here
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer