import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Table from "../components/Table";
import Spinner from "../components/Spinner";
import Navigator from "../components/Navigator";
import { API_SECTION, httpGet} from "../data/ApiService";

const HomePage = () => {
    const [mascotas, setMascotas] = useState([]);
    const [tiposMascota, setTiposMascota] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const navigate = useNavigate();

    const getMascotas =  () => {
        httpGet(API_SECTION.MASCOTAS).then(data => {
            setMascotas(data);
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
        getMascotas();
        getTiposMascota();
    }, []);

    return (
        <>
            <Header/>
            <div className="container">
                <Navigator typeData={tiposMascota}/>
                <button className="btn btn-success m-3" onClick={() => navigate("new")}>Agregar mascota</button>
                <Table data={mascotas} reload={getMascotas} />
            </div>
            <Spinner visible={showSpinner}/>
        </>
    );
}

export default HomePage;