import type { ReactElement } from "react";

export interface ButtonInterface{
    variant : "primary" | "secondary",
    text : string,
    size : "sm" | "md" | "lg",
    startIcon : ReactElement,
    onClick : () => void;
}
const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl",
    "md": "px-4 py-2 text-md rounded-md",
    "sm": "px-2 py-1 text-sm rounded-sm",
}
const variantStyle = {
    "primary" : "bg-violet-500 text-gray-50",
    "secondary" : "bg-orange-400 text-gray-50"
}
export function Button(props: ButtonInterface) {
    return <button className={`${sizeStyles[props.size]} ${variantStyle[props.variant]}`}>
        <div className="flex items-center">
            <span className="text-xs">
                {props.startIcon}
            </span>
            <div className="pl-2 pr-2">
                {props.text}
            </div>
        </div>
    </button>
}