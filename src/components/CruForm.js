import {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Select from "./Select";
import axios from "axios";

const URL = "http://localhost:3100/mascotas";

const emptyForm = {
    id: null,
    nombre: "",
    tipo: ""
}

const CruForm = ({ typeData, data}) => {
    
    const [cruForm, setCruForm] = useState(data || emptyForm);
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
        
        if(id){
            updateItem(cruForm);
        }else{
            addItem(cruForm);
        }
    }

    const addItem = async (mascota) => { 
        try {
            console.log(mascota)
            await axios.post(URL, mascota);
            navigate("/");
        } catch(err) {
            console.log({err});
        }
    }

    const updateItem = async (mascota) => { 
        try {
            console.log(mascota)
            await axios.put(`${URL}/${mascota.id}`, mascota);
            navigate("/");
        } catch(err) {
            console.log({err});
        }
    }

    useEffect(() =>{
        if(data){
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
                    <Select onChange={onChangeHandler} data={typeData} value={tipo}/>
                </div>

                <button type="submit" className="btn btn-primary me-3">Aceptar</button>
                <Link to="/">Cancelar</Link>
            </form>
        </>
    );
};

export default CruForm;
