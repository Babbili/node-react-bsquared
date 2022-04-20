import React, { useEffect, useState } from 'react'
import IpInfoItems from './IpInfoItems'

function IpInfo({ styles }) {

    const [ipData, setIpData] = useState({})

    useEffect(()=> {
        fetch('http://ip-api.com/json')
        .then( res => {
            let data = res.json()
            return data
        })
        .then(data => {
            // console.log('data', data)
            setIpData(data)
        })
    },[])

    return (
        <section className={styles.ipinfo}>
            <h2>Your IP Address Info.</h2>
            <IpInfoItems styles={styles} ipData={ipData} />
        </section>
    )
}
export default IpInfo