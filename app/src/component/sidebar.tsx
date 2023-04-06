import { menuSide } from "@/app/store"
import { IconFolder, IconLayoutDashboard } from "@tabler/icons-react"
import { useRecoilValue } from "recoil"
import MenuItem from "./menuitem"

const Sidebar = () => {
    const label = useRecoilValue(menuSide)
    return (
        <div className={` border-r `}>
            <MenuItem tooltip={!label ? "dashboard" : null}>
                <IconLayoutDashboard /> {label ? "Dashboard" : ""}
            </MenuItem>
            <MenuItem tooltip={!label ? "master" : null}>
                <IconFolder /> {label ? "master" : ""}
            </MenuItem>
        </div>
    )
}

export default Sidebar
