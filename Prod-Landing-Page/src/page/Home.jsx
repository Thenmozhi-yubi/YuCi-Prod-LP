import React from 'react'
import TopNav from '../components/TopNav'
import Hero from '../components/Hero'
import Feature from '../components/Feature'

const Home = ({ heroConfig, navConfig , featureConfig}) => {
  return (
    <div>
       <TopNav config={navConfig} />
       <Hero
        title={heroConfig.title}
        subtitle={heroConfig.subtitle}
        bgImage={heroConfig.bgImage}
        buttonText={heroConfig.buttonText}
      />
      <Feature featureConfig={featureConfig} />
    </div>
  )
}

export default Home