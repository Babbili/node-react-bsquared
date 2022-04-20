import React from 'react'

function Coin({ styles, coin }) {
    return(
        <div className={styles.coin}>
            <div className={styles.coin__icon}>
                <img src={coin.icon} alt={coin.symbol} />
                <p>{coin.name}</p>
            </div>
            <p className={styles.coin__price}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'usd', currencyDisplay: 'symbol' }).format(coin.price)}</p>
        </div>
    )
}
export default Coin