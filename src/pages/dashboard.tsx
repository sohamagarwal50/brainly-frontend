
import { useEffect, useState } from 'react'
import {Button} from "../components/ui/Button"
import { Card } from '../components/ui/card'
import { CreateContentModal } from '../components/ui/createContentModal'
import { Sidebar } from '../components/ui/sidebar'
import { PlusIcon } from '../icons/plus'
import { ShareIcon } from '../icons/share'
import { useContent } from '../hooks/useContent'
export function Dashboard() {
  const [open,setOpen] = useState(false);
  const {contents, refresh} = useContent();
  useEffect(() =>{
    refresh();
  },[open]);
  return (
    <>
    <div>
      <div>
        <div className='flex justify-end'>
        <Button startIcon = {<PlusIcon size = "md"/>} variant ="primary" size="sm" text={"Add Content"} onClick={() => setOpen(true)}/>
        <Button startIcon={<ShareIcon size='md'/>} variant='secondary' size = "sm" text = {"Share Content"}/>
        </div>
      </div>
      <div className='flex justify-center pt-4'>
        <div className='flex'>
            {contents.map(({type,link,title}) => 
                <Card icon= {<ShareIcon size="lg"/>}  type = {type} link={link} title={title}/>
            )}
        </div>
          <Sidebar/>
        </div>
        <CreateContentModal open = {open} onClose={() => setOpen(false)}/>
    </div>
    </>
  )
}
