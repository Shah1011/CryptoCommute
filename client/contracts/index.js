import Web3 from './web3';
import {abi as PriTokenABI} from './abis/PriToken.json'
import {abi as RideABI} from './abis/Ride.json'

const contractAddress = {
	PriToken: '0x0dDadcf0bd6FBd907eD04Dd1A10E47eaDe533E1F',
	Ride: '0x2F939Fd829f84BfE7C3d13BC02C6729f9DA5CF28',
};

const index = [
	{
		name: 'PriToken',
		abi: PriTokenABI,
		address: contractAddress.PriToken
	},
	{
		name: 'Ride',
		abi: RideABI,
		address: contractAddress.Ride
	},
];

export default class Contracts {
	static _instances;

	static get instances() {
		if (Contracts._instances && Web3.isEnabledInBrowser()) return Contracts._instances;

		const web3 = Web3.instance;
		const ContractInstances = {};
		index.forEach((contract) => {
			ContractInstances[contract.name] = new web3.eth.Contract(
				contract.abi,
				contract.address
			);
		});
		Contracts._instances = ContractInstances;
		return Contracts._instances;
	}
}
