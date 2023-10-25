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
        <button className="flex items-center gap-2 font-light">
          <IoMenuOutline size={24} />
          <p>
            Menu
          </p>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-serif">
            Cosmic Cafe
          </h2>
          <h3 className="text-sm">
            Coffee & Wine Bar
          </h3>
        </div>
        <div className="flex items-center gap-6">
          <button role="search">
            <IoSearch size={24} />
          </button>
          <Link href="/" /*LABEL THIS ELEMENT */>
            <FaRegCircleUser size={22} />
          </Link>
          <button /* LABEL THIS ELEMENT */>
            <IoCartOutline size={24} />
          </button>
        </div>
      </div>
      <div className="bg-dark text-light px-10 py-4">
        <nav>
          <ul className="flex justify-around font-light text-sm">
            {navOptions.map((navOption) => (
              <li key={`nav-${navOption.text}`} className="pop-button">
                <Link href={navOption.link}>
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