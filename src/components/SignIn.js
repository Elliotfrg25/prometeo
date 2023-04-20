import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';

const SignIn = () => {
    return (
        <div className="container">
            <h1 className="title">PROMETEO</h1>
            <div className="signin-form">
                <h2>Iniciar sesión</h2>
                <form>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Correo electrónico"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Iniciar sesión
                    </button>
                </form>
                <p className="forgot-password">
                    <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                </p>
                <p className="signup-link">
                    ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;




