"use client"
import React from "react"
import { RecoilRoot } from "recoil"
import Screen from "../component/screen"
import Navbar from "../component/navbar"
import Sidebar from "../component/sidebar"

const MainPanel = ({ children }: { children: React.ReactNode }) => {
    return (
        <RecoilRoot>
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
        </RecoilRoot>
    )
}

export default MainPanel
