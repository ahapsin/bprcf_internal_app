import { IconBrandWhatsapp, IconSend } from "@tabler/icons-react"
import ButtonIcon from "../src/component/button"
import Section from "../src/component/section"
import SendoutList from "./listWaiting"

async function getStatusWa() {
    const res = await fetch("http://8a73085df21a.sn.mynetname.net:8090/auth", {
        cache: "no-store",
        next: { revalidate: 10 },
    })
    return res.json()
}

const Wa = async () => {
    const statusWa = await getStatusWa()
    return (
        <Section>
            <Section.Block>
                <Section.Head>
                    WhatsaApp Send Message
                    <pre className='text-xs'></pre>
                    <Section.Group>
                        {statusWa.auth === "whatsapp ready" && (
                            <ButtonIcon className='bg-green-200'>
                                <IconBrandWhatsapp /> Connected
                            </ButtonIcon>
                        )}
                        {statusWa.auth !== "whatsapp ready" && (
                            <a
                                href='http://8a73085df21a.sn.mynetname.net:8090/'
                                target='blank_'
                            >
                                <ButtonIcon className='bg-slate-200'>
                                    <IconBrandWhatsapp /> unConnected
                                </ButtonIcon>
                            </a>
                        )}
                        <ButtonIcon>
                            <IconSend /> blast
                        </ButtonIcon>
                    </Section.Group>
                </Section.Head>
                <Section.Body>
                    <SendoutList />
                </Section.Body>
            </Section.Block>
        </Section>
    )
}

export default Wa
