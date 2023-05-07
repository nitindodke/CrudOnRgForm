import React, { useState } from "react";
import "../styles/functional.css";

const Functional = ({ user }) => {
    const [data, setData] = useState(user);
    return (
        <>
            <h3>User Table</h3>
            <div className="container">
                <table className="table stripped text-left" style={{ background: "blue", color: "white" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

// const Functional = ({ userData }) => {
//     return (
//         <>
// <h3>User Table</h3>
// <div className="container">
//     <table className="table stripped text-left" style={{ background: "blue", color: "white" }}>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Gender</th>
//                 <th>ID</th>
//             </tr>
//         </thead>
//         <tbody>
//             {userData.map((item, index) => (
//                 <tr key={index}>
//                     <td>{item.name}</td>
//                     <td>{item.gender}</td>
//                     <td>{item.age}</td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
// </div>
//         </>
//     );
// };
export default Functional;