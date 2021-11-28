import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import Detail from "../components/Detail";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import { API_SECTION, httpGet} from "../data/ApiService";

const DetailGridPage = () => {
    const [mascotas, setMascotas] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/login");
        }
        httpGet(API_SECTION.MASCOTAS).then(data => {
            setMascotas(data.filter(m => m.tipo === params.type));
            setShowSpinner(false);
        })
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    {
                        mascotas.length !== 0 && (mascotas.map(mascota => {
                            return <Detail key={mascota.id} data={mascota} />
                        }))
                    }
                </div>
                <Link to="/">Volver</Link>
            </div>
            <Spinner visible={showSpinner} />
        </>
    );
}

export default DetailGridPage;