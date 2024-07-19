import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import logo from "../assets/logo.png";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <img className="h-30 w-30 mr-2 lg:hidden sm:block md:hidden pt-[-20px]" src={logo} alt="Logo" />
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-medium">
                <span className="text-blue-500">Market</span><span className="text-orange-500">360</span>
                {" "}Maintenance Services For Businesses
            </h1>
            <p className="text-center mt-2 lg:text-2xl md:text-md sm:text-sm max-w-4xl">
                We provide top-notch painting and cleaning services in
                Miami Dade, Broward, and Monroe County. Whether you own a residential or commercial
                property, or manage an Airbnb, we have the expertise and commitment necesarry to fulfill your
                needs.
            </p>
            <div className="flex justify-center my-10">
                <a href="/About" className="bg-blue-500 text-white px-6 border rounded-md">
                    <button className="py-2 rounded-md">Learn More</button>
                </a>
                <a href="#services" className="bg-orange-500 text-white border rounded-md px-6 mx-3">
                    <button className="py-2 rounded-md">Free Quote</button>
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className='rounded-lg w-1/2 border-2 border-blue-500 shadow-amber-400 mx-2 my-4'>
                    <source src={video1} type="video/mp4" />
                </video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border-2 border-amber-400 shadow-amber-400 mx-2 my-4'>
                    <source src={video2} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default HeroSection