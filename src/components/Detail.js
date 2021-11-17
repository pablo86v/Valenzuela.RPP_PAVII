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
                </div>
            </div>
        </>
    );
}

export default Detail;