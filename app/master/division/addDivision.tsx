"use client"

import Input from "@/app/src/component/input"
import { IconPlus } from "@tabler/icons-react"

const AddDivision = () => {
    return (
        <>
            <label htmlFor='modalInit' className='btn btn-sm'>
                open modal
            </label>

            <input type='checkbox' id='modalInit' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box p-0 lg:w-auto md:w-full sm:w-full max-w-screen-xl'>
                    <label
                        htmlFor='modalInit'
                        className='btn btn-sm btn-error btn-circle absolute right-2 top-2'
                    >
                        ✕
                    </label>
                    <div className='p-4'>
                        <h3 className='font-bold text-lg'>Head</h3>
                    </div>
                    <div className='container mx-auto p-4'>
                        <form>
                            <div className='grid-cols-1 md:grid-cols-auto lg:grid-cols-auto gap-4 md:flex sm:grid'>
                                <Input label='Nama Divisi' tipe='text' />
                                <Input label='Upper Level' tipe='text' />
                                <Input label='Description' tipe='text' />
                            </div>
                        </form>
                    </div>
                    <div className='modal-action bg-slate-50'>
                        <div className='p-4'>
                            <label
                                htmlFor='modalInit'
                                className='btn btn-sm btn-primary'
                            >
                                Yay!
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddDivision
