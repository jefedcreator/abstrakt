import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import { Card, Col, Badge, Stack, Row } from "react-bootstrap";
import { truncateAddress } from "../../../utils";
import Identicon from "../../ui/Identicon";
import { useContractKit } from "@celo-tools/use-contractkit";
import { useMinterContract } from "../../../hooks";
import { toast } from "react-toastify";
import Owned from './owned'

const NftCard = ({ nft }) => {
  const { image, description, owner, name, index } = nft;
  const { performActions, address } = useContractKit();
  const [claim, setClaim] = useState();
  const minterContract = useMinterContract();



  const collectNft = async (index) => {
    await performActions(async (kit) => {
        const { defaultAccount } = kit;
        try {
            let transaction = await minterContract.methods.collectNft(index).send({ from: defaultAccount });
            return transaction;
        } catch (error) {
            console.log("Error collecting nft ", error);
        }
    });
  };

  const fetchNftStatus = async (index) => {
    try {
        const claims = await minterContract.methods.claimed(index).call();
        setClaim(claims)
    } catch (e) {
        console.log({e});
    }
  };

  useEffect(
    ()=>{
     fetchNftStatus(index) 
    }
  )


  return (
    <Col key={index}>
      <Card className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <Identicon address={owner} size={28} />
            <span className="font-monospace text-secondary">
              {truncateAddress(owner)}
            </span>
            <Badge bg="secondary" className="ms-auto">
              {index} ID
            </Badge>
          </Stack>
        </Card.Header>

        <div className=" ratio ratio-4x3">
          <img src={image} alt={description} style={{ objectFit: "cover" }} />
        </div>

        <Card.Body className="d-flex flex-row text-center justify-content-between">
          <div>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="flex-grow-1">{description}</Card.Text>
          </div>
          <Row className="mt-2">
            {
              claim
               ?
                <button disabled style={{border:'none',backgroundColor:'grey',color:'white'}}>
                  Claimed
                </button>
                 :
               <button style={{border:'none',backgroundColor:'red',color:'white'}} onClick={()=>{collectNft(index)}}>
                Claim
               </button> 
            }

          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};



NftCard.propTypes = {
  // props passed into this component
  nft: PropTypes.instanceOf(Object).isRequired,
};

export default NftCard;