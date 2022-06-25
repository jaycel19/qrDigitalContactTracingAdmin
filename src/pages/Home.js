import React, { useState, useEffect } from "react";
import "./../css/Home.css";
import axios from "axios";
import TableData from "./../components/TableData";

const Home = () => {
    const dateNow = new Date();
    const newDay = dateNow.getDay();
    const newMonth = dateNow.getMonth();
    const newYear = dateNow.getFullYear();
    const TODAYURL = "https://whispering-crag-31764.herokuapp.com/personnel/admin/getAll/";
    const [data, setData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const res = await axios.get(TODAYURL);
            setData(res.data);
            console.log(res.data)
            return res;
        }
        fetchData();
    }, []);


    return(
        <div className="Home">
            <h3>Visitor</h3>
            <h3>TODAY: {Date()}</h3>

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
                
                {data.map((visitor, i)=>(
                    <TableData 
                        fullName={visitor.fullName}
                        address={visitor.address}
                        contact={visitor.contact}
                        timeIn={visitor.timeIn}
                        month={newMonth}
                        day={newDay}
                        year={newYear}
                    />
                    )
                )}
            </table>
        </div>
    );
}

export default Home;