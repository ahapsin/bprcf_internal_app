import AddDivision from "./addDivision";

export const metadata = {
    title : 'Division',
    Description : 'Master Page Division'
}

async function getDivisions() {
    const res = await fetch('http://8a73085df21a.sn.mynetname.net:8080/api/division',{cache: "no-store",});
    return res.json();
}

type Division  = {
    ID: string;
    MASTER_NAME: string;
    UPPER_LEVEL: string;
    DESCRIPTION: string;
}
const DivisionList = async () => {
    const divisions : Division[] = await getDivisions();
    return ( 
    <div>
        <AddDivision/>
        <table className="table table-auto w-full">
            <thead>
                <tr className="bg-slate-50 p-4">
                    <td>ID</td>
                    <td>MASTER NAME</td>
                    <td>UPPER LEVEL</td>
                    <td>DESCRIPTION</td>
                </tr>
            </thead>
            <tbody>
            {divisions.map((division,index)=>(
           <tr key={index}>
            <td>{division.ID}</td>
            <td>{division.MASTER_NAME}</td>
            <td>{division.UPPER_LEVEL}</td>
            <td>{division.DESCRIPTION}</td>
           </tr>
        ))}
            </tbody>
        </table>
       
    </div>
    );
}
 
export default DivisionList;