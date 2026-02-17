
import Tabledata from "./TableData"
import TableHeader from "./TableHeader"
import TableFooter from "./TableFooter"
export default function  Table({data,error,loading}){
    return(
<>
<TableHeader/>
<Tabledata  data={data} loading={loading} error={error}/>
<TableFooter/>
</>
    )
}