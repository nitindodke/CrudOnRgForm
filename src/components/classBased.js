import React from "react";
import "../styles/functional.css";

class ClassBased extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }
    }
    render() {
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
                            {this.state.user.map((item, index) => (
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
    };
};
export default ClassBased;