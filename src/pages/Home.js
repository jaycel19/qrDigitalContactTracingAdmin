import React, { useState, useEffect } from "react";
import "./../css/Home.css";
import axios from "axios";
import TableData from "./../components/TableData";

const Home = () => {
    const dateNow = new Date();
    const newDay = dateNow.getDate();
    const newMonth = dateNow.getMonth()+1;
    const newYear = dateNow.getFullYear();
    const TODAYURL = `https://whispering-crag-31764.herokuapp.com/personnel/admin/getAll/${newDay}-${newMonth}-${newYear}`;
    const [data, setData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const res = await axios.get(TODAYURL);
            setData(res.data);
            console.log(res.data)
            return res;
        }
        fetchData();
    }, [TODAYURL]);


    return(
        <div className="Home">
            <h3>Visitor</h3>
            <h3>TODAY: {`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`}</h3>

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

export default Home;