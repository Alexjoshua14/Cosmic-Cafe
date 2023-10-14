import { FC } from 'react'

interface socialFeedProps {

}

const SocialFeed: FC<socialFeedProps> = ({ }) => {
  return (
    <section className="w-full px-24 py-24 flex flex-col gap-14">
      <h2 className="text-3xl">
        #CosmicCafe
      </h2>
      <div className="w-full overflow-x-auto py-4">
        <div className="w-fit flex gap-4">
          <div className="h-[300px] w-[300px] bg-gradient-to-tr from-pink-800 to-pink-600 backdrop-blur bg-opacity-50" />
          <div className="h-[300px] w-[300px] bg-gradient-to-tr from-teal-800 to-teal-600 backdrop-blur bg-opacity-50" />
          <div className="h-[300px] w-[300px] bg-gradient-to-tr from-yellow-800 to-yellow-600 backdrop-blur bg-opacity-50" />
          <div className="h-[300px] w-[300px] bg-gradient-to-tr from-fuchsia-800 to-fuchsia-600 backdrop-blur bg-opacity-50" />
          <div className="h-[300px] w-[300px] bg-gradient-to-tr from-orange-800 to-orange-600 backdrop-blur bg-opacity-50" />
        </div>
      </div>
    </section>
  )
}

export default SocialFeed