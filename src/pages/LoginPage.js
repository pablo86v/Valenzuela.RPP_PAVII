import "../pages/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";

const LoginPage = () => {
    const [loginForm, setLoginForm] = useState();
    const navigate = useNavigate();
    const URL = "http://localhost:3100";
    const headers = {headers : {authorization : `Bearer ${localStorage.getItem("token")}`}};

    const submit = async (event) => {
        event.preventDefault();
        console.log(loginForm);
        try {
            let {data} = await axios.post(`${URL}/api/login`, loginForm, headers);
            localStorage.setItem('token', data);
            setTimeout(() => { navigate("/") }, 1000);
        } catch (error) {
            alert("Usuario y/o contraseña inválidos");
        }
      
    }

    const onChangeHandler = ({ target }) => {
        let { name, value } = target;

        setLoginForm((form) => {
            return { ...form, [name]: value };
        })
    }

    return (
        <>
            <div className="container">
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <form className="mt-3" onSubmit={submit}>
                            <input type="text" id="userName" name="userName" className="form-control" placeholder="Username" onChange={onChangeHandler}/>
                            <input type="password" id="password" name="password" className="form-control" placeholder="Password" onChange={onChangeHandler}/>
                            <input type="submit" className="" value="Iniciar sesión" />
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="#">Olvidó su contraseña?</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;