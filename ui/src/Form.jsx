/*jshint esversion: 8 */
import React, { Component } from 'react';
import Web3 from 'web3';
//import { contractJSON } from '../../Wallet/build/contracts/Wallet.json';
import { contractAbi, contractAddress } from './config';


export class Form extends Component {

    componentWillMount() {

        this.loadBlockchainData();
        //this.getContractABI('../../Wallet/build/contracts/Wallet.json');
        this.getContractAbiFromConfig();
        this.getWalletAddressFromConfig();
        this.createContract();
        
    }

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            account: '',
            contractABI: '',
            contractAddress: '',
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

    getContractAbiFromConfig() {
        this.setState( {contractAbi: this.contractABI});
    }

    getWalletAddressFromConfig() {
        this.setState( {contractAddress: this.contractAddress});
    }

    getContractABI(JsonFile) {
        //const contractJSON = JSON.parse(fs.readFileSync(JsonFile, 'utf8'));
        const abiString = JSON.stringify(JsonFile.abi);
        console.log(JsonFile.abi);
        const abi = contractAbi;
        this.setState({ contractABI: abi });
    }

    async createContract() {
        const ganacheUrl = "http://localhost:8545";
        let web3Provider = new Web3.providers.HttpProvider(ganacheUrl);
        const web3 = new Web3(web3Provider);
        const contractInstance  = new web3.eth.Contract(contractAbi, contractAddress);
        let contractMethods = await contractInstance.methods;
        console.log(contractMethods);
        return contractInstance;
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
