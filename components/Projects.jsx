import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import placeholder from '../public/assets/projects/placeholder.png'
import guitar_black from '../public/assets/projects/guitar_black_dark.PNG'
import anime_black from '../public/assets/projects/anime-recommender-bw.PNG'

const Projects = () => {
  return (
    <div id='projects' className='font-montserrat selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] w-full'>
      <div className='max-w-[1240px] mx-auto px-8 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#40e0d0] dark:text-[#008080]'>Projects</p>
        <h2 className='py-6 text-[#ecf0f3] dark:text-[#012033]'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem
            title='ReChord'
            backgroundImg={guitar_black}
            technology='TensorFlow'
            projectUrl='/GuitarChordDetector'
          />

          <ProjectItem
            title='Anim.ai'
            backgroundImg={anime_black}
            technology='scikit-learn'
            projectUrl='/AnimeRecommender'
          />

          <ProjectItem
            title='Placeholder3'
            backgroundImg={placeholder}
            technology='Java'
            projectUrl='/placeholder'
          />

          <ProjectItem
            title='Placeholder4'
            backgroundImg={placeholder}
            technology='PyTorch'
            projectUrl='/placeholder'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
