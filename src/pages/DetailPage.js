
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Detail from "../components/Detail";
import Spinner from "../components/Spinner";
import { API_SECTION, httpGetOne} from "../data/ApiService";

const DetailPage = () => {
    const [mascota, setMascota] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    const getMascota = (id) => {
        httpGetOne(API_SECTION.MASCOTAS, id).then(data => {
            setMascota(data);
            setShowSpinner(false);
        })
    }

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/login");
        }
        getMascota(params.id);
    }, []);

    return (
        <>
            <Header/>
            <div className="container">
                <Detail data={mascota} />
                <Link to="/">Volver</Link>
            </div>
            <Spinner visible={showSpinner} />
        </>
    );
}

export default DetailPage;