import { gsap } from 'gsap'

type tagerName = string

const test = (target:string,afterCss:{}) => {
  const teen = gsap.to(target,afterCss)

  return teen
}


export const ModalPlay = ( props: tagerName ) =>{

  const target = `.${props}`

  const afterCss = {
    opacity: 1,
    width: "100vw"
  }

  test(target,afterCss).play()
}


export const ModalReverse = (props: tagerName) =>{
  const target = `.${props}`

  const afterCss = {
    opacity: 0,
    width: 0
  }

  test(target,afterCss).play()
}

