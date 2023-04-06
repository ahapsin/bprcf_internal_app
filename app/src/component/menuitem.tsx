type Props = {
    tooltip?: string | null
    children: React.ReactNode
}
const MenuItem = ({ children, tooltip }: Props) => {
    return (
        <div
            className='tooltip tooltip-bottom [&>svg]:fill-slate-100 hover:bg-slate-300/10 gap-2 py-4 flex w-full text-slate-500 antialiased px-6 text-sm'
            data-tip={tooltip}
        >
            {children}
        </div>
    )
}

export default MenuItem
