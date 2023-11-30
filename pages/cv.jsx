import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from 'react-pdf';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CV() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => {
            const newPageNumber = prevPageNumber + offset;
            return Math.min(Math.max(1, newPageNumber), numPages);
        });
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => changePage(1),
        onSwipedRight: () => changePage(-1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <div {...swipeHandlers} className='font-montserrat md:w-screen selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] h-screen text-center bg-[#012033] dark:bg-[#ecf0f3]'>
            <div className='h-[85%] mx-auto p-20 flex justify-center items-top'>
                <div>
                    <p className='py-5 text-2xl uppercase tracking-widest text-[#ecf0f3] dark:text-[#012033]'>
                        Curriculum Vitae
                    </p>
                    <div className='pb-8 flex justify-center items-center relative'>
                        {pageNumber > 1 && (
                            <button onClick={() => changePage(-1)} className='absolute left-0 z-10 text-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none hover:shadow-none dark:bg-[#ecf0f3] text-center transition-none'>
                                <FaChevronLeft size={40} />
                            </button>
                        )}
                        <Document file='../assets/files/CV.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} renderTextLayer={false} />
                        </Document>
                        {pageNumber < numPages && (
                            <button onClick={() => changePage(1)} className='absolute right-0 z-10 text-[#ecf0f3] dark:text-[#012033] dark:hover:text-[#008080] shadow-none hover:shadow-none dark:bg-[#ecf0f3] text-center transition-none'>
                                <FaChevronRight size={40} />
                            </button>
                        )}
                    </div>

                    <div className='flex justify-center'>
                        <a href="../assets/files/CV.pdf" download className="rounded-xl hover:scale-[105%] ease-in duration-200 px-8 py-2 dark:bg-[#ecf0f3] text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080] shadow-none hover:shadow-md hover:shadow-[#40e0d0] border-2 border-[#40e0d0] dark:border-gray-600 dark:shadow-gray-400"> Download </a>
                    </div>

                    <div className='items-center mx-auto mt-8 md:pb-8 grid'>
                        <Link href='/#about'>
                            <p className='uppercase underline cursor-pointer text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080]'>Back</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CV;