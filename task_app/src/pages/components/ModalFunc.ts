import { gsap } from 'gsap'

type tagerName = string

// initalize teen
const test = (target:string,afterCss:{}) => {
  const teen = gsap.to(target,afterCss)
  return teen
}

// ------------
// this func is open a modal window
// ------------
export const ModalPlay = ( props: tagerName ) =>{

  const target = `.${props}`

  const afterCss = {
    opacity: 1,
    width: "100vw"
  }

  test(target,afterCss).play()
}


// ------------
// this func is close a modal window
// ------------
export const ModalReverse = (props: tagerName) =>{
  const target = `.${props}`

  const afterCss = {
    opacity: 0,
    width: 0
  }

  test(target,afterCss).play()
}

