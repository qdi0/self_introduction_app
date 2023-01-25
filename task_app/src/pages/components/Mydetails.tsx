import React, { Children } from "react";

type Content = {
  title : string,
  children: React.ReactElement | React.ReactElement[]
}

const Mydetails = (props: Content) =>{

  const {title,children} = props

  return(
      <div className='detail flex justify-center items-center'>
        <div className="detailWrapper">
          <h2 className='font-bold text-6xl mb-5'>{ title }</h2>
          <div className="detailInner text-2xl text-left">
            { children }
          </div>
        </div>
      </div>
  )
}

export default Mydetails;