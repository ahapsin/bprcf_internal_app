import {
    IconArchive,
    IconDatabase,
    IconFolder,
    IconLayoutDashboard,
} from "@tabler/icons-react"
import MenuItem from "./menuitem"

const Sidebar = () => {
    return (
        <div className='w-64 border-r'>
            <MenuItem>
                <IconLayoutDashboard /> Dashboard
            </MenuItem>
            <MenuItem>
                <IconFolder /> Master
            </MenuItem>
        </div>
    )
}

export default Sidebar
