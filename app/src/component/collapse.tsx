import {
    IconAxisX,
    IconBolt,
    IconSquareRoundedPlusFilled,
} from "@tabler/icons-react"

const CollapseMenu = () => {
    return (
        <div className='collapse'>
            <input type='checkbox' />
            <div className='collapse-title flex place-content-between items-center pr-2'>
                <div className='flex gap-2'>
                    <IconBolt /> content
                </div>
                <div>
                    <IconSquareRoundedPlusFilled size={16} />
                </div>
            </div>
            <div className='collapse-content pl-10'>
                <div className='flex gap-2'>
                    <IconAxisX size={15} className='text-slate-600' />
                    <p>hello</p>
                </div>
                <div className='flex gap-2'>
                    <IconAxisX size={15} className='text-slate-600' />
                    <p>hello</p>
                </div>
            </div>
        </div>
    )
}

export default CollapseMenu
