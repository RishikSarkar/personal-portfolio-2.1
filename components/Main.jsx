import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub, FiMail } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const easing = [.6, -.05, .01, .9]

const fadeInUp = {
  initial: {
    y: 250,
    opacity: 0
  },

  animate: {
    y: 150,
    opacity: 1,

    transition: {
      duration: .8,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Main = () => {
  return (
    <motion.div initial='initial' animate='animate'>
      <div id='home' className='font-montserrat selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] w-full h-screen text-center bg-[#012033] dark:bg-[#ecf0f3]'>
        <motion.div variants={stagger}>
          <motion.div variants={fadeInUp}>
            <div className='-translate-y-16 md:translate-y-0 max-w-[1240px] w-full h-full mx-auto p-10 flex justify-center items-center'>
              <div>
                <p className='py-2 uppercase text-sm tracking-widest text-[#ecf0f3] dark:text-[#012033]'>
                  Hello there!
                </p>
                <h1 className='py-3 text-[#ecf0f3] dark:text-[#012033]'>
                  I'm <span className='text-[#40e0d0] dark:text-[#008080]'> Rishik</span>
                </h1>
                <h1 className='py-2 text-5xl text-[#ecf0f3] dark:text-[#012033]'>
                  An Undergraduate Developer
                </h1>
                <p className='py-4 text-[#ecf0f3] dark:text-[#012033] max-w-[65%] m-auto'>
                  I'm currently a Senior at Rutgers University interested in <span className='text-[#40e0d0] dark:text-[#008080]'> chatbots </span> and
                  <span className='text-[#40e0d0] dark:text-[#008080]'> mental healthcare</span>. Welcome to my personal website!
                </p>
                <div className='select-none flex items-center justify-between max-w-[330px] m-auto py-4'>

                  <Link href='https://github.com/RishikSarkar'>
                    <a target='_blank'>
                      <div className='text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] rounded-full shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 p-6 hover:scale-110 ease-in duration-200 cursor-pointer'>
                        <FiGithub />
                      </div>
                    </a>
                  </Link>

                  <Link href='https://www.linkedin.com/in/Rishik-Sarkar/'>
                    <a target='_blank'>
                      <div className='text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] rounded-full shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 p-6 hover:scale-110 ease-in duration-200 cursor-pointer'>
                        <FaLinkedinIn />
                      </div>
                    </a>
                  </Link>

                  <Link href='https://x.com/RishikSarkar_'>
                    <a target='_blank'>
                      <div className='text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] rounded-full shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 p-6 hover:scale-110 ease-in duration-200 cursor-pointer'>
                        <RiTwitterXLine />
                      </div>
                    </a>
                  </Link>

                  <Link href='mailto:rishiksarkar02@gmail.com'>
                    <a target='_blank'>
                      <div className='text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] rounded-full shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 p-6 hover:scale-110 ease-in duration-200 cursor-pointer'>
                        <FiMail />
                      </div>
                    </a>
                  </Link>

                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Main
