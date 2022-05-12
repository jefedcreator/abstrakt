import React from 'react'
import Header from '../../components/header/header'
import Nfts from '../../components/minter/nfts'
import NavbarComp from '../../components/navbar/navbar'
import Styles from './create.module.css'

const Create= ({getBalance,minterContract,showWallet,setShowWallet,address,destroy,connect,balance}) => {
  return (
    <main className={Styles.cover}>
        <div className={Styles.container}>
            <NavbarComp
                address = {address}
                destroy ={destroy} 
                connect={connect}
                balance={balance}
                getBalance={getBalance}
                showWallet={showWallet}
                setShowWallet={setShowWallet}
            />
            <Nfts
                name="My Collection"
                updateBalance={getBalance}
                minterContract={minterContract}
            />
        </div>
    </main>
  )
}

export default Create
