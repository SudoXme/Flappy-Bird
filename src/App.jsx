import background from "./assets/Flappy_Bird_Background.png"

export default function landingPage () {
  return <div>
    {
    // I will be creating a new image for the background of the landing page.
    // This image will be going to be stored in public folder in the root directory.
    // I can also push this branch to the github.
    // For pushing the branch the command is git push --set-upstream origin feature/landing-page. 
    // This command will create a new branch on the remote server.
    }
    <img src={background} className="h-screen w-screen"/>
  </div>
}
