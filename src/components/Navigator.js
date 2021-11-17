import { Link } from "react-router-dom";

const Navigator = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light m-3">
                <form className="form-inline">
                    {/* <Link className="btn btn-sm btn-outline-secondary m-2" to={`detail-grid/${mascota.id}`}>Perro</Link> */}
                    <Link className="btn btn-sm btn-outline-secondary m-2" to={`detail-grid/Perro`}>Perro</Link>
                    <Link className="btn btn-sm btn-outline-secondary m-2" to={`detail-grid/Gato`}>Gato</Link>
                </form>
            </nav>

        </>
    );
}

export default Navigator;