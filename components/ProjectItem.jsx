import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, technology, projectUrl}) => {
  return (
    <div className='font-montserrat relative flex items-center justify-center h-[230px] sm:h-[230px] lg:h-[340px] w-full border-2 border-[#40e0d0]  dark:border-gray-600 hover:shadow-xl shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 rounded-2xl p-4 group hover:bg-gradient-to-r from-[#012033] to-[#0A3B49] hover:scale-[102%] ease-in duration-200'>
      <Image className='rounded-2xl group-hover:opacity-5' layout='fill' src={backgroundImg} alt='/' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in duration-200'>
        <h3 className='text-2xl text-[#ecf0f3] tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-[#ecf0f3] text-center'>{technology}</p>
        <Link href={projectUrl}>
          <p className='w-[150px] border-2 border-[#40e0d0] dark:border-gray-600 text-center py-3 rounded-lg bg-[#012033] dark:bg-[#ecf0f3] text-[#ecf0f3] dark:text-[#012033] font-bold text-lg cursor-pointer hover:shadow-md hover:shadow-[#40e0d0] dark:shadow-gray-400 hover:text-[#BBEBE9] dark:hover:text-[#008080] ease-in duration-200'>More Info</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem
