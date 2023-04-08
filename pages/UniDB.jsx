import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import unidb_color from '../public/assets/projects/unidb-color.PNG'
import {useTheme} from 'next-themes'

const property = () => {
  return (
    <div className='font-montserrat w-full selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080]'>
      <div className='w-screen h-[40vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={unidb_color} alt='/' />
        <div className='absolute top-[65%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-8'>
          <h2>UniDB</h2>
          <h3>SQL | Java</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-8 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='mb-8'>Overview</h2>
          <p className='mb-8'>
            <p className='mb-2'>
              &emsp;&emsp;UniDB is a project I developed as part of my Principles of Information and Data Management (<span className='text-[#40e0d0] dark:text-[#008080]'>01:198:336</span>) class.
              For the project, I <span className='text-[#40e0d0] dark:text-[#008080]'>generated data</span> for 100 university students using various data structures and scraped course data from Rutgers University
              websites using <span className='text-[#40e0d0] dark:text-[#008080]'>Beautiful Soup</span> and <span className='text-[#40e0d0] dark:text-[#008080]'>Requests</span>. I subsequently used this data
              to create a <span className='text-[#40e0d0] dark:text-[#008080]'>MySQL</span> database containing realistic data for 100 <span className='text-[#40e0d0] dark:text-[#008080]'>students</span>, including their <span className='text-[#40e0d0] dark:text-[#008080]'>majors</span>,
              <span className='text-[#40e0d0] dark:text-[#008080]'> minors</span>, <span className='text-[#40e0d0] dark:text-[#008080]'>total credits</span>, and <span className='text-[#40e0d0] dark:text-[#008080]'>class schedules</span>,
              which I extracted from a list of over 250 distinct scraped classes.
            </p>
            <p>
              &emsp;&emsp;To access the data in the <span className='text-[#40e0d0] dark:text-[#008080]'>MySQL</span> server, I developed a Java application using the <span className='text-[#40e0d0] dark:text-[#008080]'>JDBC API</span>,
              which allowed me to query the database and retrieve information about the students' <span className='text-[#40e0d0] dark:text-[#008080]'>schedules</span> and other details. The project demonstrates the potential of
              <span className='text-[#40e0d0] dark:text-[#008080]'> data scraping</span> and <span className='text-[#40e0d0] dark:text-[#008080]'>database management</span> techniques to create realistic datasets for research or education;
              and the importance of effective <span className='text-[#40e0d0] dark:text-[#008080]'>data querying</span> and management tools in efficiently accessing and utilizing large amounts of data.
              I added the <span className='text-[#40e0d0] dark:text-[#008080]'>GitHub</span> link to the project source code below, so feel free to check it out!
            </p>
          </p>
          <Link href='https://github.com/RishikSarkar/unidb-jdbc-mysql'>
            <a target='_blank'>
              <button className='px-8 py-2 mt-4 dark:bg-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400'>Code</button>
            </a>
          </Link>
        </div>
        <div className='mt-12 md:h-[60%] col-span-4 md:col-span-1 text-[#ecf0f3] dark:text-[#012033] shadow-none border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:hover:shadow-gray-400 ease-in duration-200 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Resources</p>
            <div className='grid grid-cols-3 md:grid-cols-1 mt-2 items-center'>

              <p className='py-3 flex items-center'>MySQL</p>

              <p className='py-3 flex items-center'>JDBC</p>

              <p className='py-3 flex items-center'>Jupyter Notebook</p>

              <p className='py-3 flex items-center'>Beautiful Soup</p>

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
