import React,{ useState } from 'react'

import './App.css'

function App() {
  const [color,setColor] = useState('red')

  const ChangeColor =(newcolor)=>{
    setColor(newcolor)
  }

  return (
    <div className=" d-flex text-center justify-content-center align-items-center w-100" style={{height:'100vh',backgroundColor:color,flexDirection:'column'}}>
      <h3>Background Color Changer</h3>
      <button style={{background : "red"}} className='mb-3' onClick={()=> ChangeColor('red')}>Red</button>
        <button style={{background : "green"}} className='mb-3' onClick={() => ChangeColor('green')}>Green</button>
        <button style={{background : "blue"}} className='mb-3' onClick={() => ChangeColor('blue')}>Blue</button>
    </div>
  )
}

export default App
