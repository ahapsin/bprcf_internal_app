const MenuItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='hover:bg-slate-300/10 gap-2 py-4 flex w-full text-slate-500 antialiased pl-7'>
            {children}
        </div>
    )
}

export default MenuItem
