import Header from "../components/Header";
import Table from "../components/Table";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const URL = "http://localhost:3100";

function HomePage() {

    const [mascotas, setMascotas] = useState([]);

    const getMascotas = async (url) => {
        const { data } = await axios.get(url);
        data.forEach(m => {
            setMascotas(mascotas => [...mascotas, m])
        });
        // setMascotas(data);
    }

    useEffect(() => {
        getMascotas(`${URL}/mascotas`);
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <button className="btn btn-light m-3">
                    <Link to="/new">Agregar mascota</Link>
                </button>
                <Table data={mascotas} reload={getMascotas} />
            </div>
        </>
    );
}

export default HomePage;