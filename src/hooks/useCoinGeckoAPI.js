import { useState, useEffect } from 'react';
import axios from 'axios';

const useCoinGeckoAPI = (currency) => {
    const [price, setPrice] = useState(0);
    const [chartData, setChartData] = useState([]);
    const [chartLabels, setChartLabels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const validateCurrency = (currency) => {
        const supportedCurrencies = ['btc', 'eth', 'ltc', 'xrp', 'bch', 'bnb', 'usdt', 'eos', 'bsv', 'xlm'];
        return supportedCurrencies.includes(currency.toLowerCase());
    };

    useEffect(() => {
        const fetchPriceData = async () => {
            setIsLoading(true);
            setError(null);

            if (!validateCurrency(currency)) {
                setError('Moneda no válida o no soportada');
                setIsLoading(false);
                return;
            }

            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=usd`
                );

                console.log('API Response:', response.data);

                if (response.data && response.data[currency.toLowerCase()] && response.data[currency.toLowerCase()].usd) {
                    setPrice(response.data[currency.toLowerCase()].usd);
                } else {
                    throw new Error('No se pudo obtener el precio de la moneda');
                }

                const chartResponse = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${currency.toLowerCase()}/market_chart?vs_currency=usd&days=30&interval=daily`
                );

                const prices = chartResponse.data.prices.map((price) => price[1]);
                const dates = chartResponse.data.prices.map((price) =>
                    new Date(price[0]).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                );

                setChartData(prices);
                setChartLabels(dates);
            } catch (error) {
                console.error('Error fetching price data:', error); // Añade esta línea
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPriceData();
    }, [currency]);

    return { price, chartData, chartLabels, isLoading, error };
};

export default useCoinGeckoAPI;




