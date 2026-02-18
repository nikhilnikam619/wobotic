import { useState,useMemo } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import TableData from './Components/Table/TableData'
import useApiurl from './Components/CustomeHooks/useApiurl'
import Pagination from "./Components/Pagination/Pagination"
function App() {

  const {data,error,loading}=useApiurl("https://hiring-assignment.wobot.ai/api/v1/fetch/cameras")
   const [currentPage, setCurrentPage] = useState(1);

   const itemperpage = 10;
const totalPages = Math.ceil(data.length / itemperpage);
    const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemperpage;
    return data.slice(start, start + itemperpage);
  }, [data, currentPage]);
  return (
    <>
     <div className='maincontanier'>
      <Header/>
      <TableData data={paginatedData} loading={loading} error={error}/>
       <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
     </div>
    </>
  )
}

export default App
