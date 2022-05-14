import React from "react";
import {useBalance, useMinterContract} from "./hooks";
import { BrowserRouter, Link, Routes,Route } from "react-router-dom";

import {useContractKit} from "@celo-tools/use-contractkit";

import "./App.css";
import Landing from './pages/landing/landing'
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

    // const[showWallet, setShowWallet] = useState(false)


    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Landing
                    address = {address}
                    destroy ={destroy}
                    connect={connect}
                    balance={balance}
                    getBalance={getBalance}
                    />}
                    />
                    <Route path="/create" element={<Create
                        getBalance={getBalance}
                        minterContract={minterContract}
                        address = {address}
                        destroy ={destroy}
                        connect={connect}
                        balance={balance}
                    />}
                    />

            </Routes>
        </BrowserRouter>
    );
};

export default App;
