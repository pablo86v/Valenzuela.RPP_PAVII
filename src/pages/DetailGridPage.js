import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import Detail from "../components/Detail";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import axios from "axios";

const DetailGridPage = () => {

    const URL = "http://localhost:3100";
    const [mascotas, setMascotas] = useState([]);
    const navigate = useNavigate();
    const [showSpinner, setShowSpinner] = useState(true);
    const params = useParams();
    const headers = {headers : {authorization : `Bearer ${localStorage.getItem("token")}`}};

    const getMascotas = async () => {
        const { data } = await axios.get(`${URL}/api/mascotas`, headers);
        setMascotas(data.filter(m => m.tipo == params.type))
        setShowSpinner(false);
    }

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/login");
        }
        getMascotas();
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