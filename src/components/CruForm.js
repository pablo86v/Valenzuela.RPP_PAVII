import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Select from "./Select";
import { API_SECTION, httpPost, httpPut } from '../data/ApiService';

const emptyForm = {
    id: null,
    nombre: "",
    edad: "",
    vacunado: "",
    tipo: "",
    observaciones: ""
}

const CruForm = ({ typeData, data }) => {

    const [cruForm, setCruForm] = useState(emptyForm);
    const navigate = useNavigate();
    const { id, nombre, edad, vacunado, tipo, observaciones } = cruForm;

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
        if(!mascota.vacunado) mascota.vacunado = false;
        httpPost(API_SECTION.MASCOTAS, mascota).then(data => {
            localStorage.setItem('token', data);
            setTimeout(() => { navigate("/") }, 1000);
        }).catch(err => {
            alert("No se pudo guardar la información");
            console.error(err);
        });
    }

    const updateItem = async (mascota) => {
        httpPut(API_SECTION.MASCOTAS, mascota.id, mascota).then(data => {
            setTimeout(() => { navigate("/") }, 1000);
        }).catch(err => {
            alert("No se pudo actualizar la información");
            console.error(err);
        });
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
                    <input required className="form-control" id="nombre" name="nombre" value={nombre} onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="edad" className="form-label">Edad</label>
                    <input required type="number" className="form-control" id="edad" name="edad" value={edad} onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                    <label className="checkbox-inline m-3" aria-describedby="vacunado" htmlFor="vacunado"  >Vacunado?</label>
                    <input type="checkbox" id="vacunado" name="vacunado" checked={vacunado} onChange={onChangeHandler} />
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
