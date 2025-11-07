import React, { useState } from 'react'
import { AppContextWrapper } from './context/app-context/app-context'
import { Form } from './components/form.jsx';
import { Info } from './components/info.jsx';


function App() {
  const { data } = React.useContext(AppContextWrapper)

  return (
    <>
      <div className='container'>
        <Form />
        {
          data?.list.map((i) => {
            return <Info key={i.id} username={i.username} id={i.id} />
          })
        }
      </div>
    </>
  )
}

export default App
