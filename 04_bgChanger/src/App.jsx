import { useState } from 'react'
import './App.css'
function App() {

const [color, setColor] = useState('olive');

  return (
    <>
      <div className='w-full h-screen flex flex-col-reverse items-center' style={{backgroundColor : color}}>
          <div className='mb-48 flex gap-10 w-max bg-white rounded-lg px-8 py-2'>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-blue-500 text-white text-xl' onClickCapture={()=>setColor('#3b82f6')}>Blue</button>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-red-500 text-white text-xl' onClick={()=>setColor('#ef4444')}>Red</button>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-green-500 text-white text-xl' onClick={()=>setColor('#22c55e')}>Green</button>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-yellow-400 text-white text-xl' onClick={()=>setColor('#facc15')}>Yellow</button>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-emerald-800 text-white text-xl' onClick={()=>setColor('#065f46')}>Emerald</button>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-cyan-400 text-white text-xl' onClick={()=>setColor('#22d3ee')}>Cyan</button>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-pink-500 text-white text-xl' onClick={()=>setColor('#ec4899')}>Pink</button>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-slate-900 text-white text-xl' onClick={()=>setColor('#0f172a')}>Slate</button>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-orange-500 text-white text-xl' onClick={()=>setColor('#f97316')}>Orange</button>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-indigo-500 text-white text-xl' onClick={()=>setColor('#6366f1')}>Indigo</button>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-purple-500 text-white text-xl' onClick={()=>setColor('#a855f7')}>Purple</button>
            <button className='border-[1.5px] px-4 py-1 rounded-full border-white bg-zinc-500 text-white text-xl' onClick={()=>setColor('#71717a')}>Zinc</button>
          </div>
      </div>
    </>
  )
}

export default App
