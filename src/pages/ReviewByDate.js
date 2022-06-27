import React, { useState, useEffect } from "react";
import "./../css/ReviewByDate.css";
import axios from "axios";

import TableData from "../components/TableData";

const ReviewByDate = () => {
    const [data, setData] = useState([]);
    const [filterDate, setFilterDate] = useState("");
    const TODAYURL = `https://whispering-crag-31764.herokuapp.com/personnel/admin/getAll/${filterDate}`;

    useEffect(()=>{
        async function fetchData(){
            const res = await axios.get(TODAYURL);
            setData(res.data);
            return res;
        }
        fetchData();
    }, [filterDate, TODAYURL]);

    const handleOnchange = (event) => {
        const queryValue = event.target.value;
        setFilterDate(queryValue);
    }

    return(
        <div className="ReviewByDate">
            <h3>Visitor</h3>
            <h3>Enter Date: </h3>
            <p>Example: 24-06-2020</p>
            <input type="text" onChange={handleOnchange} />
            <table>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact #</th>
                    <th>Time in</th>
                    <th>Date in</th>
                </tr>
                {data.map((visitor, i)=>(
                    <TableData 
                        fullName={visitor.fullName}
                        address={visitor.address}
                        contact={visitor.contactNum}
                        timeIn={visitor.timeIn}
                        dateIn={visitor.dateIn}
                    />
                    )
                )}
            </table>
        </div>
    );
}

export default ReviewByDate;