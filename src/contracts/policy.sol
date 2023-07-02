// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract DecentralizedWeatherInsurance {
    struct Policy {
        address policyholder;
        uint256 premium;
        uint256 payout;
        uint256 startDate;
        uint256 endDate;
        bool claimed;
    }

    mapping(address => Policy[]) public policies;

    AggregatorV3Interface internal priceFeed;

    constructor(address _priceFeedAddress) {
        priceFeed = AggregatorV3Interface(_priceFeedAddress);
    }

    event policyChecked(uint256 premium, uint256 payout, uint256 startDate, uint256 endDate , address owner);

    function createPolicy(uint256 _premium, uint256 _payout, uint256 _startDate, uint256 _endDate) external {
        require(_premium > 0, "Premium must be greater than zero");
        require(_payout > 0, "Payout must be greater than zero");
        require(_startDate < _endDate, "Invalid date range");

        Policy memory newPolicy;
        newPolicy.policyholder = msg.sender;
        newPolicy.premium = _premium;
        newPolicy.payout = _payout;
        newPolicy.startDate = _startDate;
        newPolicy.endDate = _endDate;
        newPolicy.claimed = false;
        
        policies[msg.sender].push(newPolicy);

        emit policyChecked( _premium,  _payout,  _startDate,  _endDate,msg.sender);
    }

    function getPolicyCount(address _policyholder) external view returns (uint256) {
        return policies[_policyholder].length;
    }

    function getPolicy(address _policyholder, uint256 _index) external view returns (address, uint256, uint256, uint256, uint256, bool) {
        require(_index < policies[_policyholder].length, "Invalid policy index");

        Policy memory policy = policies[_policyholder][_index];
        return (policy.policyholder, policy.premium, policy.payout, policy.startDate, policy.endDate, policy.claimed);
    }

    function getPrice() external view returns (int256) {
        (, int256 price, , ,) = priceFeed.latestRoundData();
        return price;
    }

    function claim(uint256 _index) external {
        require(_index < policies[msg.sender].length, "Invalid policy index");
        require(!policies[msg.sender][_index].claimed, "Policy already claimed");

        Policy storage policy = policies[msg.sender][_index];

        require(block.timestamp >= policy.endDate, "Policy not expired yet");

        // Perform weather condition checks using external data oracles
        // Add logic to determine if the weather conditions warrant a claim

        policy.claimed = true;

        // Perform payout to the policyholder
        // You can transfer the payout amount to the policyholder's address
    }
}
