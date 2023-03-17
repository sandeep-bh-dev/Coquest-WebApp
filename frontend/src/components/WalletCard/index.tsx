import * as React from 'react';
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';

const CustomCard = styled(Card)({
    height: 140,
    width: 389
});

const CardContainer = styled(Typography)({
    padding: "20px 24px"
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
    type: String,
    name: String,
    description: String
}

const WalletCard = ({
    type,
    name,
    description
}: WalletCardProps) => {
    return (
        <CustomCard>
            <CardContainer>
                <WalletType>{type}</WalletType>
                <WalletName>{name}</WalletName>
                <Description>{description}</Description>
            </CardContainer>
        </CustomCard>
    );
};

export default WalletCard;