import React, {useEffect, useState} from "react";
import '../App.css';
import './Credit.css';



function Credit() {

    useEffect(() => {
        axios.get("/datas").then(response => {
            setDatas(response.data);
            console.log("notes datas: " + datas[0].title);
        });
    })
}

export default Credit