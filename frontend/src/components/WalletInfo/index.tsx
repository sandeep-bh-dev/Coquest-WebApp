import * as React from 'react';
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';

const InfoCard = styled(Card)({
    height: 723,
    width: 642
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
    type: String,
    name: String,
}

const WalletInfo = ({
    type,
    name,
}: WalletInfoProps) => {
    return (
        <InfoCard>
            <WalletType>{type}</WalletType>
            <WalletName>{name}</WalletName>
        </InfoCard>
    );
};

export default WalletInfo;