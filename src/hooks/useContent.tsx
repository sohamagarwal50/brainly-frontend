import { useState, useEffect } from "react";
import axios from "axios";
export function useContent(){
    const [contents, setContent] = useState([]);
    function refresh(){
        axios.get("http://localhost:3000/api/v1/content",{
            headers : {
                "Authorization" : localStorage.getItem("token")
            }
        }).then((response) => {setContent(response.data.content)})
    }
    useEffect(() => {
        refresh()
        let interval = setInterval(() => {
            refresh();
        },10*1000);
        return () => {
            clearInterval(interval);
        }
    },[])
    return {contents,refresh};
}