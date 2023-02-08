import React from 'react'
import Image from 'next/image'
import AboutImg from '../public/assets/profile-circle-nobg.png'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='font-montserrat selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] w-full md:h-screen p-10 flex items-center py-16 pt-32'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 md:px-8'>
        <div className='col-span-2 md:pr-16'>
          <p className='uppercase text-xl tracking-widest text-[#40e0d0] dark:text-[#008080]'>About</p>
          <h2 className='py-6 text-[#ecf0f3] dark:text-[#012033]'>Who I Am</h2>
          <div className='mb-8 border-2 border-[#40e0d0] dark:border-gray-600 p-10 rounded-xl hover:shadow-xl hover:shadow-[#40e0d0] dark:shadow-gray-400 hover:scale-[102%] ease-in duration-200'>
            <p className='py-2 text-[#ecf0f3] dark:text-[#012033]'>Just an average AI enthusiast on his quest for knowledge.</p>
            <p className='py-4 text-[#ecf0f3] dark:text-[#012033]'>
              I am currently an undergraduate student at Rutgers University-New Brunswick pursuing a degree in <span className='text-[#40e0d0] dark:text-[#008080]'> Computer Science </span>
              and <span className='text-[#40e0d0] dark:text-[#008080]'> Cognitive Science</span>, and am hoping to conduct research involving the potential usage of Deep Learning Models in mental
              health diagnosis and treatment in the future. When I am not coding a strategy game or building a website, you can catch me either playing the guitar or the violin, or
              sketching videogame characters! I also take pride in being a polyglot, because, in addition to English, I am quite proficient in Bengali, Hindi, and Japanese.
            </p>
            <Link href='https://drive.google.com/file/d/1fatP8Cfd3ulfCYG0axTrfKW9pZ0Z2BjY/view?usp=sharing'>
              <a target='_blank'>
                <p className='py-2 text-[#40e0d0] dark:text-[#008080] cursor-pointer'>Check out my resume here!</p>
              </a>
            </Link>
          </div>
        </div>

        <span className='hidden md:block relative mt-24 w-[400px] h-[400px] items-center justify-center'>
          <div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='animate-spin-slow h-full fill-current'>
              <path className='fill-[#40e0d0] dark:fill-[#012033]' d="M46,-79.5C60,-71.6,72,-60,79.6,-46.2C87.2,-32.3,90.4,-16.2,89.2,-0.7C87.9,14.7,82.1,29.4,74.6,43.5C67.2,57.6,58,71.1,45.3,78.8C32.6,86.4,16.3,88.2,0.3,87.6C-15.6,87,-31.2,84,-44.3,76.6C-57.4,69.2,-68.1,57.3,-76.7,43.8C-85.3,30.3,-91.9,15.1,-91.6,0.2C-91.4,-14.8,-84.2,-29.7,-75.5,-43C-66.8,-56.4,-56.6,-68.3,-43.7,-76.9C-30.9,-85.4,-15.4,-90.7,0.3,-91.2C16,-91.7,32,-87.4,46,-79.5Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className='md:absolute inset-0 flex md:items-center md:mx-12 justify-center'>
            <div className='bg-[#BBEBE9] dark:bg-[#008080] w-[275px] h-[275px] md:w-[300px] md:h-[300px] rounded-full justify-center -mt-[89%] md:mt-0 z-10'>
              <Image src={AboutImg} height='500' width='500' alt='/' />
            </div>
          </div>
        </span>

      </div>
    </div>
  )
}

export default About
