
import {ModalPlay} from "./ModalFunc"

type ButtonData = {
  data: string,
  title: string
}

const ToggleButton = ( props: ButtonData ) =>{

  const { data,title } = props
  const baseclass = "custom_button"
  const modalPlay = ModalPlay

  return(
    <div className={`${baseclass} h-20`} data-class={`.${data}`} onClick={(e)=>{modalPlay(data)}}>
      <p className='text-4xl'>{title}</p>
    </div>
  )
}

export default ToggleButton