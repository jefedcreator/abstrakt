import React from 'react'
import Styles from './extra.module.css'
import extra1 from '../../assets/img/extra1.png'
import extra2 from '../../assets/img/extra2.png'
import extra3 from '../../assets/img/extra3.png'
import extra4 from '../../assets/img/extra4.png'

const Extra = () => {
  return (
      <main className={Styles.cover}>
        <div className={Styles.wrapper}>
            <div>
                <img src={extra1} alt="" />
                <h6>
                    Grow your digital art collection
                </h6>
                <p>
                    Add new, rare, trending art to your collection
                </p>
            </div>
            <div>
                <img src={extra2} alt="" />
                <h6>
                    Grow your digital art collection
                </h6>
                <p>
                    Add new, rare, trending art to your collection
                </p>
            </div>
            <div>
                <img src={extra3} alt="" />
                <h6>
                    Grow your digital art collection
                </h6>
                <p>
                    Add new, rare, trending art to your collection
                </p>
            </div>
            <div>
                <img src={extra4} alt="" />
                <h6>
                    Grow your digital art collection
                </h6>
                <p>
                    Add new, rare, trending art to your collection
                </p>
            </div>
        </div>
      </main>
  )
}

export default Extra