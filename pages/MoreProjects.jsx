import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectItem from '../components/ProjectItem'
import placeholder from '../public/assets/projects/placeholder.png'
import guitar_black from '../public/assets/projects/guitar_black_dark.PNG'
import anime_black from '../public/assets/projects/anime-recommender-bw.PNG'
import mood_black from '../public/assets/projects/mood-tunes-bw.PNG'
import unidb_black from '../public/assets/projects/unidb-bw.PNG'
import {FiGithub} from 'react-icons/fi'

const MoreProjects = () => {
  return (
    <div id='moreprojects' className='font-montserrat selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] w-full pt-16'>
      <div className='max-w-[1240px] mx-auto px-8 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#40e0d0] dark:text-[#008080]'>All Projects</p>
        <h2 className='py-6 text-[#ecf0f3] dark:text-[#012033]'>Welcome To My Workshop</h2>
        <div className='grid sm:grid-cols-2 gap-8 pb-4'>

          <ProjectItem
            title='UniDB'
            backgroundImg={unidb_black}
            technology='SQL | Java'
            projectUrl='/UniDB'
          />

          <ProjectItem
            title='Mood Tunes'
            backgroundImg={mood_black}
            technology='Keras'
            projectUrl='/MoodTunes'
          />

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

        </div>

        <div className='flex justify-center m-4'>
          <Link href='https://github.com/RishikSarkar'>
            <a target='_blank'>
              <div className='text-[#ecf0f3] dark:bg-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] hover:shadow-md border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-[#40e0d0] dark:shadow-gray-400 hover:text-[#BBEBE9] rounded-full p-6 curson-pointer hover:scale-110 ease-in duration-200 cursor-pointer'>
                <FiGithub />
              </div>
            </a>
          </Link>
        </div>

        <div className='flex justify-center'>
          <Link href='/#projects'>
            <button className='hover:scale-[105%] ease-in duration-200 px-8 py-2 mt-4 dark:bg-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400'>Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MoreProjects
