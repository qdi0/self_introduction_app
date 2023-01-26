
import {ModalPlay} from "./ModalFunc"

type ButtonData = {
  data: string,
  label: string
}

const ToggleButton = ( props: ButtonData ) =>{

  const { data,label } = props
  const baseclass = "custom_button"
  const toggleAnimation = ModalPlay

  return(
    <div className={`${baseclass}`} data-class={`.${data}`} onClick={(e)=>{toggleAnimation(data)}}>
      <p className='text-4xl'>{label}</p>
    </div>
  )
}

export default ToggleButton