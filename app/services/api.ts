import axios from "axios"

const api = axios.create({
    baseURL: "http://8a73085df21a.sn.mynetname.net:8080",
})

export const getDivision = async () => {
    try {
        const response = await api.get("/api/division")
        return response.data
    } catch (error) {
        console.error(error)
    }
}
