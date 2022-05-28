import React from 'react'
import heroImg from '../../assets/img/heroimg.png'
import Styles from './header.module.css'
import arrowright from '../../assets/img/arrow-right.svg'
import NavbarComp from '../navbar/navbar'


const Header = ({address,destroy,connect,balance,getBalance}) => {

  return (
      <main className={Styles.cover}>
      <div className={Styles.container}>
        <NavbarComp
             address = {address}
             destroy ={destroy}
             connect={connect}
             balance={balance}
             getBalance={getBalance}
        />
        <div className={Styles.heroContainer}>
            <div className={Styles.heroWrapper}>
                <h2>Create and Collect your own unique digital art</h2>
                <p> Digital mintplace for crypto collections and nonfungible tokens(NFTs) Discover ultimate rare digital art,
                    and collect up to 3 of your favorites, for free
                </p>
                {/* <div className={Styles.buttons}>
                    <div>Explore art</div>
                    <div>
                       <p style={{'margin':'0'}}>Learn more</p>
                        <img src={arrowright} alt="" />
                    </div>
                </div> */}
                <div className={Styles.numbers}>
                    <div>
                        <h5>200k</h5>
                        <p>Artwork</p>
                    </div>
                    <div>
                        <h5>43k</h5>
                        <p>Auction</p>
                    </div>
                    <div>
                        <h5>20k</h5>
                        <p>Artist</p>
                    </div>
                </div>
                {/* <div className={Styles.logo}>
                    <p>Supported by:</p>
                    <div className={Styles.sponsors}>
                        <img src={coinbase} alt="" />
                        <img src={celo} alt="" />
                    </div>
                </div> */}
            </div>
            <div className={Styles.bannerContainer}>
                <img src={heroImg} alt="" />
            </div>
        </div>
    </div>
</main>
  )
}

export default Header
