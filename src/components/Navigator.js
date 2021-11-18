import PathButton from "./PathButton";

const Navigator = ({typeData}) => {
    return (
        <>
            <nav className="navbar navbar-light bg-light m-3">
                <form className="form-inline">
                    {
                        typeData.length !== 0 && (typeData.map(t => {
                           return  <PathButton key={t.id} type={t}/>
                        }))
                    }
                </form>
            </nav>
        </>
    );
}

export default Navigator;