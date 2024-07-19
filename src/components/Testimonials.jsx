import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl my-10 text-center sm:text-5xl md:text-4xl lg:text-6xl lg:my-20">What our clients {" "}<span className="text-orange-500">have to say</span></h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="bg-white border rounded-md p-6 text-md font-medium text-orange-500">
                            <p className="text-center">{testimonial.text}</p>
                            <div className="flex mt-8 items-center">
                                <img className="w-12 h-12 mr-6 rounded-full border border-orange-500" src={testimonial.image} 
                                alt={testimonial.name} />
                                <div>
                                    <h6 className="text-black">
                                        {testimonial.user}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonials