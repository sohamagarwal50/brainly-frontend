import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import axios from "axios";
enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

// controlled component
export function CreateContentModal({open, onClose}) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`http://localhost:3000/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose();

    }

    return <div >
        {open && <div> 
            <div className="w-screen h-screen fixed top-0 left-0 bg-gray-500 opacity-80">

            </div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="bg-white opacity-100 p-2 rounded fixed">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer pb-2">
                                <CrossIcon size="lg" />
                            </div>
                        </div>
                        <div className="flex">
                            <input className="border border-gray-300 rounded" ref={titleRef} placeholder={"Title"} />
                            <div className="px-2"/>
                            <input className="border border-gray-300 rounded" ref={linkRef} placeholder={"Link"} />
                        </div>
                        <div className="flex justify-center pt-4">
                            <h1 className="pr-4">Type</h1>
                            <div className="flex gap-1 pb-2 pr-8">
                                <Button text="Youtube" variant="you" onClick={() => {
                                    setType(ContentType.Youtube)
                                }}></Button>
                                <Button text="Twitter" variant="twit" onClick={() => {
                                    setType(ContentType.Twitter)
                                }}></Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={addContent} variant="primary" text="Submit" />
                        </div>
                    </div>
                </div>     
            </div>
            
        </div>}
    </div>

}