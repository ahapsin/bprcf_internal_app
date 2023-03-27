"use client"

import { IconEdit } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"

type Division = {
    ID: string
    MASTER_NAME: string
    UPPER_LEVEL: string
    DESCRIPTION: string
}

const UpdateDivision = (division: Division) => {
    const [masterName, setMasterName] = useState(division.MASTER_NAME)
    const [upperLevel, setUpperLevel] = useState(division.UPPER_LEVEL)
    const [description, setDescription] = useState(division.DESCRIPTION)
    const [modal, setModal] = useState(false)
    const [isMutating, setIsMutating] = useState(false)

    // router
    const router = useRouter()

    function handleChange() {
        setModal(!modal)
    }

    async function handleUpdate(e: SyntheticEvent) {
        e.preventDefault()
        setIsMutating(true)
        await fetch(
            `http://8a73085df21a.sn.mynetname.net:8080/api/division/${division.ID}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    master_name: masterName,
                    upper_level: upperLevel,
                    description: description,
                }),
            }
        )
        setIsMutating(false)

        router.refresh()
        setModal(false)
    }
    return (
        <>
            <button className='btn btn-sm' onClick={handleChange}>
                <IconEdit />
                Edit
            </button>
            <input
                type='checkbox'
                className='modal-toggle'
                checked={modal}
                onChange={handleChange}
            />
            <div className='modal'>
                <div className='modal-box p-0 lg:w-auto md:w-full sm:w-full max-w-screen-xl h-min-screen'>
                    <button
                        onClick={handleChange}
                        className='btn btn-xs btn-neutral btn-circle btn-outline absolute right-4 top-4'
                    >
                        ✕
                    </button>
                    <form onSubmit={handleUpdate}>
                        {" "}
                        <div className='p-4'>
                            <h3 className='font-bold text-lg'>
                                Edit {division.MASTER_NAME}
                            </h3>
                        </div>
                        <div className='container mx-auto p-4'>
                            <div className='grid-cols-1 md:grid-cols-auto lg:grid-cols-auto gap-4 md:flex sm:grid'>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text'>
                                            Nama Divisi
                                        </span>
                                    </label>
                                    <input
                                        type='text'
                                        value={masterName}
                                        className='input border-1 bg-slate-100 focus:boder-blue-500 font-bold input-sm'
                                        placeholder={"masukan nama divisi"}
                                        onChange={(e) =>
                                            setMasterName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text'>
                                            Upper Level
                                        </span>
                                    </label>
                                    <input
                                        type='text'
                                        value={upperLevel}
                                        className='input border-1 bg-slate-100 focus:boder-blue-500 font-bold input-sm'
                                        placeholder={"masukan nama divisi"}
                                        onChange={(e) =>
                                            setUpperLevel(e.target.value)
                                        }
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text'>
                                            Deskripsi
                                        </span>
                                    </label>
                                    <textarea
                                        placeholder='deskripsi'
                                        className='textarea textarea-bordered textarea-sm w-full max-w-xs'
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    >
                                        {description || null}
                                    </textarea>
                                </div>
                            </div>
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
                                        type='submit'
                                        className='btn btn-sm btn-primary'
                                    >
                                        Ubah
                                    </button>
                                ) : (
                                    <button
                                        type='submit'
                                        className='btn btn-sm loading'
                                    >
                                        Mengubah ...
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateDivision
