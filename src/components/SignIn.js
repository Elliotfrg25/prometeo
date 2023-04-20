import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';
import { useAuth } from "./AuthContext";

const SignIn = () => {
    const { signIn } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password);
    };

    return (
        <div className="container">
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

// He agregado la función handleSubmit que manejará el evento de envío del formulario y utilizará la función signIn proporcionada 
//por el hook useAuth.También he agregado los atributos name a los elementos de entrada para poder acceder a sus valores en la 
//función handleSubmit.Finalmente, he agregado el atributo onSubmit al formulario para llamar a la función handleSubmit cuando se 
//envíe el formulario.