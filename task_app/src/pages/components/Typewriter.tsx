import Typewriter from "typewriter-effect";


const TypewriterCompornent = () => {


  return(
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <Typewriter
    onInit={(typewriter) => {
      typewriter
        .pauseFor(500)
        .typeString("<strong style='color: rgb(100,100,255);'>hello</strong> I'm Aoyagi Shinya ")
        .pauseFor(500)
        .typeString('<br>')
        .pauseFor(1000)
        .typeString('The page, About my self introductions')
        .pauseFor(700)
        .typeString('<br>')
        .pauseFor(700)
        .typeString("Please let down the page")
        .pauseFor(400)
        .deleteChars(17)
        .typeString("Scroll down ")
        .pauseFor(500)
        .typeString("and you'll see information about me ")
        .pauseFor(1000)
        .changeDelay(75)
        .typeString(":)")
        .start();
    }}
    options={{
      delay: 50,
      deleteSpeed: 25
    }}
    />
    </div>
  )
}

export default TypewriterCompornent;