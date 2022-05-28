const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  this.timeout(50000);

  let myNFT;
  let owner;
  let acc1;
  let acc2;

  this.beforeEach(async function () {
    // This is executed before each test
    // Deploying the smart contract
    const MyNFT = await ethers.getContractFactory("MyNFT");
    [owner, acc1, acc2] = await ethers.getSigners();

    myNFT = await MyNFT.deploy();
  });

  it("Should set the right owner", async function () {
    expect(await myNFT.owner()).to.equal(owner.address);
  });

  it("Should mint one NFT", async function () {
    expect(await myNFT.balanceOf(acc1.address)).to.equal(0);

    const tokenURI = "https://example.com/1";
    const tx = await myNFT.connect(owner).safeMint(acc1.address, tokenURI);
    await tx.wait();

    expect(await myNFT.balanceOf(acc1.address)).to.equal(1);
  });

  it("Should set the correct tokenURI", async function () {
    const tokenURI_1 = "https://example.com/1";
    const tokenURI_2 = "https://example.com/2";

    const tx1 = await myNFT.connect(owner).safeMint(acc1.address, tokenURI_1);
    await tx1.wait();
    const tx2 = await myNFT.connect(owner).safeMint(acc2.address, tokenURI_2);
    await tx2.wait();

    expect(await myNFT.tokenURI(0)).to.equal(tokenURI_1);
    expect(await myNFT.tokenURI(1)).to.equal(tokenURI_2);
  });

  it("Should transfer nft properly", async function () {
    const tokenURI_1 = "https://example.com/1";
    const tokenURI_2 = "https://example.com/2";

    const tx1 = await myNFT.connect(owner).safeMint(acc1.address, tokenURI_1);
    await tx1.wait();
    const tx2 = await myNFT.connect(owner).safeMint(acc2.address, tokenURI_2);
    await tx2.wait();
    
    const NfTowner = await myNFT.ownerOf(1)

    // const approval = await NfTowner.approve(myNFT.address, 1);
    // await approval.wait()

    const approval = await myNFT.connect(acc2).approve(owner.address, 1);
    await approval.wait()

    const collect = await myNFT.collectNft(1);
    await collect.wait();


    expect(await myNFT.ownerOf(1)).to.equal(owner.address);
  });
  it("Should transfer nft properly, setApprovalAll", async function () {
    const tokenURI_1 = "https://example.com/1";
    const tokenURI_2 = "https://example.com/2";

    const tx1 = await myNFT.connect(owner).safeMint(acc1.address, tokenURI_1);
    await tx1.wait();
    const tx2 = await myNFT.connect(owner).safeMint(acc2.address, tokenURI_2);
    await tx2.wait();
    
    const NfTowner = await myNFT.ownerOf(1)

    // const approval = await NfTowner.approve(myNFT.address, 1);
    // await approval.wait()

    const approval = await myNFT.connect(acc2).setApprovalForAll(owner.address, true);
    await approval.wait()

    const collect = await myNFT.collectNft(1);
    await collect.wait();


    expect(await myNFT.ownerOf(1)).to.equal(owner.address);
  });
  it("Should transfer nft properly, no restictions", async function () {
    const tokenURI_1 = "https://example.com/1";
    const tokenURI_2 = "https://example.com/2";

    const tx1 = await myNFT.safeMint(myNFT.address, tokenURI_1);
    await tx1.wait();
    const tx2 = await myNFT.safeMint(myNFT.address, tokenURI_2);
    await tx2.wait();
    
    const NfTowner = await myNFT.ownerOf(1)

    // const approval = await NfTowner.approve(myNFT.address, 1);
    // await approval.wait()

    // const approval = await myNFT.connect(acc2).setApprovalForAll(owner.address, true);
    // await approval.wait()

    const collect = await myNFT.collectNft(1);
    await collect.wait();


    expect(await myNFT.ownerOf(1)).to.equal(owner.address);
  });
  it("Should transfer nft properly, from person to person, no restriction", async function () {
    const tokenURI_1 = "https://example.com/1";
    const tokenURI_2 = "https://example.com/2";

    const tx1 = await myNFT.connect(acc1).safeMint(acc1.address, tokenURI_1);
    await tx1.wait();
    const tx2 = await myNFT.connect(acc2).safeMint(acc2.address, tokenURI_2);
    await tx2.wait();
    
    const NfTowner = await myNFT.ownerOf(1)

    // const approval = await NfTowner.approve(myNFT.address, 1);
    // await approval.wait()

    // const approval = await myNFT.connect(acc2).setApprovalForAll(owner.address, true);
    // await approval.wait()

    const collect = await myNFT.collectNft(1);
    await collect.wait();

    expect(await myNFT.ownerOf(1)).to.equal(owner.address);
  });
  it("Should revert nft if nft has been claimed", async function () {
    const tokenURI_1 = "https://example.com/1";
    const tokenURI_2 = "https://example.com/2";

    const tx1 = await myNFT.connect(acc1).safeMint(acc1.address, tokenURI_1);
    await tx1.wait();
    const tx2 = await myNFT.connect(acc2).safeMint(acc2.address, tokenURI_2);
    await tx2.wait();
    
    const NfTowner = await myNFT.ownerOf(1)

    // const approval = await NfTowner.approve(myNFT.address, 1);
    // await approval.wait()

    // const approval = await myNFT.connect(acc2).setApprovalForAll(owner.address, true);
    // await approval.wait()

    const collect = await myNFT.collectNft(1);
    await collect.wait();

    expect(myNFT.connect(acc2).collectNft(1)).to.be.revertedWith('This nft has been claimed');
  });
});