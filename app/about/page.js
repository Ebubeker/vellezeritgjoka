import React from 'react'
import Hero from '@/components/about/Hero'
import WhoAreWe from '@/components/about/WhoAreWe'
import CompanyInfo from '@/components/about/CompanyInfo'
import Counter from '@/components/about/Counter'
import WhyUs from '@/components/about/WhyUs'

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <WhoAreWe />
      <CompanyInfo />
      <CompanyInfo />
      <Counter />
      <WhyUs />
    </div>
  )
}

export default AboutPage