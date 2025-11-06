import React, { useState } from 'react'
import { AppContextWrapper } from './context/app-context/app-context'


function App() {
  const {data} = React.useContext(AppContextWrapper)

  return (
    <>
    <div className='container'>

    </div>
    </>
  )
}

export default App
