"use client"
import React from "react"
import Screen from "../src/templates/screen"
import Navbar from "../src/component/navbar"
import Sidebar from "../src/component/sidebar"
import { RecoilRoot } from "recoil"

const layout = ({ children }: { children: React.ReactNode }) => {
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

export default layout
