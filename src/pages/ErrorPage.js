import "../pages/ErrorPage.css"; 

const ErrorPage = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Ocurrió un error, página no encontrada!
                            </div>
                            <div className="error-actions">
                                <a href="/login" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                    Ir al inicio </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;