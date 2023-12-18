import axios from 'axios'
import '../photos/photo.css'


import React, { useEffect, useState } from 'react'

const Photos = () => {
    const [photo, setPhoto] = useState()

  useEffect(()=>{
    let data = async () => {
        let response = await axios.get("https://jsonplaceholder.typicode.com/photos")
        setPhoto(response.data)
    }
    data()
  },[])

   console.log(photo);
  return (
    <>
    <div className="container">
        <div className="photos">
         {photo && photo.length > 0
         ?
            photo.map((item,index)=>(
                <div key={index} className="phitem">
                <div className="pp">
                  <img src={item.thumbnailUrl} alt="not found" />
                </div>
                <div className="tt">
                  <p>Title : {item.title} </p>
                </div>
              </div>
            ))
            :
            <h1>Loding......</h1>
         }
        </div>
    </div>
    
    </>
  )
}

export default Photos