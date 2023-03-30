import {
    IconAxisX,
    IconBolt,
    IconCircleChevronDown,
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
            <div className='collapse-content flex gap-2 pl-12'>
                <IconAxisX size={12} className='text-slate-200' />
                <p>hello</p>
            </div>
        </div>
    )
}

export default CollapseMenu
