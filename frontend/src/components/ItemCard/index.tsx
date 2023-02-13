import * as React from 'react';
import styled from "@emotion/styled";
import Card, { CardProps } from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardHeader from "@mui/material/CardHeader";
import Typography from '@mui/material/Typography';
import ItemMenu from '../ItemMenu';
import ItemModal from '../ItemModal';

type ItemCardProps = CardProps & {
    taskName: string;
    itemName: string;
};

const Title = styled(Typography)({
    variant: "overline",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "18px"
});

const Subtitle = styled(Typography)({
    variant: "subtitle2",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "24px"
});


const ItemCard = ({
    taskName,
    itemName
}: ItemCardProps) => {
    const CustomCard = styled(Card)({
        height: 254,
        width: 248.43,
    });
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    return (
        <CustomCard>
            <ItemModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)} />
            <CardMedia
                style={{
                    backgroundColor: 'lightgrey',
                    cursor: 'pointer'
                }}
                component="img"
                height="186"
                image=""
                alt=""
                onClick={()=>setIsModalOpen(true)}
            />
            <CardHeader
                action={
                    <ItemMenu />
                }
                title={<Title>{taskName}</Title>}
                subheader={<Subtitle>{itemName}</Subtitle>}
            />
        </CustomCard>
    );
}

export default ItemCard;

