import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { initialValue } from "../redux/data"
import millify from "millify";
import spotif from "../redux/icons8-spotify-48.png"

import "./List.css"
function Spotify() {
  console.log("1")

  const arr = ["MonthlyListeners", "followers", "comments","TotalStreams","popularityscore"]

  console.log(spotif)

  
  const data = useSelector(state => state)


  
  console.log("data",data)
  let spotify=data[0]
  let val = Object.values(spotify)
  console.log(val)
  let val1 = Object.keys(spotify)
  console.log(val1)
  

  





  return (
    <>

      < div className='container d-flex justify-content-between size1 mt-5'>
    <img src={spotif} alt="chdxcha"/>
      {arr.map((item,i) => <div >
        {console.log(val[i])}
        <div className='size1'>
       {val[i]!==undefined && val1.includes(item) ? <h4>
         {/* {console.log(val[i])} */}
         {(millify(val[i]))}
         </h4>:<><h4>0</h4></>}
         </div>
      
      <div className="size" >{item}</div></div>)
      
      
      
      
      
      
      
      
      
      
      }


      </div>

    </>
  )
}

export default Spotify