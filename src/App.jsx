import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Table from './Components/Table/Table'
import useApiurl from './Components/CustomeHooks/useApiurl'
function App() {

  const {data,error,loading}=useApiurl("https://hiring-assignment.wobot.ai/api/v1/fetch/cameras")
  return (
    <>
     <div className='maincontanier'>
      <Header/>
      <Table data={data} loading={loading} error={error}/>
     </div>
    </>
  )
}

export default App
