// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    mapping(uint => bool) public claimed;

    constructor() ERC721("Abstrakts", "ABTS") {}

    function safeMint(address to, string memory uri) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function getOwner(uint256 tokenId) internal view returns(address owner){
        owner = ownerOf(tokenId);
        return owner;
    } 


    // function collectNft(uint256 tokenId) public{
    //     require(getOwner(tokenId) != address(0), "this tokenId has not been minted");
    //     require(getOwner(tokenId) != msg.sender,"you own this nft");
    //     require(balanceOf(msg.sender) <=3, "you can only collect three nfts at a time");
    //     safeTransferFrom(getOwner(tokenId),msg.sender, tokenId);
    // }

    function collectNft(uint256 tokenId) public{
        require(getOwner(tokenId) != address(0), "this tokenId has not been minted");
        require(getOwner(tokenId) != msg.sender,"you own this nft");
        require(!claimed[tokenId],"This nft has been claimed");
        require(balanceOf(msg.sender) <=3, "you can only collect three nfts at a time");
        _transfer(getOwner(tokenId),msg.sender, tokenId);
        claimed[tokenId] = true;
    }

    function onERC721Received( address operator, address from, uint256 tokenId, bytes calldata data ) pure public returns (bytes4 validity) {
        validity = this.onERC721Received.selector;
        return validity;
    }
}
