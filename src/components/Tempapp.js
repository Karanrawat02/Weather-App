import React,{useEffect, useState} from "react";
import "./Tempapp"

const Tempapp=()=> {

    const [city, setCity]=useState(null);
    const [search,setSearch]=useState("Mumbai");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2babb8ed5407e187a4660e3ccb147316`
            const response=await fetch(url);
            const resJson=await response.json();
            console.log(resJson)
            setCity(resJson.main)
        }
        fetchApi();
    },[search])
    return(
        <>
        <div className="box">
            <div className="inputData">
            <input className="inputField" type="Search" onChange={(event) => {
                setSearch(event.target.value)
            }} />
            </div>    
        { !city ? (
            <p>No Data Found </p>
        ):(
            <>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">{city.temp} °C</h1>
            <h3 className="tempmin_max">
            Min: {city.temp_min} °C | Max: {city.temp_max} °C
            </h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </>
        )
        }
        </div> 
        </>
    );
}
export default Tempapp;