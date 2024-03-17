import React, { useEffect, useState } from 'react'

function HOC(OrginalComponent,courseTitle , coursePrice) {
  function NewComponent() {
    const [title , setTitle] = useState(courseTitle)
    const [price , setPrice] = useState(coursePrice)

    const increacePriceBtn = (e) => {
      setPrice(prev => prev * 2)
      console.log(e.target);
    }
    useEffect(() => {
      console.log(price);

    },[price])

    return <OrginalComponent title={title} increacePriceBtn={increacePriceBtn} price={price} />;
  }
  return NewComponent;
}

export default HOC