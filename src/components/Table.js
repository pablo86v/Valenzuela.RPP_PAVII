import React from 'react';
import axios from "axios";
import Row from './Row';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const Table = ({ data, reload }) => {
    const URL = "http://localhost:3100/mascotas";
    const [showSpinner, setShowSpinner] = useState(false);

    const remove = async (id) => {
        try {
            setShowSpinner(true);
            await axios.delete(`${URL}/${id}`);
            setShowSpinner(false);
            reload();
        } catch (err) {
            console.log({ err });
        }
    }

    return (
        <>
            <h2 className="title is-4">Mascotas</h2>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length !== 0 && (data.map(mascota => {
                            return <Row key={mascota.id} data={mascota} remove={remove}/>
                        }))
                    }
                </tbody>
            </table>
            <Spinner visible={showSpinner}/>
        </>
    );
};

export default Table;