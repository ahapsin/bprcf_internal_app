import { menuSide } from "@/app/store"
import {
    IconLayoutSidebarLeftCollapse,
    IconLayoutSidebarRightCollapse,
} from "@tabler/icons-react"
import { useRecoilState } from "recoil"
import ButtonIcon from "./button"

const Navbar = () => {
    const [vmenu, setVmenu] = useRecoilState(menuSide)
    const handleClick = () => {
        vmenu ? setVmenu(false) : setVmenu(true)
    }
    return (
        <div className='navbar bg-base-100 shadow-md px-4'>
            <div className='flex-1'>
                <ButtonIcon handleClick={handleClick}>
                    {vmenu ? (
                        <IconLayoutSidebarLeftCollapse className='text-slate-600/50' />
                    ) : (
                        <IconLayoutSidebarRightCollapse className='text-slate-600/50' />
                    )}
                </ButtonIcon>
                {/* company brand */}
            </div>
            <div className='flex-none'>
                <div className='dropdown dropdown-end'>
                    <label
                        tabIndex={0}
                        className='btn btn-ghost btn-circle avatar'
                    >
                        <div className='w-10 rounded-full'>
                            <img src='https://t3.ftcdn.net/jpg/05/77/38/04/360_F_577380441_Ha6PRweRTLm4rPhKjAO91KdfQBUtXNtM.jpg' />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className='menu menu-compact dropdown-content mt-3 p-2 bg-base-100 border rounded-box'
                    >
                        <li>
                            <a className='justify-between'>
                                Profile
                                <span className='badge'>New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
