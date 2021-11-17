import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = ({ visible }) => {
  return (
    <div className="spinner">
      <Loader
        type="ThreeDots"
        color="#3a4a4f"
        height={100}
        width={100}
        visible={visible}
      />
    </div>

  );
}

export default Spinner;