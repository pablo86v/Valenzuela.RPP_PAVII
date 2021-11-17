import CruForm from "../components/CruForm";
import {useEffect, useState} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const URL = "http://localhost:3100";

const CruFormPage = () => {
    const params = useParams();
    const [tiposMascota, setTiposMascota] = useState([]);
    const [mascotaModificada, setMascotaModificada] = useState({});
    const [showSpinner, setShowSpinner] = useState(false);

    const getMascota = async (id) => {
        const { data } = await axios.get(`${URL}/mascotas/${id}`);
        setMascotaModificada(data);
        setShowSpinner(false);
    }

    useEffect(()=>{
        const getTiposMascota = async (url) => {
            const {data} = await axios.get(url);
            data.forEach(t => {
                setTiposMascota(tiposMascota => [...tiposMascota, t])
            });
        }

        getTiposMascota(`${URL}/tipos`);

        if(params.id){
            setShowSpinner(true);
            getMascota(params.id);
        }

    }, []);
    

    return (
        <div className="container">
            <CruForm typeData={tiposMascota} data={mascotaModificada} />
            <Spinner visible={showSpinner}/>
        </div>
    );
}

export default CruFormPage;