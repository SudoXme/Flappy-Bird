import sky from "./assets/sky.png"
import ground from "./assets/ground.png"
import logo from "./assets/Flappy-Bird-PNG-HD-Image.png"
import pipe from "./assets/pipe.png"
import invertedPipe from "./assets/inverted pipe.png"
import bird from "./assets/bird.png"

export default function landingPage () {
{
    // Now lets add the concept of pipes.
    // I will be needing pipes of different lengths.
    // The size of those pipes should be small
    // The concept behind pipes of different length will be I have to write code to include the pipes of different lengths.
    // The next step is going to be the usage of pixel family
    // I have to write a script.js file for the usage of pixelated fonts
    // I will export the fonts from that script and import in this page
  }
  return <div className="relative font-jersey">
    <img src={sky} className="h-screen w-screen"/>
    <img src={ground} className="absolute bottom-0"/>
    <img src={logo} className="absolute top-20 left-130"/>
    <img src={pipe} className="absolute bottom-39 right-40" />
    <img src={invertedPipe} className="absolute top-0 left-40"/>
    <img src={bird} className="absolute top-60 right-170"/>
    <button className="absolute top-90 right-140 text-6xl text-[#2F3B16] bg-[#9EEB59] outline-solid outline-black outline-4 rounded-sm font-extrabold cursor-pointer px-3 py-4 hover:bg-red-400 shadow-lg ">START GAME</button>
  </div>
}
