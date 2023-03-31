import React from "react"

interface Props {
    className?: string
    children: React.ReactNode
}

const ButtonIcon = ({ children, className }: Props) => {
    return (
        <button
            className={`${className} p-2 rounded-lg font font-semibold btn-sm text-slate-600 hover:text-slate-500 gap-2 flex items-center`}
        >
            {children}
        </button>
    )
}

export default ButtonIcon
