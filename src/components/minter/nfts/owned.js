import React,{useState,useEffect,useCallback} from 'react'
import PropTypes from "prop-types";
import { Card, Col, Badge, Stack, Row } from "react-bootstrap";
import { truncateAddress } from "../../../utils";
import Identicon from "../../ui/Identicon";


const Owned = ({nft}) => {
  const { image, description, owner, name, index } = nft;

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
      </Card.Body>
    </Card>
  </Col>
  )
}

Owned.propTypes = {
    // props passed into this component
    nft: PropTypes.instanceOf(Object).isRequired,
};

export default Owned