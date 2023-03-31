import { IconLayoutSidebarLeftCollapse } from "@tabler/icons-react"
import ButtonIcon from "./button"
import { useRecoilValue } from "recoil"
import { authUser } from "@/app/store"

const Navbar = () => {
    const user = useRecoilValue(authUser)
    console.log(user)
    return (
        <div className='navbar bg-base-100 shadow-md px-4'>
            <div className='flex-1'>
                <ButtonIcon>
                    <IconLayoutSidebarLeftCollapse /> {user}
                </ButtonIcon>
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
