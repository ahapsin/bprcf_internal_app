"use client"

import { IconMinus, IconTrashFilled, IconX } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

type Division = {
    ID: string
    MASTER_NAME: string
    UPPER_LEVEL: string
    DESCRIPTION: string
}

const DeleteDivision = (division: Division) => {
    const [modal, setModal] = useState(false)
    const [isMutating, setIsMutating] = useState(false)

    // router
    const router = useRouter()

    function handleChange() {
        setModal(!modal)
    }

    async function handleDelete(divisionID: string) {
        setIsMutating(true)
        await fetch(
            `http://8a73085df21a.sn.mynetname.net:8080/api/division/${divisionID}`,
            {
                method: "DELETE",
            }
        )
        setIsMutating(false)

        router.refresh()
        setModal(false)
    }
    return (
        <>
            <button
                className='btn btn-sm btn-ghost btn-circle'
                onClick={handleChange}
            >
                <IconX />
            </button>
            <input
                type='checkbox'
                className='modal-toggle'
                checked={modal}
                onChange={handleChange}
            />
            <div className='modal'>
                <div className='modal-box p-0'>
                    <button
                        onClick={handleChange}
                        className='btn btn-xs btn-neutral btn-circle btn-outline absolute right-4 top-4'
                    >
                        ✕
                    </button>
                    <div className='p-4'>
                        <h3 className='font-bold text-lg'>
                            Are you sure to delete {division.MASTER_NAME} ?
                        </h3>
                    </div>
                    <div className='container mx-auto p-4'>
                        <div className='grid-cols-1 md:grid-cols-auto lg:grid-cols-auto gap-4 md:flex sm:grid'></div>
                    </div>
                    <div className='modal-action bg-slate-50'>
                        <div className='p-4 gap-2 flex'>
                            <button
                                type='button'
                                className='btn btn-sm btn-secondary'
                                onClick={handleChange}
                            >
                                batal
                            </button>
                            {!isMutating ? (
                                <button
                                    type='button'
                                    onClick={() => handleDelete(division.ID)}
                                    className='btn btn-sm btn-primary'
                                >
                                    Hapus
                                </button>
                            ) : (
                                <button
                                    type='submit'
                                    className='btn btn-sm loading'
                                >
                                    Menghapus ...
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteDivision
