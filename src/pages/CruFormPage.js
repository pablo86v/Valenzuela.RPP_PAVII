import CruForm from "../components/CruForm";
import {useEffect, useState} from 'react';
import axios from "axios";

const URL = "http://localhost:3100";

function CruFormPage() {

    const [tiposMascota, setTiposMascota] = useState([]);

    useEffect(()=>{
        const getTiposMascota = async (url) => {
            const {data} = await axios.get(url);
            data.forEach(t => {
                setTiposMascota(tiposMascota => [...tiposMascota, t])
            });
        }

        getTiposMascota(`${URL}/tipos`);
    }, []);
    

    return (
        <div className="container">
            <CruForm data={tiposMascota}/>
        </div>
    );
}

export default CruFormPage;