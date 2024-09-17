import * as PriTokenAbi from './abis/PriToken.json'
import * as RideAbi from './abis/Ride.json'

import {PriToken, Ride} from "./types";

export interface ContractConfig {
    name: string;
    address: string;
    abi: any;
}

export const contractAddress = {
    PriToken: '0x0dDadcf0bd6FBd907eD04Dd1A10E47eaDe533E1F',
    Ride: '0x2F939Fd829f84BfE7C3d13BC02C6729f9DA5CF28',
};

export const contracts: ContractConfig[] = [
    {
        name: 'PriToken',
        abi: PriTokenAbi.abi,
        address: contractAddress.PriToken as string,
    },
    {
        name: 'Ride',
        abi: RideAbi.abi,
        address: contractAddress.Ride as string,
    },
];

export interface ContractInstances {
    PriToken: PriToken;
    Ride: Ride;
}
