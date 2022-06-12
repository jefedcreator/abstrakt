import { useContractKit } from "@celo-tools/use-contractkit";
import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import AddNfts from "./Add";
import Nft from "./Card";
import Loader from "../../ui/Loader";
import { NotificationSuccess, NotificationError } from "../../ui/Notifications";
import {
  getNfts,
  createNft,
  fetchNftContractOwner,
} from "../../../utils/minter";
import { Row } from "react-bootstrap";
import Owned from "./owned";
import { ToggleButton } from "react-bootstrap";

const NftList = ({ minterContract, name }) => {
    const { performActions, address } = useContractKit();
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nftOwner, setNftOwner] = useState(null);
    const [toggle, setToggle] = useState(false)
    const [empty, setEmpty] = useState(false)

const getAssets = useCallback(async () => {
    try {
      setLoading(true);
      const allNfts = await getNfts(minterContract);
      if (!allNfts) return;
      setNfts(allNfts);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, [minterContract]);


const addNft = async (data) => {
    try {
      setLoading(true);
      await createNft(minterContract, performActions, data);
      toast(<NotificationSuccess text="Updating NFT list...." />);
      getAssets();
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to create an NFT." />);
    } finally {
      setLoading(false);
    }
};


const collectNft = async (index) =>{
  try {
    setLoading(true);
    await collectNft(minterContract,performActions,index)
    toast(<NotificationSuccess text="Updating NFT list...." />);
    getAssets();
  } catch (error) {
    console.log({ error });
    toast(<NotificationError text="Failed to collect an NFT." />);
  }finally{
    setLoading(false)
  }
}

const owned = nfts.filter((nft) => (Number(address) == Number(nft.owner))).length
const handleOwned = () =>{
  if ( owned == 0 ) {
  setEmpty(true)
  } else {
    setEmpty(false)
  }
}
const fetchContractOwner = useCallback(async (minterContract) => {
    // get the address that deployed the NFT contract
    const _address = await fetchNftContractOwner(minterContract);
    setNftOwner(_address);
  }, []);

  useEffect(() => {
    try {
      if (address && minterContract) {
        getAssets();
        fetchContractOwner(minterContract);
        handleOwned()
      }
    } catch (error) {
      console.log({ error });
    }
}, [minterContract, address, getAssets, fetchContractOwner,owned])

if (address) {
    return (
      <>
        {!loading ? (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              {
                toggle ?
                <h1 className="fs-4 fw-bold mb-0 text-white">Collection</h1>
                  :
                <h1 className="fs-4 fw-bold mb-0 text-white">{name}</h1>
              }
              {/*{nftOwner === address ? (*/}
              <div style={{display: 'flex',alignItems:'center'}}>
                {
                  toggle ?
                  <button onClick={() => setToggle(!toggle)} style={{border:'none',backgroundColor:'red',color:'white', padding:'0.5rem', borderRadius:'5px', marginRight:'1rem'}}>
                    Collect
                  </button>:
                  <button onClick={() => setToggle(!toggle)} style={{border:'none',backgroundColor:'red',color:'white',padding:'0.5rem',borderRadius:'5px', marginRight:'1rem'}}>
                    My collection
                  </button>
                }
                <AddNfts save={addNft} address={address} />
              </div>
              {/*) : null}*/}
            </div>
            {
              toggle ?
              <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
              {
                empty ? 
                  <div style={{width:'100%',height:'70vh',display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <p className="fs-4 fw-light mb-0 text-white text-center">Your collection is currently empty. Collect abstraksts from the marketplace or mint some 😉</p>
                  </div>
                  :
                  nfts.filter((nft) => (Number(address) == Number(nft.owner))).map((nft) =>
                  ( <Owned
                     key={nft.index}
                     nft={{...nft}}
                   />)
                   )
              }
              </Row>
              :
              <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
              {nfts.map((_nft) => (
                <Nft
                  key={_nft.index}
                  nft={{
                    ..._nft,
                  }}
                />
              ))}
            </Row>
            }       
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
  return null;
}

NftList.propTypes = {
    minterContract: PropTypes.instanceOf(Object),
    updateBalance: PropTypes.func.isRequired,
  };

  NftList.defaultProps = {
    minterContract: null,
  };

export default NftList;
