import React from 'react'
import Image from 'next/image'
import AboutImg from '../public/assets/profile-circle-nobg.png'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(window.innerWidth <= 640);

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='about' className='font-montserrat selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] w-full md:h-screen p-10 flex items-center py-16 pt-32'>
      <div className='max-w-[1240px] m-auto md:flex md:items-center md:justify-between md:px-8'>
        <div className='md:w-2/3 md:pr-16'>
          <p className='uppercase text-xl tracking-widest text-[#40e0d0] dark:text-[#008080]'>About</p>
          <h2 className='py-6 text-[#ecf0f3] dark:text-[#012033]'>Who I Am</h2>
          <div className={`mb-8 border-2 border-[#40e0d0] dark:border-gray-600 p-10 rounded-xl hover:shadow-xl hover:shadow-[#40e0d0] dark:shadow-gray-400 hover:scale-[102%] ease-in duration-200 ${isMobileView ? 'cursor-pointer' : ''} ${isMobileView && !isExpanded ? 'h-[60vh] overflow-hidden' : ''}`} onClick={isMobileView ? () => setIsExpanded(prev => !prev) : undefined}>
            <p className='pt-2 text-[#ecf0f3] dark:text-[#012033] italic md:text-center'>"If you could train an AI to be a Buddhist, it would probably be pretty good."</p>
            <p className='text-[#ecf0f3] dark:text-[#012033] italic text-right'>- Reid Hoffman</p>
            <p className='py-4 text-[#ecf0f3] dark:text-[#012033]'>
              I am currently studying <span className='text-[#40e0d0] dark:text-[#008080]'> Computer Science </span> and <span className='text-[#40e0d0] dark:text-[#008080]'> Cognitive Science </span>
              at Rutgers University-New Brunswick. I also work as an ML Full-Stack Developer Intern at a fintech scaleup and as a research assistant at a joint Rutgers-Princeton laboratory. My passions
              lie at the nexus of artificial intelligence and mental healthcare, and I am keen to delve into computational linguistics, neuroscience, and new LLM frameworks. In the future, I aim to
              establish a startup and develop personalized, patient-centric <span className='text-[#40e0d0] dark:text-[#008080]'> chatbots for mental healthcare</span>, though I recognize I have a
              long journey ahead. I also speak English, Bengali, Hindi, and some Japanese and German. If you know any of these languages, feel free to say hi in your native tongue!
            </p>
            <Link href='/resume'>
              <p className='py-1 text-[#40e0d0] dark:text-[#008080] cursor-pointer'>Check out my resume here!</p>
            </Link>
            <Link href='/cv'>
              <p className='py-1 text-[#40e0d0] dark:text-[#008080] cursor-pointer'>Check out my CV here!</p>
            </Link>
            <Link href='https://criticalai.org/2023/07/31/student-insights-the-dark-side-of-chatbot-therapy/'>
              <a target='_blank'>
                <p className='py-1 text-[#40e0d0] dark:text-[#008080] cursor-pointer'>Read one of my recent articles here</p>
              </a>
            </Link>
          </div>
        </div>

        <div className='hidden md:mt-16 md:flex md:w-1/4 md:flex-col md:items-center md:justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <div className='relative w-[400px] h-[400px]'>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='animate-spin-slow h-full w-full fill-current'>
                <path className='fill-[#40e0d0] dark:fill-[#012033]' d="M46,-79.5C60,-71.6,72,-60,79.6,-46.2C87.2,-32.3,90.4,-16.2,89.2,-0.7C87.9,14.7,82.1,29.4,74.6,43.5C67.2,57.6,58,71.1,45.3,78.8C32.6,86.4,16.3,88.2,0.3,87.6C-15.6,87,-31.2,84,-44.3,76.6C-57.4,69.2,-68.1,57.3,-76.7,43.8C-85.3,30.3,-91.9,15.1,-91.6,0.2C-91.4,-14.8,-84.2,-29.7,-75.5,-43C-66.8,-56.4,-56.6,-68.3,-43.7,-76.9C-30.9,-85.4,-15.4,-90.7,0.3,-91.2C16,-91.7,32,-87.4,46,-79.5Z" transform="translate(100 100)" />
              </svg>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='bg-[#BBEBE9] dark:bg-[#008080] w-[300px] h-[300px] rounded-full z-10'>
                  <Image src={AboutImg} height='500' width='500' alt='/' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
