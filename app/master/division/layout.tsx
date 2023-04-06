"use client"

import MainPanel from "@/app/src/templates/mainPanel"

export default function layout({ children }: { children: React.ReactNode }) {
    return <MainPanel>{children}</MainPanel>
}
