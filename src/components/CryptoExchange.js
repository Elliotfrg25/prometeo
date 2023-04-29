// src/components/CryptoExchange.js
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import CustomButton from './CustomButton/CustomButton';
import '../styles/CryptoExchange.css';
import CryptoChart from "./CryptoChart";
import useCoinGeckoAPI from '../hooks/useCoinGeckoAPI';

const CryptoExchange = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('BTC');
    const [amount, setAmount] = useState(0);
    const [action, setAction] = useState('buy');

    const { price, chartData, chartLabels, isLoading, error } = useCoinGeckoAPI(selectedCurrency);

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

    const totalCost = action === 'buy' ? amount * price : amount;

    return (
        <div className="container">
            <h1 className="title">PROMETEO</h1>
            <div className="crypto-exchange">
                <h2>Compra y venta de criptomonedas</h2>
                {isLoading ? (
                    <p>Cargando precio...</p>
                ) : error ? (
                    <p>Error al cargar precio: {error}</p>
                ) : (
                    <p>Precio actual de {selectedCurrency}: ${price}</p>
                )}
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



