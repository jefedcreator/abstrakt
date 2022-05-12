import React from 'react'
import Styles from './trending.module.css'
import Trending1 from '../../assets/img/Trending1.png'
import Trending2 from '../../assets/img/Trending2.png'
import Trending3 from '../../assets/img/Trending3.png'
import Trending4 from '../../assets/img/Trending4.png'
import Trending5 from '../../assets/img/Trending5.png'
import Trending6 from '../../assets/img/Trending6.png'
import Trending7 from '../../assets/img/Trending7.png'
import Trending8 from '../../assets/img/Trending8.png'
import eth from '../../assets/img/logos_ethereum.svg'
import horizontal from '../../assets/img/more-horizontal.png'

const Trending = () => {
  return (
    <main className={Styles.cover}>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div>
            <h3>Trending Items</h3>
            <p>Explore whats trending on Artry</p>
          </div>
          <div className={Styles.popular}>
            <p>Popular NFTs</p>
          </div>
        </div>
        <div className={Styles.trending}>
          <div>
            <div>
              <img src={Trending1} alt="" />
            </div>
            <div className={Styles.details}>
              <p>Desperate Apewives</p>
              <p>Desperate Apewife #3782</p>
              <div>
                  <span>
                    <img src={eth} alt="" />
                    <p>2</p>
                  </span>
                  <img src={horizontal} alt="" />
                </div>
            </div>
          </div>
          <div>
            <div>
                <img src={Trending2} alt="" />
              </div>
              <div className={Styles.details}>
                <p>Desperate Apewives</p>
                <p>Desperate Apewife #3782</p>
                <div>
                  <span>
                    <img src={eth} alt="" />
                    <p>2</p>
                  </span>
                  <img src={horizontal} alt="" />
                </div>
              </div>
            </div>
          <div>
            <div>
                <img src={Trending3} alt="" />
              </div>
              <div className={Styles.details}>
                <p>Desperate Apewives</p>
                <p>Desperate Apewife #3782</p>
                <div>
                  <span>
                    <img src={eth} alt="" />
                    <p>2</p>
                  </span>
                  <img src={horizontal} alt="" />
                </div>
              </div>
            </div>
          <div>
            <div>
                <img src={Trending4} alt="" />
              </div>
              <div className={Styles.details}>
                <p>Desperate Apewives</p>
                <p>Desperate Apewife #3782</p>
                <div>
                  <span>
                    <img src={eth} alt="" />
                    <p>2</p>
                  </span>
                  <img src={horizontal} alt="" />
                </div>
              </div>
            </div>
          <div>
            <div>
                <img src={Trending5} alt="" />
              </div>
              <div className={Styles.details}>
                <p>Desperate Apewives</p>
                <p>Desperate Apewife #3782</p>
                <div>
                  <span>
                    <img src={eth} alt="" />
                    <p>2</p>
                  </span>
                  <img src={horizontal} alt="" />
                </div>
              </div>
            </div>
          <div> 
            <div>
                <img src={Trending6} alt="" />
              </div>
              <div className={Styles.details}>
                <p>Desperate Apewives</p>
                <p>Desperate Apewife #3782</p>
                <div>
                  <span>
                    <img src={eth} alt="" />
                    <p>2</p>
                  </span>
                  <img src={horizontal} alt="" />
                </div>
              </div>
            </div>
          <div>
            <div>
                <img src={Trending7} alt="" />
              </div>
              <div className={Styles.details}>
                <p>Desperate Apewives</p>
                <p>Desperate Apewife #3782</p>
                <div>
                  <span>
                    <img src={eth} alt="" />
                    <p>2</p>
                  </span>
                  <img src={horizontal} alt="" />
                </div>
              </div>
            </div>
          <div>
            <div>
                <img src={Trending8} alt="" />
              </div>
              <div className={Styles.details}>
                <p>Desperate Apewives</p>
                <p>Desperate Apewife #3782</p>
                <div>
                  <span>
                    <img src={eth} alt="" />
                    <p>2</p>
                  </span>
                  <img src={horizontal} alt="" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Trending