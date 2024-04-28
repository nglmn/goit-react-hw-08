import { Helmet } from "react-helmet-async";
import "../css/style.css";


const HomePage = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>HomePage</div>
        </div>
    )
}

export default HomePage