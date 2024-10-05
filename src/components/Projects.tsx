import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id:0,
        title: "Image and name page",
        desc: "Iam making my first Assigment with name and image (page)",
        img: "/ss page.png",
        tags: ["Next.JS", "Node","CSS","HTML"],
    },
]

function Projects() {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />))}
      </div>
    </div>
  )
}

export default Projects
