import React from 'react'
import IpInfo from './IpInfo'
import Crypto from './Crypto'
import styles from '../App.module.css'
import Button from './Button'

function Admin() {
    return (
        <div className={`${styles.App} container`}>
            <h1>Admin Panel</h1>
            <IpInfo styles={styles} />
            <Crypto styles={styles} />
            <Button styles={styles} name={'Back Home'} link={''} />
        </div>
    )
}
export default Admin