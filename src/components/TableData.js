import React from "react";

const TableData = (props) =>{
    return(
        <tr>
            <td>{props.fullName}</td>
            <td>{props.address}</td>
            <td>{props.contact}</td>
            <td>{props.timeIn}</td>
            <td>{props.month}</td>
            <td>{props.day}</td>
            <td>{props.year}</td>
        </tr>
    );
}

export default TableData;