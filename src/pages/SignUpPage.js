import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { API_SECTION, httpPost } from "../data/ApiService";

const SignUpPage = () => {

    const [signUpForm, setSignUpForm] = useState();
    const navigate = useNavigate();

    const onChangeHandler = ({ target }) => {
        let { name, value } = target;

        setSignUpForm((form) => {
            return { ...form, [name]: value };
        })
    }

    const submit = async (event) => {
        event.preventDefault();

        if(signUpForm.password !== signUpForm.password2){
            alert("La contraseñas ingresadas no son iguales");
            navigate("/login");
        }else{
            httpPost(API_SECTION.USERS, signUpForm).then(data => {
                setTimeout(() => { navigate("/login") }, 1000);
            }).catch(err => {
                alert("No se pudo crear el usuario. Reintente luego");
                console.error(err);
            });
        }
     };


    return (
        <>
            <div className="container">
                <h2 className="mt-5">Nuevo usuario</h2>
                <hr />
                <form className="mt-5" onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Usuario</label>
                        <input required type="text" className="form-control" id="userName" name="userName" onChange={onChangeHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input required type="password" className="form-control" id="password" name="password" onChange={onChangeHandler} minLength="6" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password2" className="form-label">Repita la contraseña</label>
                        <input required type="password" className="form-control" id="password2" name="password2" onChange={onChangeHandler} minLength="6" />
                    </div>
                    <button type="submit" className="btn btn-primary me-3">Aceptar</button>
                    <Link to="/login">Cancelar</Link>
                </form >
            </div>
        </>
    );
}

export default SignUpPage;