import React from 'react'
import Styles from './navbar.module.css'
import {Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Wallet from '../Wallet'
import {useContractKit} from "@celo-tools/use-contractkit";

const NavbarComp = ({ destroy,connect,balance}) => {
    const {address} = useContractKit()
    const handleWalletCollect = () =>{
        connect()
    }

    return (
    <div>
         <Nav className={Styles.navContainer}>
            <Nav.Item className={Styles.navWrapper}>
            <Link to="/">Abstrakt</Link>
                    {
                        address ?
                        <div className={Styles.wallet}>
                               <Wallet
                                address={address}
                                amount={balance.CELO}
                                symbol="CELO"
                                destroy={destroy}
                                />
                                <Link to="/create">NFT Collections</Link>
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
