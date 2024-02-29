import { useState, useEffect } from "react";
import axios from "axios";



export const Home = () =>{
  const [message, setMessage] = useState([]);

  useEffect(()=>{
    // if (localStorage.getItem('access_token')===null){
    //   window.location.href = '/login'
    // } else {
      (async ()=> {
        try{
          const {data} = await axios.get(
            'http://127.0.0.1:8000/items/', 
            {headers:{
              'Content-Type' : 'application/json',
            }
          })
          console.log(">>>>>>>>", data);
          setMessage(data)
        } catch (e){
          console.log('not items');
        }
      }) ()
    // }
  }, []);
  return (
  <div>
    {message.map((item)=><li key={item.id}>{item.name}</li> )}
  </div>
  )
}