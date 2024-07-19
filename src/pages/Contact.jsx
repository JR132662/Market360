import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="w-full text-center">
        <div className='border-b border-orange-500'>
          <h1 className=" text-5xl lg:text-6xl font-bold text-blue-500 py-5 px-3">
            Contact us
          </h1>
        </div>
        <div>
          <a href="tel:+1 (305) 632-4462">
            <h2 className=" text-3xl lg:text-2xl font-bold py-4 px-3 text-blue-500">
            <span className='text-orange-500'>+1</span><span className=''>(305)</span><span className='text-orange-500'>-632-4462</span>
            </h2>
          </a>
        </div>
        <div>
          <a href="mailto:info@market360solutions.com">
            <h2 class="text-xl lg:text-2xl font-bold text-orange-500 py-3 px-3 uppercase">
              Info@market360solutions.com
            </h2>
          </a>
        </div>
        <div className=''>
            <p className='text-xl text-left lg:text-center p-4 lg:text-base lg:mb-4 py-2 font-medium uppercase'>
                Reach out to our team if you have any questions or inquiries regarding how we can help your business. we are availiable 24/7 to assist our partners.
            </p>
        </div>
        <iframe title='map' width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5055%20Collins%20Ave,%20Miami%20Beach,%20FL%2033140+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
    </div>
  )
}

export default Contact