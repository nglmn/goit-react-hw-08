import { RotatingLines } from "react-loader-spinner";
import css from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={css.spinner}>
            <RotatingLines
                visible={true}
                height="75"
                width="75"
                color='grey'
                strokeColor="grey"
                strokeWidth="2"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Spinner