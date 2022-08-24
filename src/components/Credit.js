import React, {useEffect, useState} from "react";
import '../App.css';
import './Credit.css';

import axios from "axios";

function Credit() {
    const [datas, setDatas] = useState([{
        title: 'fdasf',
        content: 'sfds'
    }])

    useEffect(() => {
        axios.get("/datas").then(response => {
            setDatas(response.data);
            console.log("notes datas: " + datas[0].title);
        });
    })
    

    return (
        <div className="credit-container">
            <div className="credit-center-container">
                Designed &amp; Created by Jared Ni
                {console.log("data array: " + datas)}
                {datas[0].content}
                {datas.map(data => 
                    <div>
                        <h1>asdfsadf</h1>
                        <p>{data.content}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Credit