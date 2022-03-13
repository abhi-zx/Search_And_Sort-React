import React,{useState} from 'react'
import MockData from './MOCK_DATA (6).json'

const SeacrchFilter = () => {
    const [search,setSearch] = useState('')
    const [data,setData]=useState(MockData)
  return (
    <div className="container">
        <input type="text" className="form-control" placeholder="Search..." style={{marginTop:50, marginBottom:20,width:"40%"}}
        onChange={(e) =>setSearch(e.target.value)}/>
<table className="table table-bordered">
    <thead>
        <th >First Name</th>
        <th >Last Name</th>
        <th >Email</th>
        <th >Gender</th>
    </thead>
    <tbody>
        {data.filter((val)=>{
            if(search===""){
                return val;
            }else if(val.first_name.toLowerCase().includes(search.toLowerCase())||
            val.last_name.toLowerCase().includes(search.toLowerCase())||
            val.email.toLowerCase().includes(search.toLowerCase())
            ){
                return val
            }
        }).map((d)=>(
            <tr key={d.id}>
                <td>{d.first_name}</td>
                <td>{d.last_name}</td>
                <td>{d.email}</td>
                <td>{d.gender}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>
  )
}

export default SeacrchFilter