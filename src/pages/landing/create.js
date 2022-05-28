import React, { useEffect } from 'react'
import Nfts from '../../components/minter/nfts'
import NavbarComp from '../../components/navbar/navbar'
import Styles from './create.module.css'

const Create= ({getBalance,minterContract,address,destroy,connect,balance}) => {

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
