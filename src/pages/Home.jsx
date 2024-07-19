import React from 'react'
import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/ServiceSection'
import WorkFlow from '../components/WorkFlow'
import Pricing from '../components/Pricing'
import Maintenance from '../components/Maintenance'
import Testimonials from '../components/Testimonials'



function Home() {
  return (
    <div className="max-w-7xl mx-auto lg:pt-20 sm:pt-2 px-6">
    <HeroSection />
    <ServiceSection />
    <WorkFlow />
    <Maintenance />
    <Pricing />
    <Testimonials />
    </div>
  )
}

export default Home