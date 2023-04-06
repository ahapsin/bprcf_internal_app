import MainPanel from "@/app/src/templates/mainPanel"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <MainPanel>{children}</MainPanel>
        </>
    )
}

export default layout
