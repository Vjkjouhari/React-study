import Header from "./Header"
import { useRouteError } from "react-router-dom"


const Error = () => {

    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <Header />
            <h1>
                Ooops Something went Wrong!!!!!
            </h1>
            <h3>{err.status}</h3>
            <h2> {err.data}</h2>
        </div>
    )
}

export default Error