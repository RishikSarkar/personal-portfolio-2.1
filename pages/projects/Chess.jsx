import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import chess_color from '../../public/assets/projects/chess-color.PNG'
import {useTheme} from 'next-themes'

const property = () => {
  return (
    <div className='font-montserrat w-full selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080]'>
      <div className='w-screen h-[40vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={chess_color} alt='/' />
        <div className='absolute top-[65%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-8'>
          <h2>Chess</h2>
          <h3>Java | JavaFX</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-8 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='mb-8'>Overview</h2>
          <p className='mb-8'>
            <p className='mb-2'>
              I developed two Chess projects using <span className='text-[#40e0d0] dark:text-[#008080]'>Java</span> as part of my 
              Software Methodology (<span className='text-[#40e0d0] dark:text-[#008080]'>01:198:213</span>) course.
            </p>
            <p className='mb-2'>
              &emsp;&emsp;The first project is a terminal-based Chess application that allowed me to showcase my understanding of the fundamental 
              aspects of <span className='text-[#40e0d0] dark:text-[#008080]'>Java</span> and OOP, such as inheritance, polymorphism, and abstraction. 
              It also required me to implement some complex functionality mechanics of the game and continuously check and account for edge cases. 
              Finally, I created <span className='text-[#40e0d0] dark:text-[#008080]'>Javadoc</span> comments to elaborate on all the methods 
              and algorithms involved. Although the project was supposed to be a paired programming project, I had to complete it on my 
              own within a week, which I am proud of.
            </p>
            <p className='mb-2'>
              &emsp;&emsp;The second project is an <span className='text-[#40e0d0] dark:text-[#008080]'>Android</span> Chess application 
              developed using <span className='text-[#40e0d0] dark:text-[#008080]'>JavaFX</span> in 
              <span className='text-[#40e0d0] dark:text-[#008080]'> Android Studio</span>. In this project, I demonstrated my understanding 
              of software engineering basics by implementing several features: an "AI" button to make a random legal move for a player, 
              an undo button to reverse the last played move, and options to draw, resign, checkmate, or stalemate a game. Additionally, 
              users can save recorded games with their preferred names and sort them by date or title. The project showcases my ability 
              to create practical applications using <span className='text-[#40e0d0] dark:text-[#008080]'>JavaFX</span> and my grasp of 
              software engineering principles.
            </p>
            <p>
              &emsp;&emsp;Overall, these Chess projects demonstrate my programming proficiency and ability to implement complex features 
              in practical applications. It is a testament to the skills and knowledge I gained through coursework and represents my passion 
              for software development. I added the <span className='text-[#40e0d0] dark:text-[#008080]'>GitHub</span> link to the project 
              source code below, so feel free to check it out!
            </p>
          </p>
          <Link href='https://github.com/RishikSarkar/Chess'>
            <a target='_blank'>
              <button className='px-8 py-2 mt-4 mr-8 dark:bg-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400'>Terminal Chess</button>
            </a>
          </Link>
          <Link href='https://github.com/RishikSarkar/android-chess-78'>
            <a target='_blank'>
              <button className='px-8 py-2 mt-4 dark:bg-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400'>Android Chess</button>
            </a>
          </Link>
        </div>
        <div className='mt-12 md:h-[60%] col-span-4 md:col-span-1 text-[#ecf0f3] dark:text-[#012033] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:hover:shadow-gray-400 ease-in duration-200 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Resources</p>
            <div className='grid grid-cols-3 md:grid-cols-1 mt-2 items-center'>

              <p className='py-3 flex items-center'>Java</p>

              <p className='py-3 flex items-center'>JavaFX</p>

              <p className='py-3 flex items-center'>Android Studio</p>

              <p className='py-3 flex items-center'>Javadoc</p>

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
