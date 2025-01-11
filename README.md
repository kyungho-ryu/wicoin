
# **WiCoin: Wireless LAN Sharing Using Blockchain Technology**

WiCoin introduces a blockchain-based system designed to enable the efficient sharing of Wireless Local Area Networks (WLAN). This approach addresses the growing issue of mutual interference among devices using unlicensed frequency bands. By leveraging blockchain technology and smart contracts, WiCoin facilitates secure and transparent transactions, incentivizing cooperation among users.

## **Key Features**
- **Blockchain-based Access Mechanism**: Users can securely access any WLAN access point by making payments through smart contracts.
- **Proof-of-Authority Algorithm**: Enables real-time transactions with reduced computational power requirements compared to Proof-of-Work.
- **Cryptocurrency Integration**: Incentivizes users to share resources by rewarding them with ERC20 tokens.

For more technical details, refer to the original paper:  
[**"WiCoin: Blockchain-based WLAN Sharing"**](https://www.koreascience.or.kr/article/JAKO201911338887857.page)

---

## **Repository Contents**

### **Smart Contract Implementation**
- **`/build/contracts/netcoin.sol`**  
  Implements ERC20-based token functionality for WLAN sharing.  
  - Manages transactions between WLAN providers and users through blockchain.

### **Blockchain Connection**
- **`/connection/connect.js`**  
  Establishes communication between the blockchain network and the server.  
  - Utilizes `web3.js` to handle interactions with smart contracts and blockchain data.

---

## **Demo Video**
Watch the demonstration of WiCoin in action:  
[**Demo Video Link**](#) *(Replace `#` with the actual video link)*

---

## **How to Run the Project**

### **1. Prerequisites**
- Node.js and npm installed.
- A local blockchain environment (e.g., Ganache or an Ethereum-based test network).

### **2. Setup Instructions**
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-repo-link.git
   cd WiCoin
   ```
### **2. Install dependencies:
```bash
npm install
```
### **3. Deploy the smart contract:
```bash
truffle migrate --network development
```
### **4. Run the server:
```bash
node connect.js
```

## Demo video
<img src="https://user-images.githubusercontent.com/73271891/154790082-2f441ea1-16d0-41ac-b7ae-3c4d373c9afc.gif">

