import { IoLocationOutline } from "react-icons/io5";
import { SlCallOut } from "react-icons/sl";
import { TbCalendarClock } from "react-icons/tb";


const Info = () => {
    return (
        <div className="w-full bg-[#151515] h-[250px] flex items-center justify-around mt-28">
            <div>
                <div className="grid grid-cols-3 gap-16">
                    <div className="grid col-span-1">
                        <div className="flex items-center gap-3">
                            <div>
                                <span className="text-white text-5xl"><TbCalendarClock /></span>
                            </div>
                            <div className="text-white">
                                <p className="text-xl ">We are open monday-friday</p>
                                <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid col-span-1">
                        <div className="flex items-center gap-4">
                            <div>
                                <span className="text-white text-5xl"><SlCallOut /></span>
                            </div>
                            <div className="text-white">
                                <p className="text-xl ">Have a question?</p>
                                <p  className="text-2xl font-bold">+2546 251 2658</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid col-span-1">
                        <div className="flex items-center gap-3">
                            <div>
                                <span className="text-white text-5xl"><IoLocationOutline /></span>
                            </div>
                            <div className="text-white">
                                <p className="text-xl ">Need a repair? our address</p>
                                <p className="text-2xl font-bold">Liza Street, New York</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Info;