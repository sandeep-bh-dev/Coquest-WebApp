import * as React from 'react';
import styled from "@emotion/styled";
import WalletCard from '../WalletCard';
import WalletInfo from '../WalletInfo';
import { Stack } from '@mui/system';
import { Wallets, Wallet } from '../WalletArray';

const Title = styled.h1({
    width: '100%',
    textAlign: 'left',
    fontWeight: 600,
    fontSize: 36,
    marginTop: '60px',
    marginBottom: '20px',
    marginLeft: '23%',
    fontFamily: 'Poppins'
});

const Container = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
});

const Grid = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridGap: '20px',
    width: '80%',
    maxWidth: '1100px',
});

const WalletGrid = () => {
    return (
        <>
            <Title>Wallet</Title>
            <Container>
                <Grid>
                    {Wallets.map((wallet, index) => (
                        <WalletCard
                            key={index}
                            wallet={wallet}
                        />
                    ))}

                    <WalletInfo type="PERSONAL" name="Wallet name 1" />
                </Grid>
            </Container>
        </>
    );
};

export default WalletGrid;
