import CircularLoader from "../Loder/CircularLoader";
import "./Button.css";

const Button = ({ handleClick, classStyle, title }) => {
    let btn = false;
    return (
        <button
            type="button"
            className={`${classStyle} buttonStyle`}
            onClick={handleClick}
        >
            {btn ? <CircularLoader /> : title}
        </button>
    );
};

export default Button;
