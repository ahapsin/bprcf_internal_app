import React from "react"

interface Props {
    className?: string
    children: React.ReactNode
    handleClick?: () => void
}

const ButtonIcon = (props: Props) => {
    return (
        <button
            onClick={props.handleClick}
            className={`${props.className} p-2 rounded-lg font font-semibold btn-sm text-slate-600 hover:text-slate-500 gap-2 flex items-center`}
        >
            {props.children}
        </button>
    )
}

export default ButtonIcon
