import { FC } from 'react'

interface aboutProps {

}

const About: FC<aboutProps> = ({ }) => {
  return (
    <section className="flex flex-col gap-14 py-24 px-40 items-center justify-center text-center">
      <h2 className="text-5xl font-serif">
        Cosmic Cafe
      </h2>
      <p className="text-lg leading-loose">
        {`
        At Cosmic Cafe, we invite you to experience a cafe that transcends time, 
        welcoming you both day and night. We're rooted in tradition and enriched 
        by local artisans and producers. Our passionate staff and vibrant community 
        create an inclusive atmosphere. Discover the exceptional fusion of flavors 
        at Cosmic Cafe.
        `}
      </p>
    </section>
  )
}

export default About