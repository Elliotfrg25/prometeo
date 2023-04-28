import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';
import { useAuth } from "./AuthContext";
import CustomButton from './CustomButton/CustomButton';

const SignIn = () => {
    const { signIn } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password);
    };

    const handleClick = (e) => {
        console.log('Container clicked:', e.target);
    };

    return (
        <div className="container" onClick={handleClick}>
            <h1 className="title">PROMETEO</h1>
            <div className="signin-form">
                <h2>Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Correo electrónico"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            required
                        />
                    </div>
                    <CustomButton variant="contained" type="submit">
                        Iniciar sesión
                    </CustomButton>
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
