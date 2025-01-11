import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const services = useLoaderData()
    const {title,price, service_id} = services
    return (
        <div>
            <h1>title : {title}</h1>
        </div>
    );
};

export default CheckOut;