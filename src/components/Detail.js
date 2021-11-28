const Detail = ({ data }) => {
    return (
        <>
            <div className="card m-3 p-0" style={{ width: "18rem" }}>
                <div className="card-header">
                    <h5 className="card-title">Mascota</h5>
                </div>
                <div className="card-body">
                    <p className="card-text"><b>Nombre:</b> {data.nombre}</p>
                    <p className="card-text"><b>Tipo:</b> {data.tipo}</p>
                    <p className="card-text"><b>Edad:</b> {data.edad}</p>
                    <p className="card-text"><b>Vacunado:</b> {data.vacunado ? "Si" : "No"}</p>
                    <p className="card-text"><b>Observaciones:</b></p>
                    <textarea readOnly className="form-control" defaultValue={data.observaciones} ></textarea>
                </div>
            </div>
        </>
    );
}

export default Detail;