import React, { useEffect, useState } from 'react'
import CoinSearch from './CoinSearch'
import Coin from './Coin'

function Crypto({ styles }) {

    const [coins, setCoins] = useState([])
    const [searchQuery, setSearchQuery] = useState('')


    useEffect(() => {
        fetch('https://api.coinstats.app/public/v1/coins?skip=0')
        .then(res => {
            let data = res.json()
            return data
        })
        .then(data => {
            setCoins(data.coins)
            // console.log('coins', coins)
        })
    }, [coins])

    const filteredCoins = coins.filter(coin => {
       return coin.name.toLowerCase().includes(searchQuery.toLowerCase()) || coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    })

    return(
        <section className={styles.crypto}>
            <h2>Cryptocurrencies Live Prices</h2>
            <CoinSearch styles={styles} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {
                coins ?
                <div className={styles.coins}>
                    {
                        filteredCoins.map(coin => {
                            return <Coin key={coin.symbol} styles={styles} coin={coin} />
                        })
                    }
                </div>
                :
                <></>
            }
        </section>
    )
}
export default Crypto