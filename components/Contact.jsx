import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn } from 'react-icons/fa';
import ContactImg from '../public/assets/profile-realistic-nobg.png'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { FiGithub, FiMail } from 'react-icons/fi'
import { RiTwitterXLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <div id='contact' className='font-montserrat w-full lg:h-screen selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] pt-16'>
      <div className='max-w-[1240px] m-auto px-8 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#40e0d0] dark:text-[#008080]'>Contact</p>
        <h2 className='py-6 text-[#ecf0f3] dark:text-[#012033]'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>

          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-none border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-xl shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 ease-in duration-200 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div className='flex justify-center sm:mt-4 md:mt-0'>
                <div className='flex items-center justify-center rounded-full border-4 border-[#40e0d0] dark:border-gray-600 h-[300px] w-[300px]'>
                  <Image className='rounded-full' height='300' width='300' src={ContactImg} alt='/' />
                </div>
              </div>
              <div>
                <h2 className='mt-8 py-2 sm:flex justify-center md:justify-start px-4'>Rishik Sarkar</h2>
                <p className='sm:flex justify-center md:justify-start px-4'>CS Honors Student</p>
              </div>
              <div>
                <p className='uppercase pt-4 md:pt-6 sm:flex justify-center md:justify-start sm:pb-4 md:pb-4 px-4'>Connect With Me</p>
                <div className='flex items-center py-4 px-4 justify-around md:justify-between'>

                  <Link href='https://github.com/RishikSarkar'>
                    <a target='_blank'>
                      <div className='text-[#ecf0f3] dark:text-[#012033] shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 hover:text-[#BBEBE9] rounded-full p-6 curson-pointer hover:scale-110 ease-in duration-200 cursor-pointer'>
                        <FiGithub />
                      </div>
                    </a>
                  </Link>

                  <Link href='https://www.linkedin.com/in/Rishik-Sarkar/'>
                    <a target='_blank'>
                      <div className='text-[#ecf0f3] dark:text-[#012033] shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 hover:text-[#BBEBE9] rounded-full p-6 curson-pointer hover:scale-110 ease-in duration-200 cursor-pointer'>
                        <FaLinkedinIn />
                      </div>
                    </a>
                  </Link>

                  <Link href='https://x.com/RishikSarkar_'>
                    <a target='_blank'>
                      <div className='text-[#ecf0f3] dark:text-[#012033] shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 hover:text-[#BBEBE9] rounded-full p-6 curson-pointer hover:scale-110 ease-in duration-200 cursor-pointer'>
                        <RiTwitterXLine />
                      </div>
                    </a>
                  </Link>

                  <Link href='mailto:rishiksarkar02@gmail.com'>
                    <a target='_blank'>
                      <div className='text-[#ecf0f3] dark:text-[#012033] shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 hover:text-[#BBEBE9] rounded-full p-6 curson-pointer hover:scale-110 ease-in duration-200 cursor-pointer'>
                        <FiMail />
                      </div>
                    </a>
                  </Link>

                </div>
              </div>
            </div>
          </div>

          <div className='col-span-3 w-full h-auto shadow-none border-2 border-[#40e0d0] dark:border-gray-600 hover:shadow-xl shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 ease-in duration-200 rounded-xl lg:p-4'>
            <div className='p-4'>

              <form action='https://getform.io/f/36e3b5ba-0926-4941-9c9c-2c1bad4b9334' method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='text-black border-2 rounded-lg p-2 flex border-[#BBEBE9] dark:border-[#012033] dark:bg-white outline-none' name='Name' type="text" />
                  </div>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='text-black border-2 rounded-lg p-2 flex border-[#BBEBE9] dark:border-[#012033] dark:bg-white outline-none' name='Phone Number' type="text" />
                  </div>
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='text-black border-2 rounded-lg p-2 flex border-[#BBEBE9] dark:border-[#012033] dark:bg-white outline-none' name='Email' type="email" />
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input className='text-black border-2 rounded-lg p-2 flex border-[#BBEBE9] dark:border-[#012033] dark:bg-white outline-none' name='Subject' type="text" />
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='text-black border-2 rounded-lg p-2 border-[#BBEBE9] dark:border-[#012033] dark:bg-white resize-none outline-none' name='Message' rows='4'></textarea>
                </div>

                <button className='shadow-none hover:shadow-none py-8 w-full p-3 text-[#ecf0f3] hover:text-[#BBEBE9] dark:text-[#012033] dark:hover:text-[#008080] dark:bg-[#ecf0f3] border-2 border-[#40e0d0] dark:border-2 dark:border-[#012033] mt-6'>Send Message</button>

              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full text-[#ecf0f3] hover:text-[#BBEBE9] dark:text-[#012033] dark:hover:text-[#008080] shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 p-6 curson-pointer hover:scale-110 ease-in duration-200 cursor-pointer'>
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
