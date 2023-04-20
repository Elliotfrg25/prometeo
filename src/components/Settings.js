// src/components/Settings.js
import React, { useState } from 'react';
import '../styles/Settings.css';

const Settings = () => {
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);

    const handleTwoFactorAuthChange = (e) => {
        setTwoFactorAuth(e.target.checked);
    };

    return (
        <div className="container">
            <h1 className="title">PROMETEO</h1>
            <div className="settings">
                <h2>Configuración</h2>
                <div className="form-group">
                    <label htmlFor="two-factor-auth">Autenticación de dos factores</label>
                    <input
                        id="two-factor-auth"
                        type="checkbox"
                        checked={twoFactorAuth}
                        onChange={handleTwoFactorAuthChange}
                    />
                </div>
                <div className="settings-option">
                    <button className="btn btn-primary">Vincular cuenta bancaria o tarjeta</button>
                </div>
                <div className="settings-option">
                    <button className="btn btn-primary">Administrar tokens virtuales</button>
                </div>
                <div className="settings-option">
                    <button className="btn btn-primary">Cambiar idioma</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
