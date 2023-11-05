import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'
import tchai_color from '../../public/assets/projects/placeholder.png'
import { useTheme } from 'next-themes'

const property = () => {
  return (
    <div className='font-montserrat w-full selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080]'>
      <div className='w-screen h-[40vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={tchai_color} alt='/' />
        <div className='absolute top-[65%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-8'>
          <h2>Tch.ai</h2>
          <h3>Keras | Flask</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-8 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='mb-8'>Overview</h2>
          <p className='mb-8'>
            <p className='mb-2'>
              &emsp;&emsp;Tch.ai (named after Russian composer Tchaikovsky) is an innovative full-stack web application that recommends songs based on mood predictions derived from facial
              expressions or textual data. At its core, it uses a <span className='text-[#40e0d0] dark:text-[#008080]'>Keras</span> image classifier trained on the
              <span className='text-[#40e0d0] dark:text-[#008080]'> FER-2013</span> dataset, achieving a training accuracy of about 96% and a validation accuracy of over 70%.
              To optimize image input, I used <span className='text-[#40e0d0] dark:text-[#008080]'>OpenCV </span>
              and a <span className='text-[#40e0d0] dark:text-[#008080]'>Haar Cascade</span> classifier to automatically preprocess the data.
            </p>
            <p className='mb-2'>
              &emsp;&emsp;The user-friendly frontend, built with <span className='text-[#40e0d0] dark:text-[#008080]'>Next.js</span> and
              <span className='text-[#40e0d0] dark:text-[#008080]'> Tailwind CSS</span>, offers a versatile experience by allowing users three genre selection
              methods: image, text, or manual choice. This flexibility not only enhances user engagement but also ensures seamless data uploads and tailored
              song recommendations.
            </p>
            <p>
              &emsp;&emsp;On the backend, a <span className='text-[#40e0d0] dark:text-[#008080]'>Flask REST API</span> processes the image data and generates
              personalized playlists from an extensive database of over 114,000 songs, considering features like genre, mode, and valence. Furthermore,
              Tch.ai integrates a remote <span className='text-[#40e0d0] dark:text-[#008080]'>MySQL</span> database, enabling users to create accounts
              and manage their favorite songs efficiently. I added the <span className='text-[#40e0d0] dark:text-[#008080]'>GitHub</span> link to the project source code
              below, so feel free to check it out!
            </p>
          </p>
          <Link href='https://github.com/RishikSarkar/tch.ai'>
            <a target='_blank'>
              <button className='px-8 py-2 mt-4 dark:bg-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400'>Code</button>
            </a>
          </Link>
        </div>
        <div className='mt-12 md:h-[60%] col-span-4 md:col-span-1 text-[#ecf0f3] dark:text-[#012033] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:hover:shadow-gray-400 ease-in duration-200 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Resources</p>
            <div className='grid grid-cols-3 md:grid-cols-1 mt-2 items-center'>

              <p className='py-3 flex items-center'>Keras</p>

              <p className='py-3 flex items-center'>Flask</p>

              <p className='py-3 flex items-center'>Next.js</p>

              <p className='py-3 flex items-center'>MySQL</p>

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