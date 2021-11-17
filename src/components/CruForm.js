import { Link } from "react-router-dom";
import Select from "./Select";
import {useEffect, useState} from 'react';

const CruForm = ({ data }) => {

    const [cruForm, setCruForm] = useState([]);

    const onChangeHandler = ({target}) => {
        let {name,value} = target;
        
        setCruForm((form) => {
            return { ...form, [name]: value };
        })
    }

    return (
        <>
            <h2 className="mt-5">Alta de mascota</h2>
            <hr />
            <form className="mt-5">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" />
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