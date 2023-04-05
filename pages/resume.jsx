import React, {useRef, useState, useEffect} from 'react'
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import {Document, Page, pdfjs} from 'react-pdf'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import {useTheme} from 'next-themes'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const[pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  return (
    <div className='font-montserrat md:w-screen selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] h-screen text-center bg-[#012033] dark:bg-[#ecf0f3]'>
      <div className='h-[85%] mx-auto p-20 flex justify-center items-top'>
        <div>
          <p className='py-5 text-2xl uppercase tracking-widest text-[#ecf0f3] dark:text-[#012033]'>
            Resume
          </p>
          <div className='pb-8'>
            <Document file='../assets/files/Resume.pdf' onLoadSuccess={onDocumentLoadSuccess}>
              <Page size="A4" pageNumber={pageNumber} renderTextLayer={false} />
            </Document>
          </div>
          <div className='items-center mx-auto md:pb-8 grid'>
            <Link href='/#about'>
              <p className='uppercase underline cursor-pointer text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080]'>Back</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;
