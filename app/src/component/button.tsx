import React from "react";

interface Props{
    className?: string
    children: React.ReactNode
}

const ButtonIcon = ({children, className}:Props) => {
    return ( <button className={`${className} [&>svg]:w-4 font font-semibold btn btn-sm gap-2 mx-1`}>{children}</button> );
}

export default ButtonIcon;
