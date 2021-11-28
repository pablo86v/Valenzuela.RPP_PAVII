import React from 'react';
import { useNavigate } from 'react-router-dom';

const Row = ({ data, remove }) => {
    const mascota = data;
    const navigate = useNavigate();

    return (
        <tr>
            <td>{mascota.nombre}</td>
            <td>{mascota.tipo}</td>
            <td>{mascota.edad}</td>
            <td>{mascota.vacunado ? "Si" : "No"}</td>
            <td>
                <button className="btn" onClick={() => navigate(`detail/${mascota.id}`)}><i className="bi bi-info-circle"></i></button>
                <button className="btn" onClick={() => navigate(`edit/${mascota.id}`)}><i className="bi bi-pencil"></i></button>
                <button className="btn" onClick={() => remove(mascota.id)}><i className="bi bi-trash"></i></button>
            </td>
        </tr>
    );
};

export default Row;