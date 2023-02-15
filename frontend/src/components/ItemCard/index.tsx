import * as React from 'react';
import styled from "@emotion/styled";
import Card, { CardProps } from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardHeader from "@mui/material/CardHeader";
import Typography from '@mui/material/Typography';
import ItemMenu from '../ItemMenu';
import ItemModal from '../ItemModal';
import { Items } from '../ItemArray';
import { Item } from '../ItemArray';

type ItemCardProps = CardProps & {
    item: Item,
    itemId: string;
    taskName: string;
    itemName: string;
};

const TaskName = styled(Typography)({
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '18px'
});

const ItemName = styled(Typography)({
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '24px'
});

const CustomCard = styled(Card)({
    height: 254,
    width: 248.43,
});

const ItemCard = ({
    item,
    taskName,
    itemName
}: ItemCardProps) => {
    const [isItemModalOpen, setIsItemModalOpen] = React.useState<boolean>(false);
    return (
        <CustomCard>
            {Items.map((item) => (
                <ItemModal
                    key={item.itemId}
                    item={item}
                    open={isItemModalOpen}
                    onClose={() => setIsItemModalOpen(false)}
                />
            ))}
            <CardMedia
                style={{
                    backgroundColor: 'lightgrey',
                    cursor: 'pointer'
                }}
                component="img"
                height="186"
                image=""
                alt=""
                onClick={() => setIsItemModalOpen(true)}
            />
            <CardHeader
                action={
                    <ItemMenu />
                }
                title={<TaskName>{taskName}</TaskName>}
                subheader={<ItemName>{itemName}</ItemName>}
            />
        </CustomCard>
    );
}

export default ItemCard;

