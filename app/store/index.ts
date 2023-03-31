import axios from "axios"
import { atom, selector } from "recoil"

const authUser = atom({
    key: "authh",
    default: "navbar",
})

const menuSide = atom({
    key: "collapse-menu",
    default: false,
})

export { authUser }
