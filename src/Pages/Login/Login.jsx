import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Login = () => {
    const handlelogin = event =>{
        event.preventDefault()
        const form = event.target;      
        const email = form.email.value;
        const password = form.password.value;
        const user = {email,password}
        console.log(user);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">
                   <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                    <form onSubmit={handlelogin} className="card-body">
                    <h1 className="text-5xl font-bold text-center">Login !</h1>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            
                            <input className="btn bg-[#FF3811] text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center my-3'>New to Car Doctor ?  <Link className='text-[#FF3811] font-bold text-[18px]' to='/register'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;