import React, { useEffect, useState } from "react";

import "./css/style.css"



const Temmpapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("New Delhi ");
    useEffect(() => {
        const fetchApi = async () => {
            const url = ` http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8e9286fc2c439f0afe7113a79b3428fc `
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
           // console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();

    }, [search]);


    let cDate = new Date().toLocaleDateString();
    let Time = new Date().toLocaleTimeString();                   //for digital  clock
    const [cTime, setCtime] = useState(Time);
    const UpdateTime = () => {
        Time = new Date().toLocaleTimeString();
        setCtime(Time);
    };
    setInterval(UpdateTime, 1000)

    const getCurrentDay = () => {
        var weekday = new Array(7);
        weekday[0] = "sun"
        weekday[1] = "mon"
        weekday[2] = "tues"
        weekday[3] = "wed"
        weekday[4] = "thurs"
        weekday[5] = "fri"
        weekday[6] = "sat"


        let currentTime = new Date();
        let day = (weekday[currentTime.getDay()]);
        return day;
    };
    const d = getCurrentDay();

    return (
        <>
            <div className="box ">
                <h1 id="cityName">check your city temperature</h1>
                <div className=" inputData">
                    <input
                        type="search"
                        value={search}
                        placeholder="search...."
                        className="inputFeild"
                        onChange={(event) => {
                            setSearch(event.target.value)

                        }}
                    />
                </div>

               

                {!city ? (
                    <>
                    <p className="errormsg">No data found <br/> </p>   
                    <h4 >Please Enter Your City Name </h4>
            </>
               ) : (
                    <div>
                    <h1 className="temp">sunny </h1>
                    <div id="weatherIcon">
                    <i className="fas fa-sun" ></i>
                   
                </div>
                        <div className="info">

                            <h2 className="location"><i className="fas fa-street-view"></i>{search}</h2>

                            <p id="date"><span>{cTime}</span><br /> {d} || {cDate}  </p>
                       

                        
                            <h1 className="temp">{city.temp} °C </h1>
                            <h3 className="tempmin_max"> Min : {city.temp_min}  °C | Max : {city.temp_max}  °C </h3>
                        
                        </div>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>

                    </div>
                )}
            </div>



        </>
    )
}

export default Temmpapp;