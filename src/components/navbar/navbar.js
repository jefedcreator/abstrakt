import React from 'react'
import Styles from './navbar.module.css'
import {Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Wallet from '../Wallet'

const NavbarComp = ({ address,destroy,connect,balance,getBalance,showWallet,setShowWallet}) => {
    const handleWalletCollect = () =>{
        connect()
        setShowWallet(true)
    }

    return (
    <div>
         <Nav className={Styles.navContainer}>
            <Nav.Item className={Styles.navWrapper}>
            <Link to="/">Abstrakt</Link>
                    {/* <Link to="/">Explore</Link>
                    <Link to="/marketplace">Marketplace</Link>
                    <Link to="artist">Artist</Link>
                    <Link to="/collection">Collection</Link> */}

                    {/*display user wallet*/}
                    {
                        showWallet ? 
                        <div className={Styles.wallet}>
                               <Wallet
                                address={address}
                                amount={balance.CELO}
                                symbol="CELO"
                                destroy={destroy}
                                showWallet={showWallet}
                                setShowWallet={setShowWallet}
                                />
                                <Link to="/create">Create</Link>
                        </div>
                        : 
                        <button onClick={handleWalletCollect}>
                            Connect Wallet
                        </button>
                    }
             </Nav.Item>
        </Nav>
    </div>
  )
}

export default NavbarComp