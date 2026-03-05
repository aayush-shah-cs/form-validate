import React from 'react'
import Form from './Components/Form'
import MenuBar from './Components/MenuBar'
import Toaster from './Components/Toaster'
const App = () => {
  return (
    <div className='relative flex'>
      <Form/>
      <MenuBar/>
    </div>
  )
}

export default App
