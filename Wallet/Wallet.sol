pragma solidity ^0.6.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

interface IYDAI {
    function deposit(uint _amount) external;
    function withdraw(uint256 _shares) external;
    function balanceOf(address account) public view returns (uint);
    function getPricePerFullShare() public view returns (uint);
}

contract Wallet {
    address admin;
    IERC20 dai = IERC20(0x6b175474e89094c44da98b954eedeac495271d0f);
    IYDAI yDai = IYDAI(0xC2cB1040220768554cf699b0d863A3cd4324ce32);

    constructor() public {
        admin = msg.sender;
    }

    function save(uint amount) external {
        dai.transferFrom(msg.sender, address(this), amount);
        dai.approve(address(yDai), amount);
        yDai.deposit(amount);
    }

    function spend(uint amount, address recipient) external {
        require(msg.sender == admin, 'only admin');
        uint balanceShares = yDai.balanceOf(address(this));
        yDai.withdraw(balanceShares);
        dai.transfer(recipient, amount);
        uint balanceDai = dai.balanceOf(address(this));

        if (balanceDai > 0 ) {
            _save(balanceDai)
        }
    }

    function balance() external view returns(uint) {
        uint price = ydai.getPricePerFullShare();
        uint balanceShares = yDai.balanceOf(address(this));
        return balanceShares * price;
    }
}