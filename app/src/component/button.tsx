import React from "react"

interface Props {
    className?: string
    children: React.ReactNode
}

const ButtonIcon = ({ children, className }: Props) => {
    return (
        <button
            className={`${className} font font-semibold btn-sm text-slate-300 hover:text-slate-500 gap-2`}
        >
            {children}
        </button>
    )
}

export default ButtonIcon
