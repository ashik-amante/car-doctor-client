import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'

const Team = () => {
    return (
        <div className='mt-32'>
            <div className='text-center mb-12'>
                <h1 className='text-xl font-bold text-orange-500 mb-5'>Team</h1>
                <h1 className='text-5xl font-bold mb-5'>Meet Our Team</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which <br /> look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-5  ">
                <div className="card bg-base-100 w-96 shadow-xl rounded-lg ">
                    <figure className="px-10 pt-10 ">
                        <img
                            src={team1}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className='font-bold text-2xl'>Hydrolic Break</p>
                        <p className="text-orange-500 font-semibold"> Engine Expert</p>
                        <div className='flex gap-4 text-3xl'>
                            <span><FaFacebook /> </span>
                            <span><FaInstagram /> </span>
                            <span><FaLinkedin /> </span>
                            <span><FaTwitter /> </span>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl rounded-lg ">
                    <figure className="px-10 pt-10 ">
                        <img
                            src={team2}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className='font-bold text-2xl'>Hydrolic Break</p>
                        <p className="text-orange-500 font-semibold"> Engine Expert</p>
                        <div className='flex gap-4 text-3xl'>
                            <span><FaFacebook /> </span>
                            <span><FaInstagram /> </span>
                            <span><FaLinkedin /> </span>
                            <span><FaTwitter /> </span>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl rounded-lg ">
                    <figure className="px-10 pt-10 ">
                        <img
                            src={team3}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className='font-bold text-2xl'>Hydrolic Break</p>
                        <p className="text-orange-500 font-semibold"> Engine Expert</p>
                        <div className='flex gap-4 text-3xl'>
                            <span><FaFacebook /> </span>
                            <span><FaInstagram /> </span>
                            <span><FaLinkedin /> </span>
                            <span><FaTwitter /> </span>
                        </div>
                    </div>
                </div>
            </div>
          

        </div>
    );
};

export default Team;