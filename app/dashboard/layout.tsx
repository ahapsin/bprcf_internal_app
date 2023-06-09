import React from "react"
import Navbar from "../src/component/navbar"

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
