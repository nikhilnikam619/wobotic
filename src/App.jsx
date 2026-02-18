import { useState,useMemo, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import TableData from './Components/Table/TableData'
import useApiurl from './Components/CustomeHooks/useApiurl'
import Pagination from "./Components/Pagination/Pagination"
function App() {

  const {data,loading}=useApiurl("https://hiring-assignment.wobot.ai/api/v1/fetch/cameras")
   const [currentPage, setCurrentPage] = useState(1);
    const [serch,setSerch]=useState("")

   const filtdata = useMemo(() => {
  return data.filter((ele) =>
    ele.name.toLowerCase().includes(serch.toLowerCase())
  );
}, [data, serch]);


     
   const itemperpage = 10;
const totalPages = Math.ceil(data.length / itemperpage);
    const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemperpage;
    return filtdata.slice(start, start + itemperpage);
  }, [filtdata, currentPage]);
  return (
    <>
     <div className='maincontanier'>
      <Header serch={serch} setSerch={setSerch}/>
      {loading ? (
  <div className="loading-wrapper">
    <div className="spinner"></div>
  </div>
) : (
  <>
    <TableData data={paginatedData} />
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      setCurrentPage={setCurrentPage}
    />
  </>
)}
     </div>
    </>
  )
}

export default App
