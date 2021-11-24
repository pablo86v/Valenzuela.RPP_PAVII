import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Select from "./Select";
import axios from "axios";

const URL = "http://localhost:3100/mascotas";

const emptyForm = {
    id: null,
    nombre: "",
    edad: "",
    tipo: "",
    observaciones: "",
    vacunado: ""
}

const CruForm = ({ typeData, data }) => {

    const [cruForm, setCruForm] = useState(data || emptyForm);
    const navigate = useNavigate();
    const { id, nombre, tipo, edad, vacunado, observaciones } = cruForm;

    const onChangeHandler = ({ target }) => {
        let { name, value, checked } = target;

        if (name === "vacunado") {
            value = checked;
        }

        setCruForm((form) => {
            return { ...form, [name]: value };
        })
    }

    const submit = (event) => {
        event.preventDefault();

        if (id) {
            updateItem(cruForm);
        } else {
            addItem(cruForm);
        }
    }

    const addItem = async (mascota) => {
        try {
            console.log(mascota)
            await axios.post(URL, mascota);
            navigate("/");
        } catch (err) {
            console.log({ err });
        }
    }

    const updateItem = async (mascota) => {
        try {
            console.log(mascota)
            await axios.put(`${URL}/${mascota.id}`, mascota);
            navigate("/");
        } catch (err) {
            console.log({ err });
        }
    }

    useEffect(() => {
        if (data) {
            setCruForm(data);
        }
    }, [data]);

    return (
        <>
            <h2 className="mt-5">Mascota</h2>
            <hr />
            <form className="mt-5" onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="edad" className="form-label">Edad</label>
                    <input type="number" className="form-control" id="edad" name="edad" value={edad} onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                    <input type="checkbox" id="vacunado" name="vacunado" checked={vacunado} onChange={onChangeHandler} />
                    <label className="checkbox-inline m-3" aria-describedby="vacunado" for="vacunado" >Vacunado?</label>
                </div>
                <div className="mb-3">
                    <Select onChange={onChangeHandler} data={typeData} value={tipo} />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" value={observaciones} name="observaciones" onChange={onChangeHandler} />
                </div>

                <button type="submit" className="btn btn-primary me-3">Aceptar</button>
                <Link to="/">Cancelar</Link>
            </form >
        </>
    );
};

export default CruForm;
