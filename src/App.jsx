import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Table from './Components/Table/Table'
function App() {

  return (
    <>
     <div className='maincontanier'>
      <Header/>
      <Table/>
     </div>
    </>
  )
}

export default App
