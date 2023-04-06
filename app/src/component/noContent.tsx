import { IconMoodEmpty } from "@tabler/icons-react"

const NoContent = () => {
    return (
        <div className='w-full items-center place-content-center flex gap-2 text-sm'>
            <IconMoodEmpty /> no data available
        </div>
    )
}

export default NoContent
