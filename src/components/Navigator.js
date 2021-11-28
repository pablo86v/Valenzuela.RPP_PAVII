import { useNavigate } from 'react-router-dom';
import PathButton from "./PathButton";


const Navigator = ({ typeData }) => {
    const navigate = useNavigate();

    const closeSession = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }

    return (
        <>
            <nav className="navbar navbar-light bg-light m-3">
                <form className="form-inline">
                    {
                        typeData.length !== 0 && (typeData.map(t => {
                            return <PathButton key={t.id} type={t} />
                        }))
                    }
                </form>
                <form className="form-inline my-2 my-lg-0">
                    <button type="button" className="btn btn-link" onClick={() => closeSession()}>Cerrar sesión</button>
                </form>
            </nav>
        </>
    );
}

export default Navigator;