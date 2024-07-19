import { CheckCircle2 } from "lucide-react";
import { pricingOptions2 } from "../constants"
import { motion } from "framer-motion";

const Maintenance2 = () => {
  return (
    <div className="mt-20 border-b-2 border-orange-500 pb-3">
      <h2 className="text-orange-400 text-center text-3xl font-bold sm:text-5xl lg:text-6xl tracking-wide my-8">Commercial Maintenance {" "}<span className="text-blue-500">Services</span></h2>
      <div className="flex flex-wrap">
        {pricingOptions2.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-blue-500 rounded-xl">
                <p className="text-orange-400 text-2xl mb-8">
                  {option.title}
                </p>
                <ul>
                 {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center mt-8">
                      <CheckCircle2 className="w-6 h-6 text-blue-500" />
                      <span className="ml-2 font-medium">{feature}</span>
                  </li>
                 ))}
                </ul>
                <div className="mt-8 text-center items-center space-x-12">
                <a href="https://calendly.com/rodtechdevelopment/30min">
                  <motion.button whileHover={{scale: 1.5}} className="border-2 border-blue-500 my-8 text-md bg-orange-400 text-white rounded py-2 px-8 justify-center cursor-pointer">
                    Get a free quote
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Maintenance2