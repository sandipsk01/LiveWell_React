import React from 'react'
import Curosal from './Curosal/Curosal'
import Imp from './Imp/Imp'

export default function Home() {
  return (
    <div className='flex flex-col items-center bg-slate-200'>
    <Curosal />
    <Imp />
    </div>
  )
}
