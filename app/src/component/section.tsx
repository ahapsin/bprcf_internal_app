const Section = ({ children }: { children: React.ReactNode }) => {
    return <div className='w-full overflow-auto flex'>{children}</div>
}
const Side = ({ children }: { children: React.ReactNode }) => {
    return <div className='flex gap-2'>{children}</div>
}
const Block = ({ children }: { children: React.ReactNode }) => {
    return <div className='gap-2'>{children}</div>
}
const Head = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='px-4 py-6 text-2xl items-center flex place-content-between'>
            {children}
        </div>
    )
}
const Body = ({ children }: { children: React.ReactNode }) => {
    return <div className='p-4'>{children}</div>
}
const Group = ({ children }: { children: React.ReactNode }) => {
    return <div className='flex gap-2'>{children}</div>
}

Section.Head = Head
Section.Body = Body
Section.Group = Group
Section.Side = Side
Section.Block = Block

export default Section
