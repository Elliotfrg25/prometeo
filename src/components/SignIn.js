import React from 'react';
import '../styles/SignIn.css';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    render() {
        return (
            <>
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
                                    required />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    required />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Iniciar sesión
                            </button>
                            <div className="signin-options">
                                <Link to="/signup">Registrarse</Link>
                                <span> | </span>
                                <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default SignIn;




