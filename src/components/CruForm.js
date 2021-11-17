import { Link, useNavigate } from "react-router-dom";
import Select from "./Select";
import {useEffect, useState} from 'react';
import axios from "axios";

const URL = "http://localhost:3100/mascotas";

const initialForm = {
    id: null,
    nombre: "",
    tipo: ""
}

const CruForm = ({ data }) => {

    const [cruForm, setCruForm] = useState(initialForm);
    const navigate = useNavigate();
    const { id, nombre, tipo } = cruForm;

    const onChangeHandler = ({target}) => {
        let {name,value} = target;
        
        setCruForm((form) => {
            return { ...form, [name]: value };
        })
    }

    const submit = (event) => {
        event.preventDefault();
        console.log({cruForm});
        create(cruForm);
    }

    const create = async (mascota) => { 
        try {
            await axios.post(URL, mascota);
            navigate("/");
        } catch(err) {
            console.log({err});
        }
    }

    return (
        <>
            <h2 className="mt-5">Alta de mascota</h2>
            <hr />
            <form className="mt-5" onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                    <Select onChange={onChangeHandler} data={data}/>
                </div>

                <button type="submit" className="btn btn-primary me-3">Aceptar</button>
                <Link to="/">Cancelar</Link>
            </form>
        </>
    );
};

export default CruForm;
