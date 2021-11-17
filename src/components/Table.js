import React from 'react';

const Table = ({data}) => {
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
                            return  <tr key={mascota.id}>
                                <th scope="row">{mascota.id}</th>
                                <td>{mascota.nombre}</td>
                                <td>{mascota.tipo}</td>
                                <td>
                                    <button className="btn"><i className="bi bi-info-circle"></i></button> 
                                    <button className="btn"><i className="bi bi-pencil"></i></button>    
                                    <button className="btn"><i className="bi bi-trash"></i></button>       
                                </td>
                            </tr>
                        }))
                    }
                </tbody>
            </table>
        </>
    );
};

export default Table;