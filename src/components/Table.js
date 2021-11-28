import { useState } from 'react';
import Row from './Row';
import Spinner from './Spinner';
import { API_SECTION, httpDelete } from '../data/ApiService';

const Table = ({ data, reload }) => {
    const [showSpinner, setShowSpinner] = useState(false);

    const remove = async (id) => {
        setShowSpinner(true);
        httpDelete(API_SECTION.MASCOTAS, id).then(() => {
            setShowSpinner(false);
            reload();
        }).catch(err => {
            alert("No se pudo eliminar la información");
            console.error(err);
        });
    }

    return (
        <>
            <h2 className="title is-4">Mascotas</h2>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Vacunado</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length !== 0 && (data.map(mascota => {
                            return <Row key={mascota.id} data={mascota} remove={remove} />
                        }))
                    }
                </tbody>
            </table>
            <Spinner visible={showSpinner} />
        </>
    );
};

export default Table;


