import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import CruForm from "../components/CruForm";
import Spinner from "../components/Spinner";
import { API_SECTION, httpGet, httpGetOne} from "../data/ApiService";

const CruFormPage = () => {
    const params = useParams();
    const [tiposMascota, setTiposMascota] = useState([]);
    const [mascotaModificada, setMascotaModificada] = useState({});
    const [showSpinner, setShowSpinner] = useState(false);
    const navigate = useNavigate();

    const getMascota =  (id) => {
        httpGetOne(API_SECTION.MASCOTAS, id).then(data => {
            setMascotaModificada(data);
            setShowSpinner(false);
        })
    }

    const getTiposMascota = () => {
        httpGet(API_SECTION.TIPOS).then(data => {
            setTiposMascota(data);
        })
    }

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/login");
        }

        getTiposMascota();

        if (params.id) {
            setShowSpinner(true);
            getMascota(params.id);
        }
    }, []);

    return (
        <div className="container">
            <CruForm typeData={tiposMascota} data={mascotaModificada} />
            <Spinner visible={showSpinner} />
        </div>
    );
}

export default CruFormPage;