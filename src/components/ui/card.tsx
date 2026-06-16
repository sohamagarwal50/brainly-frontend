import type { ReactElement } from "react"
interface cardProps {
    title : string,
    type : string,
    icon : ReactElement,
    link : string
}
export function Card(props : cardProps){
    return <div>
        <div className="p-4 bg-white rounded-md border-gray-200  max-w-82 border">
               <div className="flex justify-between pb-3">
                    <div className="flex items-center">
                    <div >
                        {props.icon}
                    </div>
                    <div className="pl-2 text-lg">
                        {props.title}
                    </div>
                    </div>
                    <div className="flex">
                        <div className="pr-2">
                            {props.icon}
                        </div>
                        {props.icon}
                    </div>
               </div>
                {props.type === "youtube" && <iframe className="w-full h-64 rounded-md" allowFullScreen src={props.link.replace("watch","embed").replace("?v=","/")}/>}
                {props.type === "twitter" && <blockquote className="twitter-tweet">
                    <a href = {props.link.replace("x.com","twitter.com")} />
                    </blockquote>}
        </div>
    </div>
}