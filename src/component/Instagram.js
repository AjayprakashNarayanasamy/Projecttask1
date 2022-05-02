import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { initialValue } from "../redux/data"
import millify from "millify";
import link from "../redux/icons8-linkedin-48.png"

import "./List.css"
function Instagram() {
  console.log("1")

  const arr = ["MonthlyListeners","followers","TotalStreams","engagement_rate","comments","Likes"]

  console.log(link)

  
  const data = useSelector(state => state)


  
  console.log("data",data)
  let spotify=data[1]
  let val = Object.values(spotify)
  console.log(val)
  let val1 = Object.keys(spotify)

   
  
  let i=0;





  return (
    <>

      < div className='container d-flex justify-content-between size1 '>
    <img src={link} alt="chdxcha"/>
      {arr.map((item,i) => <div >
        {console.log(val[i])}
        <div className='size1'>
       {val[i]!==undefined && val1.includes(item) ? <h4>{(millify(val[i]))}</h4>:<><h4>0</h4></>}
         </div>
      
      <div className='text-center size'>{item}</div></div>)
      
      
      
      
      
      
      
      
      
      
      }


      </div>

    </>
  )
}

export default Instagram