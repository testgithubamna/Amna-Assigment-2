import React from 'react'

const Skills = () => {
  return (
    <div id='skills'className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
            <h2 className='text-4xl md:text-5xl'data-aos="zoom-in-up">Technologies I work with</h2>
            <p className='text-gray-500 pt-2'>
            Today’s technologies have transformed how we communicate, work, and live. Smartphones and high-speed internet enable instant connectivity and access to information from anywhere in the world. Cloud computing allows for seamless data storage and collaboration across teams, while artificial intelligence enhances everything from personal assistants to automated customer service. Social media platforms connect people globally, shaping how we share ideas and experiences. As emerging technologies like virtual reality and the Internet of Things continue to evolve, they promise to further revolutionize our daily lives and interactions.
            </p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
