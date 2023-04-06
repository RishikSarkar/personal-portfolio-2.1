import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import anime_color from '../public/assets/projects/anime-recommender-color.PNG'
import {useTheme} from 'next-themes'

const property = () => {
  return (
    <div className='font-montserrat w-full selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080]'>
      <div className='w-screen h-[40vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={anime_color} alt='/' />
        <div className='absolute top-[65%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-8'>
          <h2>Anim.ai</h2>
          <h3>scikit-learn</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-8 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='mb-8'>Overview</h2>
          <p className='mb-8'>
            <p className='mb-2'>
              &emsp;&emsp;A web-based Anime Recommender System written in <span className='text-[#40e0d0] dark:text-[#008080]'>Python</span> and
              deployed using <span className='text-[#40e0d0] dark:text-[#008080]'>Flask</span>. The model first extracts the
              genre and synopsis attributes from a CSV file containing data on around 12,300 different anime collected
              from over 70,000 users of <span className='text-[#40e0d0] dark:text-[#008080]'>myanimelist.net</span>; then
              evaluates the relevant features of the 80 percentile (i.e., top 2184) titles by parsing them into Python
              objects using an <span className='text-[#40e0d0] dark:text-[#008080]'>abstract syntax tree</span> module. The
              model then appropriately processes the data to generate a metadata soup that I subsequently vectorized
              using sklearn's <span className='text-[#40e0d0] dark:text-[#008080]'>TfidfVectorizer</span> and
               <span className='text-[#40e0d0] dark:text-[#008080]'>CountVectorizer</span>, to find the anime titles most similar to the input
              title by <span className='text-[#40e0d0] dark:text-[#008080]'>genre</span> and <span className='text-[#40e0d0] dark:text-[#008080]'>plot synopsis</span> according
              to a generated <span className='text-[#40e0d0] dark:text-[#008080]'>cosine similarity matrix</span>.
            </p>
            <p>
              &emsp;&emsp;Finally, I deployed the ML pipeline on <span className='text-[#40e0d0] dark:text-[#008080]'>Render</span> as a web
              application using <span className='text-[#40e0d0] dark:text-[#008080]'>Flask</span> and <span className='text-[#40e0d0] dark:text-[#008080]'>Gunicorn</span>.
              The link to the API is provided below and can be used to generate anime title recommendations
              from a supported input. I am also incorporating an autocomplete tool that suggests relevant
              anime titles in the search box using the <span className='text-[#40e0d0] dark:text-[#008080]'>Ajax Autocomplete</span> widget
              for <span className='text-[#40e0d0] dark:text-[#008080]'>JQuery</span>. I added
              the <span className='text-[#40e0d0] dark:text-[#008080]'>GitHub</span> link to the project source code below, so feel free to check it out!
            </p>
          </p>
          <Link href='https://anime-recommender-flask.onrender.com/'>
            <a target='_blank'>
              <button className='px-8 py-2 mt-4 mr-8 dark:bg-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400'>Demo</button>
            </a>
          </Link>
          <Link href='https://github.com/RishikSarkar/anime-recommender-flask'>
            <a target='_blank'>
              <button className='px-8 py-2 mt-4 dark:bg-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400'>Code</button>
            </a>
          </Link>
        </div>
        <div className='mt-12 md:h-[60%] col-span-4 md:col-span-1 text-[#ecf0f3] dark:text-[#012033] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:hover:shadow-gray-400 ease-in duration-200 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Resources</p>
            <div className='grid grid-cols-3 md:grid-cols-1 mt-2'>

              <p className='py-3 flex items-center'><RiRadioButtonFill className='pr-1' />Python</p>

              <p className='py-3 flex items-center'><RiRadioButtonFill className='pr-1' />Flask</p>

              <p className='py-3 flex items-center'><RiRadioButtonFill className='pr-1' />AST</p>

              <p className='py-3 flex items-center'><RiRadioButtonFill className='pr-1' />scikit-learn</p>

            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='mt-4 uppercase underline cursor-pointer text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080]'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default property
