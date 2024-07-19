import Miami from '../assets/Miami.jpg'
import ServiceSection from '../components/ServiceSection'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto lg:pt-10 sm:pt-2 px-6 overflow-hidden">
      <div className='overflow-hidden'>
        <h1 className='text-6xl font-bold text-center text-blue-500 mt-6 py-3'>
          About{" "}<span className='text-orange-500'>us</span>
        </h1>
        <p className='text-center lg:text-2xl sm:text-xl font-medium'>
          We are a team of passionate individuals who are dedicated to providing the best quality maintenance services to our clients
        </p>
        <div className='w-full md:w-full sm:w-1/2 pt-6 lg:flex sm:items-center sm:justify-center lg:w-full py-3 lg:text-left px-3 border-b border-orange-500'>
          <img className='lg:h-[400px] lg:w-[400px] sm:h-200 sm:w-200 md:max-w-full md:mr-5 border-4 lg:m-4 border-orange-500 rounded-md md:items-center' alt='City' src={Miami} />
          <p className='lg:text-2xl text-black mt-2 lg:mr-24 sm:text-xl font-medium'>
            Market 360 Solutions LLC is your go-to provider for top-notch painting and cleaning services in
            Miami Dade, Broward, and Monroe County. Whether you own a residential or commercial
            property, or manage an Airbnb, we have the expertise and commitment to quality to meet your
            needs. As a licensed and insured company, we guarantee excellent craftsmanship, attention to
            detail, and the best pricing in the market. Our team is bilingual and background-checked,
            ensuring a reliable and trustworthy service. No job is too big or too small for us. Get a free quote
            today!
          </p>
        </div>
        <div className='w:full md:w-full text-4xl lg:text-4xl md:text-3xl'>
          <h1 className='font-bold text-center text-blue-500 mt-5'>
            Ready to transform your property with Market<span className='text-orange-500'>360</span> Solutions LLC?
          </h1>
        </div>
        <div className='w-full md:w-full sm:w-1/2 pt-2 lg:flex sm:items-center sm:justify-center lg:w-full py-3 sm:m-8 lg:text-center px-3 pb-3'>
          <p className='lg:text-3xl text-black lg:mr-24 sm:text-xl font-medium'>
            We offer free quotes for all our services, ensuring you get the best value for your investment. Simply fill out the form below,
            and one of our representatives will contact you to discuss your project in detail. Whether you
            need painting, stucco repair, professional cleaning, or pressure washing, we are here to help.
            Experience our commitment to quality, attention to detail, and excellent pricing. Get your free
            quote today and let us take care of your property needs.
          </p>
        </div>
        <ServiceSection />
      </div>
    </div>
  )
}

export default About