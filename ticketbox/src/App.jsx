import { useState } from 'react'

import './App.css'
import authApi from './api/modules/auth.api'

function App() {
 
  const handlerLogin = async ()=>{
    const respose = await authApi.login({email:'son123@gmail.com', password: 'thienlong123'})
    
  }
  return (
    <>
        <button onClick={handlerLogin}>Click login</button>
    </>
  )
}

export default App
