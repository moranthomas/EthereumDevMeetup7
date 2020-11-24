pragma solidity ^0.6.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
//https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol;

interface IYDAI {
  function deposit(uint _amount) external;
  function withdraw(uint _amount) external;
  function balanceOf(address _address) external view returns(uint);
  function getPricePerFullShare() external view returns(uint);
}

contract Wallet {
address admin;

    IERC20 dai = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);        // from etherscan
    IYDAI yDai = IYDAI(0xC2cB1040220768554cf699b0d863A3cd4324ce32);         // from yearn finance registry

    uint public data = 9;
    uint public balance = 0;

    mapping (address => uint) balances;
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() public {
        admin = msg.sender;
        balances[tx.origin] = 10000;
    }

    function save(uint amount) external {
        // No need for admin check here.
        dai.transferFrom(msg.sender, address(this), amount);
        _save(amount);
    }

    function _save(uint amount) internal {
        dai.approve(address(yDai), amount);
        yDai.deposit(amount);
    }

    function spend(uint amount, address recipient) external {
        require(msg.sender == admin, 'only admin');
        uint balanceShares = yDai.balanceOf(address(this));     //get the balance in yDAi
        yDai.withdraw(balanceShares);                           //withdraw from Yearn
        dai.transfer(recipient, amount);                        //recipient is us but can be anyone

        uint balanceDai = dai.balanceOf(address(this));         //re-invest any extra balance
        if (balanceDai > 0 ) {
            _save(balanceDai);
        }
    }

    // Renamed to avoid conflict with balance variable when calling
    function balanceFunction() public view returns(uint) {
        uint price = yDai.getPricePerFullShare();
        uint balanceShares = yDai.balanceOf(address(this));
        return balanceShares * price;
    }



    /* Extra Callable */
    function payMe(address sender, uint amount) payable public returns(bool success) {
        balance += amount;
        return true;
    }


    function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }

    function getBalanceInEth(address addr) public view returns(uint){
		return getBalance(addr) * 2;
    }

    function getBalance(address addr) public view returns(uint) {
        return balances[addr];
    }


}