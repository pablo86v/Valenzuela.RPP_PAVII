import { Link } from "react-router-dom";

const PathButton = ({ type }) => {
    return <Link className="btn btn-sm btn-outline-secondary m-2" to={`detail-grid/${type.desc}`}>{type.desc}</Link>
}

export default PathButton;