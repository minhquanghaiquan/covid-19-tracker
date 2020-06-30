import React, { useEffect, useState } from 'react'
import {Cards , Chart , CountryPicker} from './componets'
import styles from './App.module.css'
import {fetchData} from './api'
import {fetchDailyData} from './api'
import {fetchCountries} from './api'

function App() {

    const [data, setData] = useState({});
    const [dailyData, setDailyData] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    

    useEffect(() => {
        const getData= async () => {
            const data = await fetchData();
            setData(data)
        }
        const getDailyData = async () => {
            setDailyData( await fetchDailyData())
        }
        const getCountry = async () => {
            setCountries(await fetchCountries())
        }
        

       getData();
       getDailyData();
       getCountry();
    },[]);

    const handleCountryChange = async (country) => {
        setSelectedCountry(country);
        setData(await fetchData(country))
    }
    

    if(!data.confirmed) {
        return 'Loading...'
    }
    
    return(
        <div className={styles.container}>
            <img className={styles.image} src='https://assets.unenvironment.org/s3fs-public/inline-images/COVID19_RESPONSE_LOGO_HORIZONTAL_EN.png?null' alt="COVID-19" />
            <Cards data = {data}/>
            <CountryPicker countries = {countries} handleCountryChange={handleCountryChange}/>
            <Chart data={data} dailyData = {dailyData} selectedCountry = {selectedCountry}/>
            
        </div>
    )
}

export default App;