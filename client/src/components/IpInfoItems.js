import React from 'react'

function IpInfoItems({ styles, ipData }) {
    // console.log('ipdata', ipData)

    return(
        <div className={styles.ipinfo__items}>
            <div className={styles.ipinfo__item}>
                <p>Country</p>
                <p>{ipData.country}</p>
            </div>
            <div className={styles.ipinfo__item}>
                <p>City</p>
                <p>{ipData.city}</p>
            </div>
            <div className={styles.ipinfo__item}>
                <p>Region</p>
                <p>{ipData.region}</p>
            </div>
            <div className={styles.ipinfo__item}>
                <p>IP</p>
                <p>{ipData.query}</p>
            </div>
            <div className={styles.ipinfo__item}>
                <p>Longtude</p>
                <p>{ipData.lon}</p>
            </div>
            <div className={styles.ipinfo__item}>
                <p>Latitude</p>
                <p>{ipData.lat}</p>
            </div>
            <div className={styles.ipinfo__item}>
                <p>Org</p>
                <p>{ipData.isp}</p>
            </div>
        </div>
    )
}
export default IpInfoItems