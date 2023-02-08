import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsMoon, BsSun, BsArrowBarLeft} from 'react-icons/bs';
import {FiTwitter, FiGithub, FiMail} from 'react-icons/fi';
import logo from "../public/assets/logo.jpg"
import {useTheme} from 'next-themes'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const {theme, setTheme} = useTheme();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      }
      else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? 'font-montserrat selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] fixed w-full h-20 shadow-xl z-[100] bg-[#012033] dark:bg-[#ecf0f3]' : 'font-montserrat selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] fixed w-full h-20 z-[100] bg-[#012033] dark:bg-[#ecf0f3]'}>
      <div className='flex justify-center items-center w-full h-full px-10 2xl:px-16'>
        <div>
          <ul className='hidden md:flex text-[#ecf0f3] dark:text-[#012033]'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:text-[#BBEBE9] dark:hover:text-[#008080]'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:text-[#BBEBE9] dark:hover:text-[#008080]'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:text-[#BBEBE9] dark:hover:text-[#008080]'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:text-[#BBEBE9] dark:hover:text-[#008080]'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:text-[#BBEBE9] dark:hover:text-[#008080]'>Contact</li>
            </Link>

            <li onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              <div><BsMoon className='dark:hidden ml-10 hover:text-[#BBEBE9] dark:hover:text-[#008080] cursor-pointer hover:scale-[120%] ease-in duration-200' /></div>
              <div><BsSun className='hidden dark:block ml-10 hover:text-[#BBEBE9] dark:hover:text-[#008080] cursor-pointer hover:scale-[120%] ease-in duration-200' /></div>
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <AiOutlineMenu className='text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080]' size = {25}/>
          </div>
        </div>
      </div>
      <div className={nav ? 'font-montserrat md:hidden fixed left-0 top-0 w-full h-screen bg-black/50' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#012033] dark:bg-[#ecf0f3] p-12 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-end mb-10'>
              <div onClick={handleNav} className='text-xl text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 ease-in duration-200 rounded-full p-4 cursor-pointer'>
                <BsArrowBarLeft />
              </div>
            </div>
            <div className='my-4'>
            </div>
          </div>
          <div className='py-12 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={()=> setNav(false)} className='py-4 text-md text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] hover:border-b hover:border-[#BBEBE9] dark:hover:border-[#008080]'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={()=> setNav(false)} className='py-4 text-md text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] hover:border-b hover:border-[#BBEBE9] dark:hover:border-[#008080]'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={()=> setNav(false)} className='py-4 text-md text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] hover:border-b hover:border-[#BBEBE9] dark:hover:border-[#008080]'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li onClick={()=> setNav(false)} className='py-4 text-md text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] hover:border-b hover:border-[#BBEBE9] dark:hover:border-[#008080]'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={()=> setNav(false)} className='py-4 text-md text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] hover:border-b hover:border-[#BBEBE9] dark:hover:border-[#008080]'>Contact</li>
              </Link>

              <li onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                <div className='dark:hidden py-4 text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] cursor-pointer'><BsMoon /></div>
                <div className='hidden dark:block py-4 text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] cursor-pointer'><BsSun /></div>
              </li>

            </ul>
            <div className='pt-40'>
              <div className='flex items-center justify-between -my-16 w-full sm:w-[80%]'>

                <Link href='https://github.com/RishikSarkar'>
                  <a target='_blank'>
                    <div className='text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] rounded-full shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                      <FiGithub />
                    </div>
                  </a>
                </Link>

                <Link href='https://www.linkedin.com/in/Rishik-Sarkar/'>
                  <a target='_blank'>
                    <div className='text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] rounded-full shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                </Link>

                <Link href='https://twitter.com/RishikSarkar_'>
                  <a target='_blank'>
                    <div className='text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] rounded-full shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                      <FiTwitter />
                    </div>
                  </a>
                </Link>

                <Link href='mailto:rishiksarkar02@gmail.com'>
                  <a target='_blank'>
                    <div className='text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] rounded-full shadow-md hover:shadow-lg shadow-[#40e0d0] hover:shadow-[#40e0d0] dark:shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                      <FiMail />
                    </div>
                  </a>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar
