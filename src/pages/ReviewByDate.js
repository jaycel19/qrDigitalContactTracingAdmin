import React, { useState, useEffect } from "react";
import "./../css/ReviewByDate.css";
import axios from "axios";




const ReviewByDate = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [data, setData] = useState([])
    const TODAYURL = "https://whispering-crag-31764.herokuapp.com/personnel/admin/getAll/";

    useEffect(()=>{
        async function fetchData(){
            const res = await axios.get(TODAYURL);
            setData(res.data[0].visitors);
            console.log(res.data)
            return res;
        }
        fetchData();
    }, [TODAYURL]);

    return(
        <div className="ReviewByDate">
            <h3>Visitor</h3>
            <h3>Enter Date: </h3>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact #</th>
                    <th>Time</th>
                    <th>Month</th>
                    <th>Day</th>
                    <th>Year</th>
                </tr>
                <tr>
                    <td>Phonica Tayag</td>
                    <td>Olongapo</td>
                    <td>09263488299</td>
                    <td>07:05</td>
                    <td>3</td>
                    <td>24</td>
                    <td>2022</td>
                </tr>
            </table>
        </div>
    );
}

export default ReviewByDate;