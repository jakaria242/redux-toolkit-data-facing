import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../features/add/addSlice'


const Product = ({sorce, pricee}) => {

  

  const data = useSelector((state) => state.add);
  const dispatch = useDispatch();
  console.log(data.price);

// let handleAdd = () =>{
//   console.log(dispatch(add(pricee)));

// }




  return (
    <div className="product_item">
    <div className="pr_img">
      <img src={sorce} alt="not found" />
    </div>
    <div className="pr_txt">
      <p>Price : {pricee}</p>
    </div>
    <div className="pr_btn" onClick={()=>{dispatch(add(pricee))}}>
      <Link>Add To Card</Link>
    </div>
  </div>
  )
}

export default Product