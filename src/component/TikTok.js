import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { initialValue } from "../redux/data"
import millify from "millify";
import youtube from "../redux/icons8-tiktok-48 (1).png"

import "./List.css"
function TikTok() {
  console.log("1")

  const arr = ["popularityscore", "followers","views", " TotalStreams","engagement_rate", ]

  console.log(youtube)

  
  const data = useSelector(state => state)


  
  console.log("data",data)
  let spotify=data[2]
  let val = Object.values(spotify)
  console.log(val)
  let val1 = Object.keys(spotify)

  let i=0;





  return (
    <>

      < div className='container d-flex size1 justify-content-between'>
    <img src={youtube} alt="chdxcha"/>
      {arr.map((item,i) => <div >
        {console.log(val[i])}
        <div className='size1'>
       {val[i]!==undefined &&  val1.includes(item)? <h4>{(millify(val[i]))}</h4>:<><h4>0</h4></>}
         </div>
      
      <div className='size'>{item}</div></div>)
      
      
      
      
      
      
      
      
      
      
      }


      </div>

    </>
  )
}

export default TikTok