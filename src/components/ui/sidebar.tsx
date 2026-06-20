import {Logo} from "/Users/sohamagarwal/Desktop/Web Dev Cohort 3/cohort3/brainly-frontend/src/icons/Logo"
import { SidebarItem } from "./sidebaritem"
import { TwitterIcon } from "../../icons/twittericon"
import { YoutubeIcon } from "../../icons/youtubeIcon"
export function Sidebar() {
    return <div className="h-screen bg-white border-r w-40 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-red-600">
                <Logo size="lg"/>
            </div>
            Brainly
        </div>
        <div className="pt-8 pr-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon size = "lg"/>} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon size="lg"/>} />
        </div>
    </div>
}