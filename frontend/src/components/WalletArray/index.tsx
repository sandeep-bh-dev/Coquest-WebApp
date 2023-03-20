import * as React from "react";

export interface Wallet {
    walletId: string,
    walletName: string,
    walletType: string,
    description: string,
}

export const Wallets: Wallet[] = [
    {
        walletId: "1",
        walletName: "Wallet name 1",
        walletType: "PERSONAL",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. "
    },
    {
        walletId: "2",
        walletName: "Wallet name 2",
        walletType: "PROGRAM NAME",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. "
    },
    {
        walletId: "3",
        walletName: "Wallet name 3",
        walletType: "PROJECT NAME",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam."
    },
    {
        walletId: "4",
        walletName: "Wallet name 4",
        walletType: "CO-OP NAME",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. "
    },
    {
        walletId: "5",
        walletName: "Wallet name 5",
        walletType: "PERSONAL",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. "
    },
    {
        walletId: "6",
        walletName: "Wallet name 6",
        walletType: "CO-OP NAME",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. "
    }
]