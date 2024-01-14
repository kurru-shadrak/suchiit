

import './App.css'
import React from 'react'
import Side from './Components/Side'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footers'
import DirectorsMessage from './Components/directorsMessage'
import StudentLogin from './Components/Pages/StudentLogin'



function App() {
 
  return (
    <div className='bg-white '>
       <Header/>
      <Home/>
      <DirectorsMessage/>
      <Footer/> 
   
    </div>
   
  )
}

export default App
