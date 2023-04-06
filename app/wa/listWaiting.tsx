async function getSendOut() {
    const res = await fetch(
        "http://8a73085df21a.sn.mynetname.net:8080/api/send_out",
        { cache: "no-store" }
    )
    return res.json()
}

type SendOut = {
    ID: string
    PHONE: string
    MESSAGE: string
    STATUS: string
}
const SendoutList = async () => {
    const sendout: SendOut[] = await getSendOut()
    return (
        <div>
            <table className='table table-auto w-full'>
                <thead>
                    <tr className='bg-slate-50 p-4'>
                        <td>📱 number</td>
                        <td>message</td>
                        <td>status</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {sendout.map((sendout, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{sendout.PHONE}</td>
                            <td>{sendout.MESSAGE}</td>
                            <td>{sendout.STATUS}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SendoutList
