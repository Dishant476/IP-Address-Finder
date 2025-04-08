import React, { useEffect, useState, useRef } from 'react'
import './mainfile.css'

export default function MainFile() {

    const [Address, setAddress] = useState('')
    const [Ipdetails, setIpdetails] = useState({})
    const myinput = useRef(null);

    const handleOnChange = (event) => {
        setAddress(event.target.value)
    }
    const handleOnClick = async () => {
        await fetch(`https://freeipapi.com/api/json/${Address}`)
        .then((response) => {return response.json()}).then((data) => {
            console.log(data)
            setIpdetails(data)
        })
      
    }
    const handleOnClickMyip = async () => {
        await fetch("https://api.ipify.org?format=json")
        .then((response) => {return response.json()}).then((data) => {
            console.log(data)
            myinput.current.value = data.ip;
        })
      
    }
    
  return (
    <div className="main">
            <h1>IP Address Finder</h1>

            <div className="input-section">
                <input type="text" placeholder="Enter the IP address" ref={myinput} onChange={handleOnChange} />
                <button className="find-button" onClick={handleOnClick}>Find</button>
            </div>

            <button className="find-ip-button" onClick={handleOnClickMyip}>Find your IP</button>

            <div className="address">{Ipdetails.ipAddress}</div>

            <div className="ipdetails">
                <div><strong>City Name:</strong> {Ipdetails.cityName}</div>
                <div><strong>Country Name:</strong> {Ipdetails.countryName}</div>
                <div><strong>Continent:</strong> {Ipdetails.continent}</div>
                <div><strong>IP Version:</strong> {Ipdetails.ipVersion}</div>
                <div><strong>Latitude:</strong> {Ipdetails.latitude}</div>
                <div><strong>Longitude:</strong> {Ipdetails.longitude}</div>
            </div>
        </div>
   
  )
}
