pragma solidity ^0.6.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
//https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol;

interface IYDAI {
    function deposit(uint _amount) external;
    function withdraw(uint256 _shares) external;
    function balanceOf(address account) external view returns (uint);
    function getPricePerFullShare() external view returns (uint);
}

contract Wallet {

    address admin;
    IERC20 dai = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);
    IYDAI yDai = IYDAI(0xC2cB1040220768554cf699b0d863A3cd4324ce32);

    uint public data = 9;

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
            _save(balanceDai);
        }
    }

    function _save(uint amount) internal {
        dai.approve(address(yDai), amount);
        yDai.deposit(amount);
    }

    function balance() public view returns(uint) {
       return data;
    }

}