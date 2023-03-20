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
        walletName: "PERSONAL",
        walletType: "Item name 1",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa."
    }, {
        walletId: "2",
        walletName: "PERSONAL",
        walletType: "Item name 2",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa."
    }, {
        walletId: "3",
        walletName: "PERSONAL",
        walletType: "Item name 3",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa."
    }, {
        walletId: "4",
        walletName: "PERSONAL",
        walletType: "Item name 4",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa."
    },
]