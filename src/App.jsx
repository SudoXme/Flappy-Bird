import sky from "./assets/sky.png"
import ground from "./assets/ground.png"
import logo from "./assets/Flappy-Bird-PNG-HD-Image.png"
import pipe from "./assets/pipe.png"
import invertedPipe from "./assets/inverted pipe.png"
import bird from "./assets/bird.png"

export default function landingPage () {
{
    // So the first thing that is going to be done is the background image, that will me modified so that the background image will only have the image of a sky.
    // Now lets add the concept of pipes.
    // I will be needing pipes of different lengths.
    // The size of those pipes should be small
    // The concept behind pipes of different length will be I have to write code to include the pipes of different lengths.
  }
  return <div className="relative font-mono">
    <img src={sky} className="h-screen w-screen"/>
    <img src={ground} className="absolute bottom-0"/>
    <img src={logo} className="absolute top-20 left-130"/>
    <img src={pipe} className="absolute bottom-39 right-40" />
    <img src={invertedPipe} className="absolute top-0 left-40"/>
    <img src={bird} className="absolute top-60 right-170"/>
    <button className="absolute top-90 right-155 text-4xl text-[#F3FEA7] bg-[#9EEB59] border-red-500 rounded-sm font-extrabold cursor-pointer px-3 py-4 hover:bg-red-400">Start Game</button>
  </div>
}
