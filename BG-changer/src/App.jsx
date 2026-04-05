import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('bg-black');

  // function changeColor(color) {
  //   setBgColor(color);
  // }

  return (
    

    <div className={`w-full h-screen flex duration-200 ${bgColor}`}>


      <div className='flex flex-wrap fixed justify-center top-0 inset-x-0 px-2'>
        <button className='w-20 h-20 m-2 rounded-full bg-red-500 border-2 border-white' onClick={() => setBgColor('bg-red-500') }>RED</button>
        
        <button className='w-20 h-20 m-2 rounded-full bg-green-500 border-2 border-white' onClick={() => setBgColor('bg-green-500') }>GREEN</button>

        <button className='w-20 h-20 m-2 rounded-full bg-blue-500 border-2 border-white' onClick={() => setBgColor('bg-blue-500') }>BLUE</button>

        <button className='w-20 h-20 m-2 rounded-full bg-yellow-500 border-2 border-white' onClick={() => setBgColor('bg-yellow-500') }>YELLOW</button>

        <button className='w-20 h-20 m-2 rounded-full bg-purple-500 border-2 border-white' onClick={() => setBgColor('bg-purple-500') }>PURPLE</button>
      </div>
      


    </div>
  ) 
}

export default App
