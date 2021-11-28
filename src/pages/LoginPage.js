import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../pages/LoginPage.css";
import Spinner from "../components/Spinner";
import { API_SECTION, httpPost } from "../data/ApiService";

const LoginPage = () => {
    const [loginForm, setLoginForm] = useState();
    const [showSpinner, setShowSpinner] = useState(false);
    const navigate = useNavigate();

    const submit = async (event) => {
        setShowSpinner(true);
        event.preventDefault();
        httpPost(API_SECTION.LOGIN, loginForm).then(data => {
            localStorage.setItem("token", data);
            setTimeout(() => { 
                setShowSpinner(false);
                navigate("/");
            }, 3000);
        }).catch(err => {
            alert("Usuario y/o contraseña inválidos");
            console.error(err);
        });
    }

    const onChangeHandler = ({ target }) => {
        let { name, value } = target;

        setLoginForm((form) => {
            return { ...form, [name]: value };
        })
    }

    return (
        <>
            <div className="container" align="center">
                <div className="row text-center login-page">
                    <div className="col-md-12 login-form">
                        <form onSubmit={submit}>
                            <div className="row">
                                <div className="col-md-12 login-form-header">
                                    <p className="login-form-font-header"><span>Inicio de sesión</span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 login-from-row">
                                    <input name="userName" id="userName" type="text" placeholder="Usuario" required onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 login-from-row">
                                    <input name="password" type="password" placeholder="Contraseña" required onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 login-from-row">
                                    <button className="btn btn-success" type="submit">Entrar</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 login-from-row">
                                    <a href="/signup" className="btn btn-link" >Registrar usuario</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Spinner visible={showSpinner}/>
            </div>
        </>
    );
}

export default LoginPage;