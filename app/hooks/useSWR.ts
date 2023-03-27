import useSWR from "swr"
import * as api from "../services/api"

export const useFetch = () => {
    GetDivision: () =>
        useSWR("allDivision", async () => {
            const response = await api.getDivision()
            console.log("SWR RESPONSE", response)
            return response
        })
}
