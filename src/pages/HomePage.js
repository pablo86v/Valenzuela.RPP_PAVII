import Header from "../components/Header";
import Table from "../components/Table";
import { useEffect, useState } from 'react';
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate } from 'react-router-dom';
import Navigator from "../components/Navigator";


const HomePage = () => {
    const URL = "http://localhost:3100";
    const [mascotas, setMascotas] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const navigate = useNavigate();

    const getMascotas = async () => {
        const { data } = await axios.get(`${URL}/mascotas`);
        setMascotas(data);
        setShowSpinner(false);
    }

    useEffect(() => {
        getMascotas();
    }, []);

    return (
        <>
            <Header/>
            <div className="container">
                <Navigator/>
                <button className="btn btn-success m-3" onClick={() => navigate("new")}>Agregar mascota</button>
                <Table data={mascotas} reload={getMascotas} />
            </div>
            <Spinner visible={showSpinner}/>
        </>
    );
}

export default HomePage;