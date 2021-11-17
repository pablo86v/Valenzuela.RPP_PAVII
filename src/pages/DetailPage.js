import Detail from "../components/Detail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const DetailPage = () => {

    const URL = "http://localhost:3100";
    const [mascota, setMascota] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const params = useParams();

    const getMascota = async (id) => {
        const { data } = await axios.get(`${URL}/mascotas/${id}`);
        setMascota(data);
        setShowSpinner(false);
    }

    useEffect(() => {
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