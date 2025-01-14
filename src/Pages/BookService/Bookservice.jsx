import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Bookservice = () => {
    const services = useLoaderData()
    const {user} = useContext(AuthContext)
    const { title, price, service_id,img } = services

    const handleService = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = user?.email
        const date = form.date.value;
        
        const order = { name,email,date,img,title,service_id,price}
        console.log(order);

        fetch('http://localhost:5000/bookings', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Booking successfuly placed ",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            form.reset()
            
        })
    }
    return (
        <div>
            <h1 className="text-center text-3xl font-bold mt-10"> Service Name : {title}</h1>

            <form onSubmit={handleService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid col-span-1 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="emial" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="amount" defaultValue={'$'+ price} className="input input-bordered" required />

                        </div>
                    </div>

                </div>
                <div className="form-control mt-6">
                    
                    <input className="btn btn-primary text-white text-xl" type="submit" value="ORDER CONFIRM" />
                </div>
            </form>
        </div>
    );
};

export default Bookservice;