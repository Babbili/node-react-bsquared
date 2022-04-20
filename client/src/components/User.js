import React from 'react'
import Button from './Button'
import styles from '../App.module.css'

function User() {
    return(
        <section className={styles.intro}>
            <h1>User</h1>
            <p>No data, Please sign in as an Admin</p>
            <Button styles={styles} name={'Back Home'} link={''} />
        </section>
    )
}
export default User