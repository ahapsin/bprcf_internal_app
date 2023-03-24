type InputProps = {
    label: string
    tipe: string
}

const Input = ({ label, tipe }: InputProps) => {
    return (
        <div className='form-control'>
            <label className='label'>
                <span className='label-text'>{label}</span>
            </label>
            <input
                type={`${tipe}`}
                className='input border-1 bg-slate-100 focus:boder-blue-500 font-bold input-sm'
            />
        </div>
    )
}

export default Input
