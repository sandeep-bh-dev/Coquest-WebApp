import * as React from 'react';
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import { Wallet, Transaction } from '../WalletData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

const MainText = styled(Typography)({
    fontWeight: 400,
    fontSize: 12,
    marginTop: 10
});

const Balance = styled(Typography)({
    fontWeight: 500,
    fontSize: 36
});

const TransactionHistory = styled(Typography)({
    fontWeight: 600,
    fontSize: 16,
    marginTop: 20
});

const ColumnHeader = styled(Typography)({
    fontWeight: 600,
    fontSize: 12,
    marginLeft: 15
});

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}


type WalletInfoProps = {
    wallet: Wallet
}

const WalletInfo = ({
    wallet
}: WalletInfoProps) => {
    return (
        <InfoCard>
            <WalletType>{wallet.walletType}</WalletType>
            <WalletName>{wallet.walletName}</WalletName>
            <MainText>Balance:</MainText>
            <Balance>$400</Balance>
            <TransactionHistory>Transaction History</TransactionHistory>

            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Account Name</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {wallet.transactions.map((transaction: Transaction, index) => (
                            <TableRow key={index}>
                                <TableCell>{transaction.name}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                                <TableCell>
                                    {transaction.amount >= 0 ? '+ ' : '- '}
                                    ${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



        </InfoCard>
    );
};

export default WalletInfo;