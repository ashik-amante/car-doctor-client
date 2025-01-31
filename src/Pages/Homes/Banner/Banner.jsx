import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mt-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full rounded-lg" />
                <div className="absolute  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-lg ">
                    <div className='space-y-7 w-2/3 pl-14'>
                        <h1 className="text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
                        <p className="text-xl text-white ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn bg-[#FF3811] text-white mr-5">Discover more</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide4" className="btn bg-transparent btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] ">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full rounded-lg" />
                <div className="absolute  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-lg">
                    <div className='space-y-7 w-2/3 pl-14'>
                        <h1 className="text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
                        <p className="text-xl text-white ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn bg-[#FF3811] text-white mr-5">Discover more</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn bg-transparent btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] ">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full rounded-lg" />
                <div className="absolute  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-lg">
                    <div className='space-y-7 w-2/3 pl-14'>
                        <h1 className="text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
                        <p className="text-xl text-white ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn bg-[#FF3811] text-white mr-5">Discover more</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn bg-transparent btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] ">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full rounded-lg" />
                <div className="absolute  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-lg">
                    <div className='space-y-7 w-2/3 pl-14'>
                        <h1 className="text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
                        <p className="text-xl text-white ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn bg-[#FF3811] text-white mr-5">Discover more</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide3" className="btn bg-transparent btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] ">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;