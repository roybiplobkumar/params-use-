import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import PostData from "../post/PostData";


const Root = () => {
     const [data, setData]=useState([])

     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data=> setData(data))
     },[])

     console.log(data)

    return (
        <div>
          {data.map(d=>  <PostData key={d.id} user={d} ></PostData>)}
            
        </div>
    );
};

export default Root;