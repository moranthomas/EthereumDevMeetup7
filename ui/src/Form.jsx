/*jshint esversion: 6 */
import React, { Component } from 'react';
import Web3 from 'web3';
//import { contractJSON } from '../../Wallet/build/contracts/Wallet.json';

export class Form extends Component {

    componentWillMount() {
        this.loadBlockchainData();
        this.getContractABI('../../Wallet/build/contracts/Wallet.json');

        var WalletContract = new web3.eth.Contract(contractAbi, contractAddress);
        console.log(WalletContract);
    }

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            account: '',
            contractABI: '',
            contractAddress: '0x778f2614776fB677965d0E4eb1Ae9803C64bCd56',
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('This amount of DAI was deposited : ' + this.state.value);
        event.preventDefault();
    }

    async loadBlockchainData() {
        const ganacheUrl = "http://localhost:8545";
        let web3Provider = new Web3.providers.HttpProvider(ganacheUrl);
        const web3 = new Web3(web3Provider);
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        this.setState({ account: accounts[0] });
    }

    getContractABI(JsonFile) {
        //const contractJSON = JSON.parse(fs.readFileSync(JsonFile, 'utf8'));
        const abiString = JSON.stringify(JsonFile.abi);
        console.log(JsonFile.abi);
        const abi = [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "balance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "data", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "save", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "recipient", "type": "address" } ], "name": "spend", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "balanceFunction", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "payMe", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" } ], "stateMutability": "payable", "type": "function", "payable": true }, { "inputs": [ { "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "sendCoin", "outputs": [ { "internalType": "bool", "name": "sufficient", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "addr", "type": "address" } ], "name": "getBalanceInEth", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "internalType": "address", "name": "addr", "type": "address" } ], "name": "getBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true } ];
        this.setState({ contractABI: abi });
    }

    render() {
        const inputStyle = { padding: '5px', margin: '30px' };
        const accountsStyle = { fontSize: 16 };

        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label > Deposit DAI:
                    <input style={inputStyle} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <p style = {accountsStyle} >Your account: {this.state.account}</p>
            </form>
            </div>
        )
    }
}

export default Form
