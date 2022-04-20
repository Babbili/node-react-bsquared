import React from 'react'
import Button from './Button'
import styles from '../App.module.css'

function Intro() {
    return(
        <section className={styles.intro}>
            <h1>Node React App</h1>
            <div className={styles.signin__card}>
                <p>Sign in Anonimously as</p>
                <Button styles={styles} name={'Admin'} link={'admin'} />
                <Button styles={styles} name={'User'} link={'user'} />
            </div>
        </section>
    )
}
export default Intro