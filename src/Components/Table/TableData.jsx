export default function Tabledata({data,error,loading}){

    // console.log(data)

    return(
        <>
        <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Health</th>
      <th>Location</th>
      <th>Recorder</th>
      <th>Tasks</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
        {/* {data.map((ele,idx)=>( */}

    <tr>
            <>
      <td > <span><input type="checkbox" /></span> Camera</td>
     <td>nikhil@gmail.com</td>
      <td>Frontend Developer</td>
      <td>Frontend Developer</td>
      <td>Frontend Developer</td>
      <td>Frontend Developer</td>
      <td>Frontend Developer</td>
            </>
 
    </tr>
        {/* ))} */}

  </tbody>
</table>

        </>
    )

}