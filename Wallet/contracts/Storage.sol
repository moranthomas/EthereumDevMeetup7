pragma solidity ^0.6.0;

contract Storage {

    string public data;

    function getData() view external returns(string memory) {
        return data;
    }

    function setData(string calldata _data) external {
        data = _data;
    }
}