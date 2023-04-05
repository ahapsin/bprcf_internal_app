import React from "react"
import Screen from "../src/component/screen"
import Navbar from "../src/component/navbar"
import Sidebar from "../src/component/sidebar"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Screen>
            <Screen.Navbar>
                <Navbar />
            </Screen.Navbar>
            <Screen.Flex>
                <Screen.Sidebar>
                    <Sidebar />
                </Screen.Sidebar>
                <Screen.Content>{children}</Screen.Content>
            </Screen.Flex>
        </Screen>
    )
}

export default layout
