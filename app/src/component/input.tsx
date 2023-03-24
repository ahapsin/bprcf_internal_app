type InputProps = {
    label: string
    tipe: string
    placeholder?: string
}

const Input = ({ label, tipe, placeholder }: InputProps) => {
    return (
        <div className='form-control'>
            <label className='label'>
                <span className='label-text'>{label}</span>
            </label>
            <input
                type={`${tipe}`}
                className='input border-1 bg-slate-100 focus:boder-blue-500 font-bold input-sm'
                placeholder={`${placeholder ? placeholder : label}`}
            />
        </div>
    )
}

export default Input
