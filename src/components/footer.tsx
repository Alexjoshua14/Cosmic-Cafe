import { FC } from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { Separator } from './ui/separator'
import Subscribe from './subscribe'

interface footerProps {

}

const Footer: FC<footerProps> = ({ }) => {
  return (
    <div className="h-fit w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-14 pt-4 pb-24 gap-8 bg-dark text-light">
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
          <Subscribe />
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