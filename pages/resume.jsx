import React, { useState } from 'react'
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import { Document, Page, pdfjs } from 'react-pdf'
import Link from 'next/link'

function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
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
              <Page pageNumber={pageNumber} renderTextLayer={false} />
            </Document>
          </div>

          <div className='flex justify-center'>
            <a href="../assets/files/Resume.pdf" download className="rounded-xl hover:scale-[105%] ease-in duration-200 px-8 py-2 dark:bg-[#ecf0f3] text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] shadow-none hover:shadow-md hover:shadow-[#40e0d0] border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400"> Download </a>
          </div>

          <div className='items-center mx-auto mt-8 md:pb-8 grid'>
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
