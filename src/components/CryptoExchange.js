// src/components/CryptoExchange.js
import React, { useState } from 'react';
import '../styles/CryptoExchange.css';

const CryptoExchange = () => { // eslint-disable-next-line
    const [selectedCurrency, setSelectedCurrency] = useState('BTC');
    const [amount, setAmount] = useState(0);
    const [action, setAction] = useState('buy'); // eslint-disable-next-line
    const [price, setPrice] = useState(50000); // Precio de ejemplo

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

    return (
        <div className="container">
            <h1 className="title">PROMETEO</h1>
            <div className="crypto-exchange">
                <h2>Compra y venta de criptomonedas</h2>
                <p>Precio actual de {selectedCurrency}: ${price}</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="amount">Monto</label>
                        <input
                            id="amount"
                            type="number"
                            step="0.01"
                            className="form-control"
                            value={amount}
                            onChange={handleAmountChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="action">Acción</label>
                        <select
                            id="action"
                            className="form-control"
                            value={action}
                            onChange={handleActionChange}
                        >
                            <option value="buy">Comprar</option>
                            <option value="sell">Vender</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {action === 'buy' ? 'Comprar' : 'Vender'} {selectedCurrency}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CryptoExchange;
