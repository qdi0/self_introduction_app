

import React from "react";

type Content = {
  title : string,
  content? : {
    test: string,
  },
  children: React.ReactElement |React.ReactElement[]
}

const Mydetails = (props: Content) =>{
  const content = props.content
  return(
    <>
      <div className='detail' onClick={()=>{ console.log("success")}}>
        <h2 className='font-bold text-3xl'>{props.title}</h2>
        <p>{content? content.test:""}</p>
        <div className="detailInner">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Mydetails;