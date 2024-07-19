import { CheckCircle2 } from "lucide-react"
import Cleaning from '../assets/Cleaning.jpg'
import { checklistItems } from "../constants"


const WorkFlow = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            Maintain an <span className="text-blue-500">Impeccable</span>{" "}<span className="text-orange-400">Standard</span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-1 mt-14 w-full lg:w-1/2 ">
                <img src={Cleaning} className="w-full border-2 border-blue-500 shadow-amber-400" alt="code" />
            </div>
            <div className="p-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-blue-500 mx-6 bg-orange-400 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 className="text-black" />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl text-blue-500">{item.title}</h5>
                            <p className="text-md text-color-amber-400">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WorkFlow