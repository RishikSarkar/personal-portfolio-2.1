import React from 'react'
import Image from 'next/image'
import {FaJava, FaPython, FaGitAlt, FaReact, FaNodeJs} from 'react-icons/fa';
import {SiTensorflow, SiKeras, SiTailwindcss} from 'react-icons/si';

const Skills = () => {
  return (
    <div id='skills' className='font-montserrat selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] w-full lg:h-screen p-8 -mt-8'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full px-8'>
        <p className='text-xl tracking-widest uppercase text-[#40e0d0] dark:text-[#008080]'>Skills</p>
        <h2 className='py-6 text-[#ecf0f3] dark:text-[#012033]'>What I Can Do</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-xl hover:shadow-[#40e0d0] dark:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-[#BBEBE9] dark:hover:text-[#008080]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <FaJava size={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className='p-6 border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-xl hover:shadow-[#40e0d0] dark:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-[#BBEBE9] dark:hover:text-[#008080]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <FaPython size={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className='p-6 border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-xl hover:shadow-[#40e0d0] dark:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-[#BBEBE9] dark:hover:text-[#008080]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiTensorflow size={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TensorFlow</h3>
              </div>
            </div>
          </div>

          <div className='p-6 border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-xl hover:shadow-[#40e0d0] dark:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-[#BBEBE9] dark:hover:text-[#008080]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiKeras size={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Keras</h3>
              </div>
            </div>
          </div>

          <div className='p-6 border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-xl hover:shadow-[#40e0d0] dark:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-[#BBEBE9] dark:hover:text-[#008080]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <FaGitAlt size={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>

          <div className='p-6 border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-xl hover:shadow-[#40e0d0] dark:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-[#BBEBE9] dark:hover:text-[#008080]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <FaReact size={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className='p-6 border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-xl hover:shadow-[#40e0d0] dark:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-[#BBEBE9] dark:hover:text-[#008080]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiTailwindcss size={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TailwindCSS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-xl hover:shadow-[#40e0d0] dark:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-200 hover:text-[#BBEBE9] dark:hover:text-[#008080]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <FaNodeJs size={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node.js</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
