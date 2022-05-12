import React from 'react'
import Styles from './explore.module.css'
import explore1 from '../../assets/img/explore1.png'
import explore2 from '../../assets/img/explore2.png'
import explore3 from '../../assets/img/explore3.png'

const Explore = () => {
  return (
    <main className={Styles.cover}>
      <div className={Styles.container}>
          <div className={Styles.wrapper}>
            <div>
              <h3>Explore Collections</h3>
              <p>Explore the fastest selling collections on Artry</p>
            </div>
            <div className={Styles.collection}>
              <p>Collections</p>
            </div>
        </div>
        <div className={Styles.explore}>
          <div>
            <div>
              <img src={explore1} alt="" />
            </div>
            <div className={Styles.details}>
              <p>Abstract Art collection</p>
              <p>12 collections</p>
            </div>
          </div>
          <div>
            <div>
                <img src={explore2} alt="" />
              </div>
              <div className={Styles.details}>
                <p>Modern Art collection</p>
                <p>12 collections</p>
              </div>
            </div>
          <div>
            <div>
                <img src={explore3} alt="" />
              </div>
              <div className={Styles.details}>
                <p>Colorful modern Art collection</p>
                <p>12 collections</p>
              </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Explore