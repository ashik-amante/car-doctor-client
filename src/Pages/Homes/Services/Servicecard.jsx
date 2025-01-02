import { FaArrowRightLong } from "react-icons/fa6";


const Servicecard = ({ service }) => {
    const { img, title, price } = service
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-semibold"> Price : {price} $</p>
                    <button className="text-orange-500 text-xl"><FaArrowRightLong /></button>
                    
                </div>

            </div>
        </div>
    );
};

export default Servicecard;