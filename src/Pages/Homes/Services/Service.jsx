import { useEffect, useState } from "react";

import Servicecard from "./Servicecard";


const Service = () => {
    const [services, setServices] = useState([])
    console.log(services);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-24">
            <div className="text-center">
                <h2 className="text-2xl ">service</h2>
                <h2 className="text-2xl font-bold"> Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not <br /> look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-5  ">
                {
                    services.map(service => <Servicecard key={service._id} service={service}>

                    </Servicecard>)
                }
            </div>
            <div className="flex items-center justify-center mt-12">
                <button className="btn btn-outline  text-orange-500">More Services</button>
            </div>
        </div>
    );
};

export default Service;