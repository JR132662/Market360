import { testimonials } from "../constants";
import { motion } from 'framer-motion';

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Adjusted stagger time for a slower effect
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        duration: 1.5, // Slower duration for the fade-in
        delay: Math.random() * 2, // Random delay between 0 to 2 seconds
      },
    }),
  };

  return (
    <div className="mt-20 tracking-wide">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl my-10 text-center sm:text-5xl md:text-4xl lg:text-6xl lg:my-20">
          What our clients <span className="text-orange-500">have to say</span>
        </h2>
        <motion.div
          className="flex flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
              custom={index}
              variants={itemVariants}
            >
              <div className="bg-white border rounded-md p-6 text-md font-medium text-orange-500">
                <p className="text-center">{testimonial.text}</p>
                <div className="flex mt-8 items-center">
                  <img
                    className="w-12 h-12 mr-6 rounded-full border border-orange-500"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <h6 className="text-black">{testimonial.user}</h6>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
