import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import guitar_black from '../public/assets/projects/guitar_black.jpg'
import {useTheme} from 'next-themes'

const property = () => {
  return (
    <div className='w-full selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080]'>
      <div className='w-screen h-[40vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={guitar_black} alt='/' />
        <div className='absolute top-[65%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-8'>
          <h2>ReChord</h2>
          <h3>TensorFlow</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-8 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='mb-8'>Overview</h2>
          <p className='mb-8'>
            <p className='mb-2'>&emsp;&emsp;A TensorFlow Object Detection model that I trained to detect and classify guitar chords based on finger shapes in real-time. The model utilizes TensorFlow's pre-trained
            <span className='text-[#40e0d0] dark:text-[#008080]'> SSD MobileNet V2 FPNLite 640x640 </span> object detection model that was trained on the COCO 2017 dataset. Although the current version can only
            detect fundamental <span className='text-[#40e0d0] dark:text-[#008080]'> major chords </span> at the moment, it shall be trained on more data in the future in order to increase detection accuracy, and to potentially include minor, dominant 7th, and diminished
            7th chords in the future. Furthermore, the model can be used to detect chords played by guitarists in muted videos to potentially <span className='text-[#40e0d0] dark:text-[#008080]'> generate chord sheet music in real-time </span> in the future.</p>
            <p>&emsp;&emsp;As an avid acoustic guitar enthusiast, this was one of the most exciting projects I worked on. Since this was one of my first TensorFlow projects involving real-time object detection,
            the entire process involved a lot of effort on my part: although the overall learning experience I gained from it made the endeavor worth it in the end. All the image data that was used in training the
            model was obtained using my <span className='text-[#40e0d0] dark:text-[#008080]'> laptop's webcam </span> and my phone camera using <span className='text-[#40e0d0] dark:text-[#008080]'> Camo</span>. On that note, the model is currently optimized to my personal physical characteristics and to my guitar's features, and
            thus, I cannot guarantee its scalability to a more diverse audience. Lastly, the model currently requires access to a webcam and an acoustic guitar to be able to effectively predict chord shapes.</p>
            <p>&emsp;&emsp;I have provided the links to an <span className='text-[#40e0d0] dark:text-[#008080]'> integrated web demo application </span> and to my <span className='text-[#40e0d0] dark:text-[#008080]'> GitHub </span> source code below,
            so please feel free to check them out and try out the demo if you have a guitar next to you!</p>
          </p>
          <Link href='/gcddemo'>
            <button className='px-8 py-2 mt-4 mr-8 dark:bg-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400'>Demo</button>
          </Link>
          <Link href='https://github.com/RishikSarkar/GuitarChordsTFOD'>
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

              <p className='py-3 flex items-center'><RiRadioButtonFill className='pr-1' />Jupyter Notebook</p>

              <p className='py-3 flex items-center'><RiRadioButtonFill className='pr-1' />Javascript</p>

              <p className='py-3 flex items-center'><RiRadioButtonFill className='pr-1' />TensorFlow</p>

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
