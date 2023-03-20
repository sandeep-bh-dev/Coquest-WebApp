import * as React from 'react';
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import { Wallet } from '../WalletArray';

const InfoCard = styled(Card)({
    height: 723,
    width: 642,
    padding: "24px 24px"
});

const WalletType = styled(Typography)({
    fontWeight: 400,
    fontSize: 12
});

const WalletName = styled(Typography)({
    fontWeight: 600,
    fontSize: 20
});

type WalletInfoProps = {
    wallet: Wallet;
}

const WalletInfo = ({
    wallet
}: WalletInfoProps) => {
    return (
        <InfoCard>
            <WalletType>{wallet.walletType}</WalletType>
            <WalletName>{wallet.walletName}</WalletName>
        </InfoCard>
    );
};

export default WalletInfo;