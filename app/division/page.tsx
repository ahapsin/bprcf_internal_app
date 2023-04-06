import { IconDevices, IconFilter, IconPlus } from "@tabler/icons-react"
import Section from "../src/component/section"
import ButtonIcon from "../src/component/button"

const Division = () => {
    return (
        <Section>
            <Section.Block>
                <Section.Head>
                    head
                    <Section.Group>
                        <ButtonIcon className='bg-slate-50'>
                            <IconFilter /> Device Conected
                        </ButtonIcon>
                        <ButtonIcon className='bg-green-200'>
                            <IconDevices /> Device Conected
                        </ButtonIcon>
                        <ButtonIcon className='text-blue-500'>
                            <IconPlus /> Tambah data
                        </ButtonIcon>
                    </Section.Group>
                </Section.Head>
                <Section.Body>asdas</Section.Body>
            </Section.Block>
        </Section>
    )
}

export default Division
