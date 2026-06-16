
import './App.css'
import {Button} from "./components/ui/Button"
import { Card } from './components/ui/card'
import { PlusIcon } from './icons/plus'
import { ShareIcon } from './icons/share'

function App() {

  return (
    <>
      <Button startIcon = {<PlusIcon size = "lg"/>} variant ="primary" size="sm" text={"button1"}/>
      <Button startIcon={<PlusIcon size="lg"/>} variant='secondary' size = "sm" text = {"button2"}/>
      <div className='flex justify-left'>
        <Card icon = {<ShareIcon size = "lg"/>} title={"youtube video"} type = {"youtube"} link = {"https://www.youtube.com/watch?v=uCjkRVV0-qU"}/>
        <Card icon = {<ShareIcon size = "lg"/>} title={"tweet"} type = {"twitter"} link = {"https://x.com/tushar9590/status/2065817298515202533?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet"}/>
      </div>
    </>
  )
}

export default App
