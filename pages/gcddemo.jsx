import React, {useRef, useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import {useTheme} from 'next-themes'

import * as tf from '@tensorflow/tfjs'
import {nextFrame} from '@tensorflow/tfjs'
import Webcam from 'react-webcam'
import {loadGraphModel} from '@tensorflow/tfjs-converter'
import {drawRect} from '../utilities'

function GuitarChordsTFOD() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runCoco = async () => {
    const net = await tf.loadGraphModel('https://guitarchordtfod.s3.us-east.cloud-object-storage.appdomain.cloud/model.json')

    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current != null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640, 480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)

      // console.log(await obj[7].array())

      const boxes = await obj[1].array()
      const classes = await obj[7].array()
      const scores = await obj[5].array()

      const ctx = canvasRef.current.getContext("2d");

      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)});

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)
    }
  };

  useEffect(() => {runCoco()}, []);

  return (
    <div className='font-montserrat w-screen selection:text-[#012033] selection:bg-[#40e0d0] dark:selection:text-[#ecf0f3] dark:selection:bg-[#008080] h-screen text-center bg-[#012033] dark:bg-[#ecf0f3]'>
      <div className='h-[85%] mx-auto p-20 flex justify-center items-top'>
        <div>
          <p className='py-5 text-2xl uppercase tracking-widest text-[#ecf0f3] dark:text-[#012033]'>
            Guitar Chord Detector Demo
          </p>
        </div>
        <div className='py-32 md:py-16'>
          <Webcam
            ref={webcamRef}
            muted={true}
            className='absolute w-[400px] h-[300px] md:w-[640px] md:h-[480px] left-0 right-0 z-9 text-center ml-auto mr-auto rounded-2xl border-2 border-[#40e0d0] dark:border-gray-600'
          />

          <canvas
            ref={canvasRef}
            className='absolute w-[400px] h-[300px] md:w-[640px] md:h-[480px] ml-auto mr-auto l-0 r-0 text-center z-8'
          />
        </div>
      </div>
      <div className='items-center mx-auto -mt-12 md:mt-0 md:py-8 p-8 grid md:grid-cols-5'>
        <Link href='/GuitarChordDetector'>
          <p className='uppercase underline cursor-pointer text-[#ecf0f3] dark:text-[#012033] hover:text-[#BBEBE9] dark:hover:text-[#008080]'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default GuitarChordsTFOD;
