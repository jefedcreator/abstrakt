import React from 'react'
import Styles from './banner.module.css'
import exploreCard from '../../assets/img/exploreCard.png'

const Banner = () => {
  return (
    <main className={Styles.cover}>
        <div className={Styles.container}>
            <div>
                <h2>
                Explore and discover top trending NFTs
                </h2>
                <p>
                A coalition of NGO's, entreprenuers and tech companies providing guidance, advice and persoanlised help to our members.
                </p>
                <button>
                    Browse nfts
                </button>
            </div>
            <div>
                <img src={exploreCard} alt="" />
            </div>
        </div>
    </main>
  )
}

export default Banner