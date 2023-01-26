
import Mydetails from "./Mydetails";
import { ModalReverse } from "./ModalFunc";

type Details = {
  title:string,
  data: string
  children: React.ReactElement | React.ReactElement[]
}


const Modal = ( props:Details ) => {

  const { title,data,children } = props
  const ModalClose = ModalReverse

  return(
    <div className={`${data} custom_modal`} onClick={()=>{ModalClose(data)}}>
      <div className="custom_modalInner">
        <Mydetails title={title}>
          {children}
        </Mydetails>
      </div>
    </div>
  )
}


export default Modal