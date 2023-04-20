import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="container">
            <h1 className="title">PROMETEO</h1>
            <div className="dashboard">
                <h2>Dashboard</h2>
                <div className="balances">
                    <p>Saldo actual en pesos colombianos: COP 0.00</p>
                    <p>Saldo actual en dólares americanos: USD 0.00</p>
                    <p>Saldo actual en bitcoins: BTC 0.0000</p>
                </div>
                <div className="options">
                    <Link to="/buy-sell" className="btn btn-primary">
                        Comprar/Vender criptomonedas
                    </Link>
                    <Link to="/transfer" className="btn btn-primary">
                        Transferir dinero
                    </Link>
                    <Link to="/transaction-history" className="btn btn-primary">
                        Historial de transacciones
                    </Link>
                    <Link to="/settings" className="btn btn-primary">
                        Configuración
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
