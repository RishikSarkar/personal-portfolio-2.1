import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import mood_color from '../../public/assets/projects/mood-tunes-color.PNG'
import {useTheme} from 'next-themes'

const property = () => {
  return (
    <div className='font-montserrat w-full selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080]'>
      <div className='w-screen h-[40vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={mood_color} alt='/' />
        <div className='absolute top-[65%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-8'>
          <h2>Mood Tunes</h2>
          <h3>Keras</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-8 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='mb-8'>Overview</h2>
          <p className='mb-8'>
            <p className='mb-2'>
              &emsp;&emsp;Mood Tunes is a facial emotion recognition and music recommendation system I developed using <span className='text-[#40e0d0] dark:text-[#008080]'>Keras</span> and
              various computer vision techniques. The system uses a deep learning model trained on a large dataset of facial expression images labeled with emotions such
              as happy, sad, angry, and surprised and a music dataset containing information on different genres, artists, and songs.
            </p>
            <p className='mb-2'>
              &emsp;&emsp;To improve the model's accuracy, I utilized <span className='text-[#40e0d0] dark:text-[#008080]'>OpenCV</span> and a <span className='text-[#40e0d0] dark:text-[#008080]'>Haar Cascade classifier</span> to
              preprocess input image data. Additionally, I conducted data analysis using <span className='text-[#40e0d0] dark:text-[#008080]'>Pandas</span> and created visualizations using <span className='text-[#40e0d0] dark:text-[#008080]'>Matplotlib</span>,
              which helped me identify patterns and insights that could further refine the model.
            </p>
            <p>
              &emsp;&emsp;The final product, Mood Tunes, allows users to upload an image of their facial expression and receive a recommended music playlist based on the predicted mood. The project demonstrates the potential of 
              deep learning and computer vision techniques to classify human emotions and personalize user recommendations. I added the <span className='text-[#40e0d0] dark:text-[#008080]'>GitHub</span> link to the project source
              code below, so feel free to check it out!
            </p>
          </p>
          <Link href='https://github.com/RishikSarkar/mood-tunes'>
            <a target='_blank'>
              <button className='px-8 py-2 mt-4 dark:bg-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400'>Code</button>
            </a>
          </Link>
        </div>
        <div className='mt-12 md:h-[60%] col-span-4 md:col-span-1 text-[#ecf0f3] dark:text-[#012033] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:hover:shadow-gray-400 ease-in duration-200 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Resources</p>
            <div className='grid grid-cols-3 md:grid-cols-1 mt-2 items-center'>

              <p className='py-3 flex items-center'>Python</p>

              <p className='py-3 flex items-center'>Keras</p>

              <p className='py-3 flex items-center'>OpenCV</p>

              <p className='py-3 flex items-center'>Pandas</p>

            </div>
          </div>
        </div>
        <Link href='/MoreProjects'>
          <p className='mt-4 uppercase underline cursor-pointer text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080]'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default property
