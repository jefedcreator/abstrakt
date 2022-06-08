import React,{useEffect, useState} from 'react'
import Styles from './navbar.module.css'
import {Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Wallet from '../Wallet'
import {useContractKit} from "@celo-tools/use-contractkit";

const NavbarComp = ({ destroy,connect,balance}) => {
    const [showCreate, setShowCreate] = useState(true)
    const {address} = useContractKit()
    const handleWalletCollect = () =>{
        connect()
    }

    const handleRoute = () =>{
        const currentURL = window.location.pathname
        if (currentURL == '/create') {
            setShowCreate(false)
        } 
    }

    useEffect(()=>{
        handleRoute()
    },[])

    return (
    <div>
         <Nav className={Styles.navContainer}>
            <Nav.Item className={Styles.navWrapper}>
            <Link to="/">Abstrakt</Link>

                    {
                        address ?
                        <div className={Styles.wallet}>
                            {
                                showCreate ?
                                <div>
                                <Wallet
                                address={address}
                                amount={balance.CELO}
                                symbol="CELO"
                                destroy={destroy}
                                />
                                <Link to="/create">Create</Link>
                                </div> 
                                :
                                <Wallet
                                address={address}
                                amount={balance.CELO}
                                symbol="CELO"
                                destroy={destroy}
                                />
                            }

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
