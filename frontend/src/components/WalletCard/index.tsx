import * as React from 'react';
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import { Wallet } from '../WalletArray';

const CustomCard = styled(Card)({
    height: 140,
    width: 389,
    marginBottom: 20
});

const CardContainer = styled(Typography)({
    padding: "20px 24px",
});

const WalletType = styled(Typography)({
    fontWeight: 400,
    fontSize: 12
});

const WalletName = styled(Typography)({
    fontWeight: 600,
    fontSize: 20
});

const Description = styled(Typography)({
    fontWeight: 400,
    fontSize: 14,
    width: 311
});

type WalletCardProps = {
    wallet: Wallet
}

const WalletCard = ({
    wallet
}: WalletCardProps) => {
    return (
        <CustomCard>
            <CardContainer>
                <WalletType>{wallet.walletType}</WalletType>
                <WalletName>{wallet.walletName}</WalletName>
                <Description>{wallet.description}</Description>
            </CardContainer>
        </CustomCard>
    );
};

export default WalletCard;