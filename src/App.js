import React,{useState} from "react";
import Cover from "./components/minter/Cover";
import {Notification} from "./components/ui/Notifications";
import {useBalance, useMinterContract} from "./hooks";
import { BrowserRouter, Link, Routes,Route } from "react-router-dom";

import Nfts from "./components/minter/nfts";
import {useContractKit} from "@celo-tools/use-contractkit";

import coverImg from "./assets/img/nft_geo_cover.png";
import "./App.css";
import Landing from './pages/landing/landing'
import {Container, Nav} from "react-bootstrap";
import Create from "./pages/landing/create";

const App = function AppWrapper() {
    /*
    address : fetch the connected wallet address
    destroy: terminate connection to user wallet
    connect : connect to the celo blockchain
     */
    const {address, destroy, connect} = useContractKit();

    //  fetch user's celo balance using hook
    const {balance, getBalance} = useBalance();

    // initialize the NFT mint contract
    const minterContract = useMinterContract();

    const[showWallet, setShowWallet] = useState(false)


    return (
        <BrowserRouter>
            <Routes>
            {/* <Notification/> */}
                    <Route path="/" element={<Landing
                    address = {address}
                    destroy ={destroy} 
                    connect={connect}
                    balance={balance}
                    getBalance={getBalance}
                    showWallet={showWallet}
                    setShowWallet={setShowWallet}
                    />}
                    />
                    <Route path="/create" element={<Create
                        getBalance={getBalance}
                        minterContract={minterContract}
                        address = {address}
                        destroy ={destroy} 
                        connect={connect}
                        balance={balance}
                        showWallet={showWallet}
                        setShowWallet={setShowWallet}
                    />}
                    />
                    {/* <main>
 
                        {/*list NFTs*/}
                        
                    {/* </main> */} 
            </Routes>
        </BrowserRouter>
    );
};

export default App;