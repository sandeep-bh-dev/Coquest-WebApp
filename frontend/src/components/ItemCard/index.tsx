import * as React from 'react';
import styled from "@emotion/styled";
import Card, { CardProps } from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardHeader from "@mui/material/CardHeader";
import Typography from '@mui/material/Typography';
import ItemMenu from '../ItemMenu';
import ItemModal from '../ItemModal';
import { Item } from '../ItemArray';

<<<<<<< HEAD
const CardImage = styled(CardMedia)({
    cursor: 'pointer'
});

const ItemHeader = styled(CardHeader)({
    padding: '10px 18px'
});

const TaskName = styled(Typography)({
    fontWeight: 400,
    fontSize: 12
});

const ItemName = styled(Typography)({
    fontWeight: 600,
    fontSize: 16
});

const CustomCard = styled(Card)({
    height: 254,
    width: 248.43,
});

type ItemCardProps = {
    item: Item,
    image: string;
    itemId: string;
    taskName: string;
    itemName: string;
};

const ItemCard = ({
    item,
    taskName,
    itemName
}: ItemCardProps) => {
    const [isItemModalOpen, setIsItemModalOpen] = React.useState<boolean>(false);
    return (
        <CustomCard>
            <ItemModal
                key={item.itemId}
                item={item}
                open={isItemModalOpen}
                onClose={() => setIsItemModalOpen(false)}
            />
            <CardImage
                onClick={() => setIsItemModalOpen(true)}>
                <img src={item.image}
                    height="185"
                />
            </CardImage>
            <ItemHeader
                action={
                    <ItemMenu
                        item={item}
                    />
                }
                title={<TaskName>{taskName}</TaskName>}
                subheader={<ItemName>{itemName}</ItemName>}
=======
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
    itemName,
}: ItemCardProps) => {
    const CustomCard = styled(Card)({
        height: 254,
        width: 248.43,
    });
    return (
        <CustomCard>
            <CardMedia style={{ backgroundColor: 'lightgrey' }}
                component="img"
                height="186"
                image=""
                alt=""
            />
            <CardHeader
                action={
                    <ItemMenu />
                }
                title={<Title>{taskName}</Title>}
                subheader={<Subtitle>{itemName}</Subtitle>}
>>>>>>> main
            />
        </CustomCard>
    );
}

export default ItemCard;

