import {IConfiguration} from "./configuration/interface/IConfiguration";

export const Configuration: IConfiguration = {
    WBNB_CONTRACT: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    ROUTER: "0x10ED43C718714eb63d5aA57B78B54704E256024E", // Pancake V2 Router
    FACTORY: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73", // Pancake V2 Factory
    WALLET_PUBLIC: "0x000000....", // Your public wallet address
    WALLET_PRIVATE: "0x000000....", // Your private wallet address
    SLIPPAGE: 10, // Default slippage
    GWEI: 5,
    GAS_LIMIT: 450000,
    RPC: "https://bsc-dataseed.binance.org/", // Default RPC
    TOKENS: { // Token list (for the bot) --> Temporary ?
        "BUSD": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "CAKE": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
    }
}
