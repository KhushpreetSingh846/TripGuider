import React from 'react'
import Banner from '../../modules/Banner'
import Explore from '../../modules/Explore'
import AboutHost from '../../modules/AboutHost'
import TryHosting from '../../modules/TryHosting'
import FourCard from '../../modules/FourCard'
import ThreeCard from '../../modules/ThreeCard'
import GetAways from '../../modules/GetAways'
import Footer from '../../modules/Footer'
export default function Index() {
  return (
    <>
    <Banner></Banner>
    <Explore></Explore>
    <AboutHost></AboutHost>
    <FourCard/>
    <TryHosting/>
    <ThreeCard/>
    <GetAways/>
    <Footer/>
    </>
  )
}
