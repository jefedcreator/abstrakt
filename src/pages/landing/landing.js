import React from 'react'
import Trending from '../../components/trending/trending'
import Explore from '../../components/explore/explore'
import Banner from '../../components/banner/banner'
import Extra from '../../components/extra/extra'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'


const Landing = ({address,destroy,connect,balance,getBalance}) => {
  return (
    <div>
        <Header
          address = {address}
          destroy ={destroy}
          connect={connect}
          balance={balance}
          getBalance={getBalance}
        />
        <Trending/>
        <Explore/>
        <Banner/>
        <Extra/>
        <Footer/>
    </div>
  )
}

export default Landing
