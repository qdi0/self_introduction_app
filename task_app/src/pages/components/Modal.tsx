
import { ReactNode } from "react";
import Mydetails from "./Mydetails";

type Details = {
  title:string,
  children: React.ReactElement | React.ReactElement[]
}


const Modal = ( props:Details ) => {

  const { title,children } = props

  return(
    <div className="modal">
      <div className="modalInner">
        <Mydetails title={title}>
          {children}
        </Mydetails>
      </div>
    </div>
  )
}


export default Modal