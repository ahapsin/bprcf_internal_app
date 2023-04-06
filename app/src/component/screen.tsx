import React from "react"

const Screen = ({ children }: { children: React.ReactNode }) => {
    return <div className='min-h-screen'>{children}</div>
}

const Navbar = ({ children }: { children: React.ReactNode }) => {
    return <div className='max-h-[65px]'>{children}</div>
}
const Sidebar = ({ children }: { children: React.ReactNode }) => {
    return <div className='flex'>{children}</div>
}
const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex h-[calc(100vh-65px)] w-full text-slate-500 p-4'>
            {children}
        </div>
    )
}
const Flex = ({ children }: { children: React.ReactNode }) => {
    return <div className='flex'>{children}</div>
}

Screen.Navbar = Navbar
Screen.Sidebar = Sidebar
Screen.Flex = Flex
Screen.Content = Content
export default Screen
