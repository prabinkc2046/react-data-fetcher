import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export default function DisplayData() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts"
  const fetchData = async () => {
    const response = await axios.get(url);
    const data = await response.data;
    setData(data);
  }
  useEffect(() => {
    fetchData();
  },[])
  return (
  
    <div>
        <button onClick={fetchData}>I fetch data when you click me</button>
        {data.map(data => (
        <div key={data.id}>
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">{data.title}</li>
            <li class="list-group-item">{data.body}</li>
          </ul>
        </div>
        ))}
    </div> 
  )
}
