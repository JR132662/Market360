import Marquee from "react-fast-marquee";

const Announcement = () => {
    return (
        <div className="bg-blue-500 py-2 lg:py-3 sm:py-4 border-2 border-orange-400 inset-10 overflow-hiddem scroll-m-0">
            <Marquee>
                <div className="flex flex-col space-y-2 text-center mx-12">
                    <a href='/Services' className="text-2xl font-bold text-orange-300">
                        Commercial Painting
                    </a>
                </div>
                <span className="text-white lg:text-5xl sm:text-3xl">|</span>
                <div className="flex flex-col space-y-2 text-center mx-12">
                    <a href='/Services' className="text-2xl font-bold text-orange-300">
                        Stucco Repair
                    </a>
                </div>
                <span className="text-white lg:text-5xl sm:text-3xl">|</span>
                <div className="flex flex-col space-y-2 text-center mx-12">
                    <a href='/Services' className="text-2xl font-bold text-orange-300">
                        Pressure Washing
                    </a>
                </div>
                <span className="text-white lg:text-5xl sm:text-3xl">|</span>
                <div className="flex flex-col space-y-2 text-center mx-12">
                    <a href='/Services' className="text-2xl font-bold text-orange-300">
                        AirBnb Cleaning
                    </a>
                </div>
                <span className="text-white lg:text-5xl sm:text-3xl">|</span>
                <div className="flex flex-col space-y-2 text-center mx-12">
                    <a href='/Services' className="text-2xl font-bold text-orange-300">
                        Commercial Cleaning
                    </a>
                </div>
                <span className="text-white lg:text-5xl sm:text-3xl">|</span>
                <div className="flex flex-col space-y-2 text-center mx-12">
                    <a href='/Services' className="text-2xl font-bold text-orange-300">
                        On Call Repair
                    </a>
                </div>
                <span className="text-white lg:text-5xl sm:text-3xl">|</span>
            </Marquee>
        </div>
    )
}

export default Announcement