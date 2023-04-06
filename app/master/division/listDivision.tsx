import NoContent from "@/app/src/component/noContent"
import AddDivision from "./addDivision"
import DeleteDivision from "./deleteDivision"
import UpdateDivision from "./updateDivision"

async function getDivisions() {
    const res = await fetch(
        "http://8a73085df21a.sn.mynetname.net:8080/api/division",
        { cache: "no-store" }
    )
    return res.json()
}

type Division = {
    ID: string
    MASTER_NAME: string
    UPPER_LEVEL: string
    DESCRIPTION: string
}
const ListDivision = async () => {
    const divisions: Division[] = await getDivisions()
    return (
        <div className='w-full'>
            <AddDivision />
            {divisions.length > 0 ? (
                <table className='table table-auto w-full'>
                    <thead>
                        <tr className='bg-slate-50 p-4'>
                            <td>😸</td>
                            <td>ID</td>
                            <td>MASTER NAME</td>
                            <td>UPPER LEVEL</td>
                            <td>DESCRIPTION</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {divisions.map((division, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{division.ID}</td>
                                <td>{division.MASTER_NAME}</td>
                                <td>{division.UPPER_LEVEL}</td>
                                <td>{division.DESCRIPTION}</td>
                                <td>
                                    <DeleteDivision {...division} />
                                    <UpdateDivision {...division} />
                                    {/* <ButtonIcon>
                                    <IconEdit />
                                    Edit
                                </ButtonIcon> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <NoContent />
            )}
        </div>
    )
}

export default ListDivision
