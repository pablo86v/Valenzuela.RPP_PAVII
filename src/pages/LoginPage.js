import "../pages/LoginPage.css";

const LoginPage = () => {
    return (
        <>
            <div className="container">
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <form className="mt-3">
                            <input type="text" id="user" name="user" className="form-control" placeholder="Username"/>
                            <input type="text" id="password" name="password" className="form-control" placeholder="Password"/>
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