const MenuItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='[&>svg]:fill-slate-100 hover:bg-slate-300/10 gap-2 py-4 flex w-full text-slate-500 antialiased px-6 text-sm'>
            {children}
        </div>
    )
}

export default MenuItem
