// src/components/CryptoExchange.js
import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import CustomButton from './CustomButton/CustomButton';
import '../styles/CryptoExchange.css';
import CryptoChart from "./CryptoChart";

const CryptoExchange = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('BTC');
    const [amount, setAmount] = useState(0);
    const [action, setAction] = useState('buy');
    const [price, setPrice] = useState(50000); // Precio de ejemplo
    const [chartData, setChartData] = useState([10000, 20000, 30000, 40000, 50000]);
    const [chartLabels, setChartLabels] = useState(['Ene', 'Feb', 'Mar', 'Abr', 'May']);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleActionChange = (e) => {
        setAction(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Realizar ${action} de ${amount} ${selectedCurrency}`);
    };

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCurrency.toLowerCase()}&vs_currencies=usd`
                );
                setPrice(response.data[selectedCurrency.toLowerCase()].usd);
            } catch (error) {
                console.error('Error fetching price:', error);
            }
        };

        fetchPrice();
    }, [selectedCurrency]);

    const totalCost = action === 'buy' ? amount * price : amount;

    return (
        <div className="container">
            <h1 className="title">PROMETEO</h1>
            <div className="crypto-exchange">
                <h2>Compra y venta de criptomonedas</h2>
                <p>Precio actual de {selectedCurrency}: ${price}</p>
                <CryptoChart data={chartData} labels={chartLabels} />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <TextField
                            id="amount"
                            label="Monto"
                            type="number"
                            InputProps={{ inputProps: { step: 0.01 } }}
                            variant="outlined"
                            value={amount}
                            onChange={handleAmountChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <FormControl variant="outlined">
                            <InputLabel id="action-label">Acción</InputLabel>
                            <Select
                                labelId="action-label"
                                id="action"
                                value={action}
                                onChange={handleActionChange}
                                label="Acción"
                            >
                                <MenuItem value="buy">Comprar</MenuItem>
                                <MenuItem value="sell">Vender</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <p>
                        Total: ${totalCost.toFixed(2)} {action === "buy" ? "USD" : selectedCurrency}
                    </p>
                    <CustomButton type="submit">
                        {action === 'buy' ? 'Comprar' : 'Vender'} {selectedCurrency}
                    </CustomButton>
                </form>
            </div>
        </div>
    );
};

export default CryptoExchange;


