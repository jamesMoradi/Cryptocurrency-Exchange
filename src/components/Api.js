import axios from "axios";

const getUsdData = async () => {
    const usdCryptoes = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false`)

    return usdCryptoes
}

const getEurData = async () => {
    const eurCryptoes = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200&page=1&sparkline=false`)

    return eurCryptoes
}

export {getUsdData, getEurData}