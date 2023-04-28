import React, { useState } from 'react'
import Header from './components/Header'
import Middle from './components/Middle'

const App = () => {

  const [ data, setData ] = useState('')
  const [ name, setName ] = useState([])

  return (
    <div>
      <Header data={data} setData={setData} name={name} setName={setName} />
      <Middle/>
    </div>
  )
}

export default App