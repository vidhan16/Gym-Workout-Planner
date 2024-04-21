import React from 'react'
import Vid from './Home_video.mp4'
import './Home_display.css'
export default function Home_display() {
  return (
    <div>
      <div className='h-full w-full relative'>
        <video className='opacity-90 z-0' autoPlay muted loop>
          <source src={Vid}></source>
        </video>
        <div className='content absolute top-0 flex flex-col items-center justify-center h-full w-full'>
          <p className='pehla font-bold text-white'>Free Workout Plans</p>
          <p className='dusra text-white'>The most comprehensive database of free workout routines anywhere!</p>
          <p className='dusra text-white'>Download workout plans any goal or experience level.</p>
        </div>
      </div>
    </div>
  )
}
