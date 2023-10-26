import Link from 'next/link'
import { FC } from 'react'
import { IoSearch, IoCartOutline, IoMenuOutline } from 'react-icons/io5'
import { FaRegCircleUser } from 'react-icons/fa6'

interface navBarProps {

}

const navOptions = [
  {
    text: "Coffee",
    link: "/"
  },
  {
    text: "Wine",
    link: "/"
  },
  {
    text: "Subscriptions",
    link: "/"
  },
  {
    text: "Locations",
    link: "/"
  },
  {
    text: "Learn",
    link: "/"
  },
  {
    text: "Story",
    link: "/"
  },
]

const NavBar: FC<navBarProps> = ({ }) => {
  return (
    <div className="z-40 sticky top-0 w-full flex flex-col shadow-lg backdrop-blur-xl text-center">
      <div className="flex items-center justify-between px-10 py-2">
        <div className="w-1/3 flex items-center">
          <button className=" flex items-center gap-2 font-light pop-dark button px-2 py-1">
            <IoMenuOutline size={24} />
            <p>
              Menu
            </p>
          </button>
        </div>
        <div className="w-1/3">
          <Link href="/" className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-serif">
              Cosmic Cafe
            </h2>
            <h3 className="text-sm">
              Coffee & Wine Bar
            </h3>
          </Link>
        </div>
        <div className="w-1/3 flex items-center justify-end gap-2">
          <button role="search" className="pop-dark button px-2 py-1">
            <IoSearch size={24} />
          </button>
          <Link href="/" /*LABEL THIS ELEMENT */ className="pop-dark button px-2 py-1">
            <FaRegCircleUser size={22} />
          </Link>
          <button /* LABEL THIS ELEMENT */ className="pop-dark button px-2 py-1">
            <IoCartOutline size={24} />
          </button>
        </div>
      </div>
      <div className="bg-dark text-light px-10 py-4">
        <nav>
          <ul className="flex justify-around font-light text-sm">
            {navOptions.map((navOption) => (
              <li key={`nav-${navOption.text}`} className="button transition-all">
                <Link href={navOption.link} className="pop-light px-4 py-2 transition-colors">
                  {navOption.text}
                </Link>
              </li>
            ))}

          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar