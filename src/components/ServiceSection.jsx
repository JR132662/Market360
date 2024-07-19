import { features } from "../constants"
const ServiceSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900">
                <h1 className="text-blue-500 rounded-full h-3 text-3xl font-medium px-2 py-1 uppercase">
                 <span className="text-orange-400">Our</span>{" "}Services
                </h1>
                <h2 className="mt-10 text-3xl sm:text-5xl lg:text-6xl lg:mt-20 tracking wide">Maintenance Made <span className="text-orange-400">Simple.</span></h2>
            </span>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
            <div className="w-full sm:1/2 lg:w-1/3" key={index}>
                <div className="flex">
                    <div className="flex mx-7 h-10 w-10 p-2 bg-orange-400 text-black justify-center items-center rounded-full">
                        {feature.icon}
                    </div>
                    <div>
                        <h5 className="mt-1 mb-6 text-xl font-bold text-blue-500">
                            {feature.text}
                        </h5>
                        <p className="-mt-5 mb-5 sm:mb-2">
                            {feature.description}
                        </p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default ServiceSection