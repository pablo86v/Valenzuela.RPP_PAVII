import React from 'react';

const Select = ({ data, onChange, value }) => {
    const handlerChange = (e) => {
        onChange(e);
    }

    return (
        <>
            <label htmlFor="tipo" className="form-label">Tipo</label>
            <select required className="form-control" id="tipo" name="tipo" value={value} onChange={handlerChange}>
                <option value="" key={"def"}>Seleccione un Tipo</option>
                {
                    data.length !== 0 && (data.map(tipoMascota => {
                        return <option key={tipoMascota.id}>{tipoMascota.desc}</option>
                    }))
                }
            </select>
        </>
    );
};

export default Select;
