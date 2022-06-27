import React from "react";

const TableData = (props) =>{
    return(
        <tr>
            <td>{props.fullName}</td>
            <td>{props.address}</td>
            <td>{props.contact}</td>
            <td>{props.timeIn}</td>
            <td>{props.dateIn}</td>
        </tr>
    );
}

export default TableData;