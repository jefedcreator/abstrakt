import React from 'react'
import Styles from './footer.module.css'
import twitter from '../../assets/img/twitter.svg'
import dribble from '../../assets/img/dribble.svg'
import instagram from '../../assets/img/instagram.svg'
import youtube from '../../assets/img/youtube.svg'

const Footer = () => {
  return (
      <main className={Styles.cover}>
        <div className={Styles.container}>
            <div>
                <p>Copyright © 2022</p>
                <p>All rights reserved</p>
                <span>
                    <img src={instagram} alt="" />
                    <img src={dribble} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                </span>
            </div>
            <div>
                <div>
                    <h6>Company</h6>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                </div>
                <div>
                    <h6>Support</h6>
                    <p>Help center</p>
                    <p>Terms of service</p>
                    <p>Legal</p>
                    <p>Privacy policy</p>
                    <p>Status</p>
                </div>
                <div>
                    <h6>Stay up to date</h6>
                    <input type="text" name="" id="" />
                </div>
            </div>
        </div>
      </main>
  )
}

export default Footer