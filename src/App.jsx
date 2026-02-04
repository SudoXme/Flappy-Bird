import sky from "./assets/sky.png"
import ground from "./assets/ground.png"
import logo from "./assets/Flappy-Bird-PNG-HD-Image.png"
import pipe from "./assets/pipe.png"
import invertedPipe from "./assets/inverted pipe.png"
import bird from "./assets/bird.png"

export default function landingPage () {
  return <div className="relative font-jersey">
    <img src={sky} className="h-screen w-screen"/>
    <img src={ground} className="absolute bottom-0"/>
    <img src={logo} className="absolute top-20 left-130"/>
    <img src={pipe} className="absolute bottom-39 right-40" />
    <img src={invertedPipe} className="absolute top-0 left-40"/>
    <img src={bird} className="absolute top-60 right-170"/>
    <button className="absolute top-90 right-150 text-6xl text-[#2F3B16] bg-[#B2F07A] outline-solid outline-black outline-4 font-extrabold cursor-pointer px-3 py-4 hover:bg-[#9EEB59] active:bg-[#B2F07A] pt-2 pb-2">START GAME</button>
  </div>
}
