import * as React from "react";

export interface Wallet {
    walletId: string,
    walletName: string,
    walletType: string,
    description: string,
    transactions: Transaction[],
}

export interface Transaction {
    name: string,
    date: string,
    amount: number;
}

export const Wallets: Wallet[] = [
    {
        walletId: "1",
        walletName: "Wallet name 1",
        walletType: "PERSONAL",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. ",
        transactions: [
            {
                name: "Jacob",
                date: "Jan 25, 2023",
                amount: +200
            },
            {
                name: "Jacob",
                date: "Feb 10, 2020",
                amount: -100
            },
            {
                name: "Jacob",
                date: "Apr 3, 2021",
                amount: +530
            },
            {
                name: "Jacob",
                date: "Oct 4, 2020",
                amount: -50
            }
        ]
    },
    {
        walletId: "2",
        walletName: "Wallet name 2",
        walletType: "PROGRAM NAME",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam. ",
        transactions: [
            {
                name: "Jacob",
                date: "Feb 10, 2020",
                amount: +100
            },
            {
                name: "Jacob",
                date: "Oct 4, 2020",
                amount: -20
            }
        ]
    },
    // Add more wallets with transactions as needed
]
