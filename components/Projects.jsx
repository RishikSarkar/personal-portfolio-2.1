import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import placeholder from '../public/assets/projects/placeholder.png'
import guitar_black from '../public/assets/projects/guitar_black_dark.PNG'
import unidb_black from '../public/assets/projects/unidb-bw.PNG'

const Projects = () => {
  return (
    <div id='projects' className='font-montserrat selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] w-full pt-16'>
      <div className='max-w-[1240px] mx-auto px-8 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#40e0d0] dark:text-[#008080]'>Projects</p>
        <h2 className='py-6 text-[#ecf0f3] dark:text-[#012033]'>What I've Built</h2>
        <div className='grid sm:grid-cols-2 gap-8 pb-4'>

          <ProjectItem
            title='UniDB'
            backgroundImg={unidb_black}
            technology='SQL | Java'
            projectUrl='/projects/UniDB'
          />

          <ProjectItem
            title='ReChord'
            backgroundImg={guitar_black}
            technology='TensorFlow'
            projectUrl='/projects/GuitarChordDetector'
          />

        </div>
        <div className='flex justify-center'>
          <Link href='/MoreProjects'>
            <button className='hover:scale-[105%] ease-in duration-200 px-8 py-2 mt-4 dark:bg-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400'>More Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
