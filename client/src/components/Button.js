import React from 'react'
import { Link } from 'react-router-dom'

function Button({ styles, name, link }) {

    return(
        <Link to={`/${link}`}>
            <button className={styles.button}>{name}</button>
        </Link>
    )
}
export default Button